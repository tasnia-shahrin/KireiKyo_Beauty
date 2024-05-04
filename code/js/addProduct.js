let user=JSON.parse(sessionStorage.getItem('user'));
let loader=document.querySelector('.loader');

//checking user is logged in or not
window.onload=()=>{
    if(!user){
       
        location.replace('/login');
    }else{
        location.replace('/add-product');
    }
    
}

// price inputs

const actualPrice=document.querySelector('#actual-price');
const discountPercentage=document.querySelector('#discount');
const sellingPrice=document.querySelector('#sell-price');

discountPercentage.addEventListener('input',()=>{
    if(discountPercentage.value>100){
        discountPercentage.value=discountPercentage.value;
    }else{
        let discount=(actualPrice.value*discountPercentage.value) / 100;
        sellingPrice.value=actualPrice.value-discount;
    }
})

sellingPrice.addEventListener('input',()=>{
    let discount=(sellingPrice.value/actualPrice.value)*100;
    discountPercentage.value=discount;
})

//upload image handle
let uploadImages=document.querySelector('.fileupload');
let imagePaths=[]; //will store all uploaded images paths