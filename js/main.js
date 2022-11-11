let a = document.querySelectorAll('.slider__item');
a.forEach(element => {
    element.onclick = function() {
        clearActiveClasses();
        this.classList.add('active')
    }
});
function clearActiveClasses() {
    let a = document.querySelectorAll('.slider__item');
    a.forEach(element => {
        element.classList.remove('active');
    });
}
