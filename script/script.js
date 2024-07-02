/* para funcionar*/

function menuShow() {
    let menuMobile = document.querySelector('#sidebar');
    if (menuMobile.classList.contains('open-sidebar')) {
        menuMobile.classList.remove('open-sidebar');
        document.querySelector('#open_btn_icon').classList.remove('rotate');
    } else {
        menuMobile.classList.add('open-sidebar');
        document.querySelector('#open_btn_icon').classList.add('rotate');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    let logo = document.getElementById('user_logo');
    logo.addEventListener('click', menuShow);
});