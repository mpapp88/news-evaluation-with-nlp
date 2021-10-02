function checkForUrl(url) {
    let validate = url.match(/^(ftp|http|https):\/\/[^ "]+$/);
    if (validate === null){
        alert("Please enter a valid URL!")
    } else {
    return true }
}

export {checkForUrl}