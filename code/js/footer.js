const createFooter=()=>{
    let footer=document.querySelector('footer');
    footer.innerHTML= `
    <div class="footer-content">
            <img src="./assets/logo.png" class="logo" alt="">
            <div class="footer-ul-container">
                <ul class="category">
                    <li class="category-title">Skincare</li>
                    <li><a href="#" class="footer-link">Facewash</a></li>
                    <li><a href="#" class="footer-link">Cleansing oil</a></li>
                    <li><a href="#" class="footer-link">Sunscreen</a></li>
                    <li><a href="#" class="footer-link">Moisturizer</a></li>
                    <li><a href="#" class="footer-link">Serum</a></li>
                    <li><a href="#" class="footer-link">Lip balm</a></li>
                    
                </ul>

                <ul class="category">
                    <li class="category-title">Hair Care</li>
                    <li><a href="#" class="footer-link">Shampoo</a></li>
                    <li><a href="#" class="footer-link">Hair Mask</a></li>
                    <li><a href="#" class="footer-link">Hair oil</a></li>
                    <li><a href="#" class="footer-link">Conditioner</a></li>
                    
                </ul>
            </div>
        </div>
        <p class="footer-title">About us</p>
            <p class="info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi vitae, earum iusto sit corporis placeat obcaecati dolorem deserunt excepturi, labore libero itaque dolor fuga mollitia id veniam nam reprehenderit consequatur.
            Ipsam voluptatum praesentium neque, assumenda quod quo molestiae, non labore voluptates debitis quis repellat aut vitae dolore corrupti minus. Placeat voluptatum porro illo, eligendi reprehenderit magni deserunt! Aperiam, at error?
            Quis vel pariatur voluptas aliquid culpa rem, ea libero eum fugit. Quibusdam ratione, vitae, reiciendis alias dolorem perspiciatis placeat, laboriosam rem ad officiis nisi eos eius dolorum quas eligendi aperiam!</p>
            <p class="info">support emails - kireikyo@gmail.com</p>
            <p class="info">telephone - 01612345689</p>
            <div class="footer-social-container">
                <div>
                    <a href="#" class="social-link">terms & services</a>
                    <a href="#" class="social-link">privacy page</a>
                </div>
                <div>
                    <a href="#" class="social-link">Instagram</a>
                    <a href="#" class="social-link">Facebook</a>
                </div>
            </div>
    
    `;
}

createFooter();