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


function toggleMenu1() {
    const menu1 = document.getElementById("dropdownMenu1");
    const icon1 = document.querySelector(".droplist_header_fmobile .icon1");
  
    if (menu1.style.display === "none" || menu1.style.display === "") {
      menu1.style.display = "block";
      icon1.textContent = "−"; // Đổi biểu tượng
    } else {
      menu1.style.display = "none";
      icon1.textContent = "+"; // Đổi biểu tượng
    }
  }

function toggleMenu2() {
    const menu2 = document.getElementById("dropdownMenu2");
    const icon2 = document.querySelector(".droplist_header_fmobile .icon2");
  
    if (menu2.style.display === "none" || menu2.style.display === "") {
      menu2.style.display = "block";
      icon2.textContent = "−"; // Đổi biểu tượng
    } else {
      menu2.style.display = "none";
      icon2.textContent = "+"; // Đổi biểu tượng
    }
  }
  function toggleMenu3() {
    const menu3 = document.getElementById("dropdownMenu3");
    const icon3 = document.querySelector(".droplist_header_fmobile .icon3");
  
    if (menu3.style.display === "none" || menu3.style.display === "") {
      menu3.style.display = "block";
      icon3.textContent = "−"; // Đổi biểu tượng
    } else {
      menu3.style.display = "none";
      icon3.textContent = "+"; // Đổi biểu tượng
    }
  }

