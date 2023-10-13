const textArea = document.querySelector('#text');
const button = document.querySelector('#speak');

button.onclick = () => {
    if (textArea.value) {
        fetch('/play', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                text: textArea.value
            })
        })
        .then(res => res.json())
        .then(data => {
            if (data.error) {
                console.log(data.error);
            }
            else {
                console.log(data.status);
            }
        })
        .catch(err => console.log(err));
    }
    else {
        console.log('No text provided');
    }
}