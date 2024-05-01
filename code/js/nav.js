const createNav=()=>{
    let nav=document.querySelector('.navbar');
    nav.innerHTML = `
        <div class="nav">
            <img src="./assets/logo.png" class="brand-logo" alt="">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search products,brands..">
                    <button class="search-btn">search</button>
                </div>
                <a href="#"><i class="fa-regular fa-user"></i></a>
                <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="#" class="link">Home</a></li>
            <li class="link-item"><a href="#" class="link">Korean Skincare</a></li>
            <li class="link-item"><a href="#" class="link">Japanese Skincare</a></li>
            <li class="link-item"><a href="#" class="link">Body Care</a></li>
            <li class="link-item"><a href="#" class="link">Lip Care</a></li>
        </ul>
    `;
}

createNav();