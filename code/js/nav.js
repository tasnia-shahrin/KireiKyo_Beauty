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
                <a>
                    <div class="userImg"><i class="fa-regular fa-user"></i></div>
                    <div class="login-logout-popup hide">
                        <p class="account-info">Log in as,name</p>
                        <button class="btn" id="user-btn">Log out</button>
                    </div>
                </a>
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

//nav popup
const userImageButton=document.querySelector('.userImg');
const userPopup=document.querySelector('.login-logout-popup');
const  popuptext=document.querySelector('.account-info');
const actionBtn=document.querySelector('#user-btn');

userImageButton.addEventListener('click',()=>{
    userPopup.classList.toggle('hide');
})

window.onload=()=>{
    let user=JSON.parse(sessionStorage.user||null);
    if(user!=null){
        popuptext.innerHTML=`log in as, ${user.namee}`;
        actionBtn.innerHTML=`log out`;
        actionBtn.addEventListener('click',()=>{
            sessionStorage.clear();
            location.reload();
        })
    }else{
        popuptext.innerHTML=`log in to place order`;
        actionBtn.innerHTML='log in';
        actionBtn.addEventListener('click',()=>{
            location.href='/login';
        })
    }
}