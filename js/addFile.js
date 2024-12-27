document.addEventListener('DOMContentLoaded', function () {
    // Chèn nav
    fetch('asset/nav.html')
        .then(response => response.text())
        .then(data => document.getElementById('nav-placeholder').innerHTML = data);

    // Chèn footer
    fetch('asset/footer.html')
        .then(response => response.text())
        .then(data => document.getElementById('footer-placeholder').innerHTML = data);

    // Chèn services
    fetch('asset/services.html')
        .then(response => response.text())
        .then(data => document.getElementById('services').innerHTML = data);

    //Chèn company-vision 
    fetch('asset/company-vision.html')
        .then(response => response.text())
        .then(data => document.getElementById('company-vision').innerHTML = data);
        

});