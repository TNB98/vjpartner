fetch('/data/product.json')
    .then(response => response.json())
    .then(data => {
        const outputDiv = document.getElementById('output');
        let content = '';

        // Lặp qua các sản phẩm và hiển thị thông tin
        data.list.forEach(item => {
            content += `
            <div class="card col-3" style="margin:10px 10px;min-width: 12rem;max-width:20rem">
                <img class="card-img-top" src="${item.urlImg}" alt="..." style="width:100%">
                <div class="card-body">
                    <h5 class="card-title">${item.nameProducts}</h5>
                    <p class="card-text" style="color:#ff914d"><strong>${item.price}</strong></p>
                    <a href="#" class="btn btn-primary">Xem Thêm</a>
                    <div class="rating" style="display: flex;">
                        <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <div>
                            <span class="review-count" style="color:#a6a6a6;">${item.quantity}</span>
                        </div>
                    </div>
                </div>
            </div>
                        `
        });

        // Hiển thị nội dung trong phần tử có id='output'
        outputDiv.innerHTML = content;
    })
    .catch(err => console.error('Lỗi khi tải file JSON:', err));