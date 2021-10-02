//import { response } from "express";
import { checkForUrl } from "./urlValidation";

function handleSubmit(event) {
    event.preventDefault();

    let url = document.getElementById('url').value;
    if (checkForUrl(url)) {
        fetch('http://localhost:3001/addData', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({url: url})
        })
        .then((response) => response.json())
        .then((response) => {
            console.log(response)
            document.getElementById('polarity').innerHTML = response.score_tag;
            document.getElementById('subjectivity').innerHTML = response.subjectivity;
            document.getElementById('confidence').innerHTML = response.confidence + '%';
            document.getElementById('agreement').innerHTML = response.agreement;
            document.getElementById('irony').innerHTML = response.irony;    
        })
    } else {
        console.log("Error: URL is not valid")
    }
};

export { handleSubmit }