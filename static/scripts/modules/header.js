export function header() {
    // window.addEventListener('scroll', function() {
    //     const header = document.querySelector('.header');
    //     const sticky = header.offsetTop;
    
    //     if (window.pageYOffset > sticky) {
    //         header.classList.add('sticky');
    //     } else {
    //         header.classList.remove('sticky');
    //     }
    // });
    
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const desc = document.querySelector('.description-section .desc');

    toggleButton.addEventListener('click', function() {
        desc.classList.toggle('expanded');
        toggleButton.textContent = desc.classList.contains('expanded') ? 'Свернуть' : 'Развернуть';
    });
});
}