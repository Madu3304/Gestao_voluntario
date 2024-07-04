
function menuShow() {
    let menuMobile = document.querySelector('#sidebar');
    menuMobile.classList.add('open-sidebar');
    document.querySelector('#open_btn_icon').classList.add('rotate');
}

function menuHide() {
    let menuMobile = document.querySelector('#sidebar');
    menuMobile.classList.remove('open-sidebar');
    document.querySelector('#open_btn_icon').classList.remove('rotate');
}

document.addEventListener('DOMContentLoaded', function() {
    let sidebar = document.getElementById('sidebar');
    sidebar.addEventListener('mouseover', menuShow);
    sidebar.addEventListener('mouseout', menuHide);
});