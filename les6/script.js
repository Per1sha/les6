
fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
        const allProductsSection = document.querySelector('.all_products');

    
        data.forEach(product => {
            const productElement = document.createElement('div'); 
            productElement.classList.add('all_products_item');
            productElement.innerHTML = `
                <img src="${product.image}" class="product-image" alt="${product.title}">
                <h2>${product.title}</h2>
            `;
            allProductsSection.appendChild(productElement);

            
            productElement.addEventListener('click', function () {
                const modalDetails = document.querySelector('#modal-details');
                modalDetails.innerHTML = `
                    <h2>${product.title}</h2>
                    <h3>${product.description}</h3>
                    <h5>${product.category}</h5>
                    <p>Price: $${product.price}</p>
                    <img class="modalImg" src="${product.image}" alt="${product.title}">
                `;

                
                const modal = document.getElementById('productModal');
                modal.style.display = 'block';
            });
        });

       
        const closeModal = document.querySelector('.close');
        closeModal.addEventListener('click', function () {
            const modal = document.getElementById('productModal');
            modal.style.display = 'none';
        });
    });






































































