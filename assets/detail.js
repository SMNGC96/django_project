document.addEventListener('DOMContentLoaded', function() {
    const card = document.querySelector('.card');
    card.addEventListener('click', function() {
        this.classList.toggle('flipped');
    });
    const returnLink = document.querySelector('.return-container a');
    returnLink.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});