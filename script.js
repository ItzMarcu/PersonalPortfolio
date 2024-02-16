
let emailButton = document.getElementById("email-button");
emailButton.addEventListener("click", function () {
    if(navigator.clipboard) {
        navigator.clipboard.writeText("andreamrccc@gmail.com");
    } else {
        let textarea = document.createElement('textarea');
        textarea.value = "andreamrccc@gmail.com";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
    }
});