document.addEventListener("DOMContentLoaded", function () {
    var chart = document.querySelector('.element1');

    function checkPosition() {
        var rect = chart.getBoundingClientRect();
        var windowHeight = window.innerHeight || document.documentElement.clientHeight;

        // Kiểm tra nếu phần tử nằm trong viewport
        if (rect.top <= windowHeight && rect.bottom >= 0) {
            chart.classList.add('bounceInLeft');
        } else {
            chart.classList.remove('bounceInLeft'); // Reset animation khi không nằm trong viewport
        }
    }

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', checkPosition);

    // Gọi hàm kiểm tra ngay khi tải trang
    checkPosition();
});

document.addEventListener("DOMContentLoaded", function () {
    var chart = document.querySelector('.element2_line');

    function checkPosition() {
        var rect = chart.getBoundingClientRect();
        var windowHeight = window.innerHeight || document.documentElement.clientHeight;

        // Kiểm tra nếu phần tử nằm trong viewport
        if (rect.top <= windowHeight && rect.bottom >= 0) {
            chart.classList.add('bounceInLeft');
        } else {
            chart.classList.remove('bounceInLeft'); // Reset animation khi không nằm trong viewport
        }
    }

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', checkPosition);

    // Gọi hàm kiểm tra ngay khi tải trang
    checkPosition();
});
