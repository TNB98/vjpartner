/*document.addEventListener('DOMContentLoaded', function () {
    fetch('asset/contact-section.html')
    .then(response => response.text())
    .then(data => document.getElementById('contact-section').innerHTML = data);

    document.getElementById("dataForm").addEventListener("submit", async function (e) {
        e.preventDefault();
        

        // Lấy dữ liệu từ form
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const titler = document.getElementById("titler").value;
        const content = document.getElementById("content").value;

        // Gửi dữ liệu tới Google Apps Script
        const response = await fetch("https://script.google.com/macros/s/AKfycbxRAwoEaxbKnoDZGVHxDxH6v83B-Tf_Ns6ReWQOnt4gIT62g3NMBs1ZwmK2svkLzuQ/exec", { // Thay bằng URL Web App
            mode: "no-cors",
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, phone, titler, content }),
        });

        // Kiểm tra phản hồi
        const result = await response.text();
        alert(result);
    });

});*/

document.addEventListener('DOMContentLoaded', function () {
    // Tải HTML động
    fetch('asset/contact-section.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('contact-section').innerHTML = data;
        });

    // Lắng nghe sự kiện submit thông qua Event Delegation
    document.addEventListener("submit", async function (e) {
        // Kiểm tra nếu sự kiện xảy ra từ form có id "dataForm"
        if (e.target && e.target.id === "dataForm") {
            e.preventDefault(); // Ngăn form reload trang

            //Hiển Thị Form Đang Xử Lý
            var button_submit = document.getElementById("button_submit")
            button_submit.innerHTML = '<div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>'

            // Lấy dữ liệu từ form
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const phone = document.getElementById("phone").value;
            const titler = document.getElementById("titler").value;
            const content = document.getElementById("content").value;

            try {
                const response = await fetch("https://script.google.com/macros/s/AKfycbxRAwoEaxbKnoDZGVHxDxH6v83B-Tf_Ns6ReWQOnt4gIT62g3NMBs1ZwmK2svkLzuQ/exec   ", {
                    mode: "no-cors",
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ name, email, phone, titler, content }),
                });
                //Hiển Thị Form Đang Xử Lý
                button_submit.innerHTML = 'Gửi Liên Hệ';
                element = document.getElementById('myDiv');
                element.style.display = "block";
            } catch (error) {
                alert("Submission failed: " + error.message);
            }
            document.getElementById("name").value = '';
            document.getElementById("email").value = '';
            document.getElementById("phone").value = '';
            document.getElementById("titler").value = '';
            document.getElementById("content").value = '';
        }
    });
});
