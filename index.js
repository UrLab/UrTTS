
const express = require("express"),
    app = express(),
    port = process.env.PORT || 6942,
    { exec } = require("child_process")

app.set("view engine", "pug")
app.use("/", express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get("/", (req, res) => {
    res.render("index")
})

app.post("/play", (req, res) => {
    if (req.body.text) {
        exec("python3 ./main.py " + req.body.text, (err, stdout, stderr) => {
            if (err) {
                console.log(err)
                res.json({
                    error: err
                })
            }
            else {
                console.log(stdout)
                res.json({
                    status: "success"
                })
            }
        })
    }
    else {
        res.json({
            error: "No text provided"
        })
    }
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})