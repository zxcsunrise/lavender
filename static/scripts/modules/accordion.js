export function accordion() {
    document.addEventListener('DOMContentLoaded', function() {
        const headers = document.querySelectorAll('.accordion-header');
    
        headers.forEach(header => {
            header.addEventListener('click', function() {
                // Получаем содержимое аккордеона
                const content = this.nextElementSibling;
    
                // Переключаем отображение содержимого
                if (content.style.display === 'flex') {
                    content.style.display = 'none';
                } else {
                    // Закрываем все открытые элементы перед открытием
                    document.querySelectorAll('.accordion-content').forEach(item => {
                        item.style.display = 'none';
                    });
    
                    content.style.display = 'flex';
                }
            });
        });
    });
}