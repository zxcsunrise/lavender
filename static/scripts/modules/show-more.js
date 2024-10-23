export function show_more() {
    document.addEventListener('DOMContentLoaded', function() {
        const toggleButton = document.getElementById('toggleButton');
        const desc = document.querySelector('.description-section .desc');
    
        toggleButton.addEventListener('click', function() {
            desc.classList.toggle('expanded');
            toggleButton.textContent = desc.classList.contains('expanded') ? 'Свернуть' : 'Развернуть';
        });
    });
}