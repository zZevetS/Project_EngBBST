document.getElementById('toggle-button').addEventListener('click', function (e) {
    e.preventDefault();
    
    var textContent = document.querySelector('.text-content');
    var button = document.getElementById('toggle-button');

    if (textContent.classList.contains('expanded')) {
        textContent.classList.remove('expanded');
        button.textContent = 'Xem thêm';
    } else {
        textContent.classList.add('expanded');
        button.textContent = 'Thu gọn';
    }
});