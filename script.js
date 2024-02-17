
let arrowButton = document.getElementById('arrow');
let arrowPicture = document.getElementById('img-arrow')
let scrollableContent = document.getElementById('scrollable');
let isDown = false;

function ChangeArrow () {
    arrowPicture.src = 'images/up-arrow.png';
}

arrowButton.addEventListener('click', function () {
    if (isDown === true) {
        ChangeArrow();
    } else {
        scrollableContent.scrollTop += 100;
        isDown = true;
    }
});