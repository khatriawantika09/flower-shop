# flower-shop
website 
HTML CODE :

!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Bloomify | Flower Shop</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="st.css">
</head>

<body>

<!-- HEADER -->
<header>
    <h2 class="logo">Bloomify</h2>
    <nav>
        <a href="#home">Home</a>
        <a href="#products">Flowers</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#gallery">Gallery</a>
        <a href="#help">Help</a>
        <a href="#cart">Cart</a>
    </nav>
</header>
<!-- HOME -->
<section id="home" class="hero">
    <div>
        <h1>FRESH FLOWERS WITH FRESH EMOTIONS</h1>
        <p>LOVE • BEAUTY • EMOTIONS</p>
    </div>
</section>

<!-- PRODUCTS -->
<section id="products">
    <h2>Our Flowers</h2>
    <div class="product-grid">
        <div class="product-card">
            <img src="https://images.unsplash.com/photo-1633002301253-9dbe6b979a53?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
            <h3>Red Roses</h3>
            <p>2800 RS</p>
            <button onclick="addToCart('Red Roses',2800)">Add</button>
        </div>
        <div class="product-card">
            <img src="https://www.saharanpurnursery.in/cdn/shop/files/top-15-air-cleaning-purifying-houseplants-NASA-Clean-Air-Study-healthy-clean-living-gerbera_700x700.jpg?v=1718611184" >
            <h3>Pink Gerbera</h3>
            <p>1700 RS</p>
            <button onclick="addToCart('Pink Gerbera',1700)">Add</button>
        </div>
        <div class="product-card">
            <img src="https://images.ctfassets.net/i3tkg7dt3kro/63FGq7L4NaWBLjl27vDtdZ/2e076e0c74a7c22ad3ed3bd44ec11086/6-11_Meaning-of-Sunflowers_Images.jpg?w=1920&fm=webp&q=70">
            <h3>sun flower</h3>
            <p>800 RS</p>
            <button onclick="addToCart(' sun flower ',800)">Add</button>
    </div>
    <div class="product-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_cutS-blxXZZVMt7R1QotLO4I10kKa3vpDg&s">
            <h3>Daisy</h3>
            <p>3000 RS</p>
            <button onclick="addToCart('Daisy',3000)">Add</button>
    </div>
    <div class="product-card">
            <img src="https://www.gardendesign.com/pictures/images/900x705Max/site_3/pink-twinkle-tiger-lily-asiatic-lily-garden-design_11076.jpg">
            <h3>lily</h3>
            <p>600 RS</p>
            <button onclick="addToCart('lily',600)">Add</button>
    </div>
    <div class="product-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhCLF3Y4JjC1cwhqR2eynUL2R3ayeUziR7mw&s">
            <h3>tulip</h3>
            <p>900 RS</p>
            <button onclick="addToCart('tulip',900)">Add</button>
    </div>
    <div class="product-card">
            <img src="https://fromyouflowers.pk/wp-content/uploads/2020/12/Eternal-Love.jpg.webp">
            <h3>basket of roses</h3>
            <p>500 RS</p>
            <button onclick="addToCart('basket of roses',500)">Add</button>
    </div>
    <div class="product-card">
            <img src="https://thumbs.dreamstime.com/b/jasmine-beautiful-white-flower-green-leaves-38867601.jpg">
            <h3>Jasminum</h3>
            <p>3000 RS</p>
            <button onclick="addToCart('Jasminum',3000)">Add</button>
    </div>
    <div class="product-card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Tagetes_erecta_chendumalli_chedi.jpg/960px-Tagetes_erecta_chendumalli_chedi.jpg">
            <h3>Marigold</h3>
            <p>7000 RS</p>
            <button onclick="addToCart('Marigold',7000)">Add</button>
    </div>
    <div class="product-card">
            <img src="https://awakeningshealth.com/wp-content/uploads/2021/09/Untitled-design-8-1.jpg">
            <h3>Lotus</h3>
            <p>980 RS</p>
            <button onclick="addToCart('Lotus',980)">Add</button>
    </div>
    <div class="product-card">
            <img src="https://hips.hearstapps.com/hmg-prod/images/blue-orchids-680fd35494748.jpg?resize=980:*">
            <h3>Blue Orchid</h3>
            <p>720 RS</p>
            <button onclick="addToCart('Blue Orchid',720)">Add</button>
    </div>
    <div class="product-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVOtPvyB-5w6rch7tRp6W3tQKkL_SZzbH8GA&s">
            <h3>Black Rose</h3>
            <p>1370 RS</p>
            <button onclick="addToCart('Black Rose',1370)">Add</button>
    </div>
    <div class="product-card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/8f/Mohavea_confertiflora_1.jpg">
            <h3>Ghost Flower</h3>
            <p>908 RS</p>
            <button onclick="addToCart('Ghost Flower',908)">Add</button>
    </div>
    <div class="product-card">
            <img src="https://media.houseandgarden.co.uk/photos/66165dbebb238cb032f6af1e/1:1/w_4016,h_4016,c_limit/976728714">
            <h3>peonies</h3>
            <p>2887 RS</p>
            <button onclick="addToCart('peonies',2887)">Add</button>
    </div>
    <div class="product-card">
            <img src="https://www.shutterstock.com/image-photo/closeup-view-lavender-sprig-purple-260nw-2499116333.jpg">
            <h3>Lavender</h3>
            <p>2000 RS</p>
            <button onclick="addToCart('Lavender',2000)">Add</button>
    </div>
    <div class="product-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl5W-0GshbCUAhand3Ng0IO10UmhHRcagKDg&s">
            <h3>Zinnia</h3>
            <p>4000 RS</p>
            <button onclick="addToCart('Zinnia',4000)">Add</button>
    </div>
    <div class="product-card">
            <img src="https://cdn.britannica.com/04/118304-050-585EBE37/Corn-poppy.jpg">
            <h3>Poppy</h3>
            <p>3000 RS</p>
            <button onclick="addToCart('Poppy',3000)">Add</button>
    </div>
    <div class="product-card">
            <img src="https://www.palmers.co.nz/cdn/shop/files/ANTHURIUM-AMANTE-PINK_800x.jpg?v=1733277410">
            <h3>Anthurium</h3>
            <p>5000RS</p>
            <button onclick="addToCart('Anthurium',5000)">Add</button>
    </div>
    <div class="product-card">
            <img src="https://theluvbox.pk/cdn/shop/files/8958c59e-e2fe-447d-9155-41deb52f345d.webp?v=1750780443">
            <h3>mix flowers</h3>
            <p>908 RS</p>
            <button onclick="addToCart('mix flowers',908)">Add</button>
    </div>
    <div class="product-card">
            <img src="https://assets.eflorist.com/assets/products/PZM_/T228-1A.jpg?impolicy=hero&impolicy=hero">
            <h3>lily basket</h3>
            <p>900RS</p>
            <button onclick="addToCart('lily basket',900)">Add</button>
    </div>
    <div class="product-card">
            <img src="https://www.dutchgrown.com/cdn/shop/files/Cosmons_Astroanguineus-1.jpg?v=1695133541">
            <h3>Chocolate Cosmos</h3>
            <p>1000 RS</p>
            <button onclick="addToCart('Chocolate Cosmos',1000)">Add</button>
    </div>
    <div class="product-card">
            <img src="https://www.thespruce.com/thmb/mE9-28XFACXl657Q3efps9rbqaY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hibiscus-growing-guide-5192541-hero-615db48a744245c49517f7f4bef54d18.JPG">
            <h3>Hibiscus</h3>
            <p>2000RS</p>
            <button onclick="addToCart('Hibiscus',2000)">Add</button>
    </div>
    <div class="product-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQym4lMNhLd-31IV9IR690zBnYE1b9X2p8Gwg&s">
            <h3>Tuberose (Rajnigandha)</h3>
            <p>1200RS</p>
            <button onclick="addToCart('Tuberose (Rajnigandha)',1200)">Add</button>
    </div>
    <div class="product-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdX2DJJIEfhUg3G1RBmbEmcgcjFBpuR0PJZA&s">
            <h3>pink roses </h3>
            <p>1200RS</p>
            <button onclick="addToCart( 'pink roses',1200)">Add</button>
    </div>
    <div class="product-card">
            <img src="https://cdn.mos.cms.futurecdn.net/Unb3SkkgZxz9HCbYCAnvPo.jpg">
            <h3>green flowers</h3>
            <p>1200RS</p>
            <button onclick="addToCart('green flowers',1200)">Add</button>
    </div>
</section>


<!-- GALLERY -->
<section id="gallery">
    <h2>Flower Gallery</h2>
    <div class="gallery-grid">
        <img src="https://media.istockphoto.com/id/1406482571/photo/flowers-at-a-florist-austria.jpg?s=612x612&w=0&k=20&c=TcAmD0DmVHYpKz83SGTEpMvjVXSHbtATdRp30znQ860=">
        <img src="https://img.freepik.com/free-photo/flowers-floral-shop-different-types_1303-15615.jpg">
    </div>
</section>

<!-- ABOUT -->
<section id="about" class="info-section">
    <div class="info-box">
        <img src="https://t3.ftcdn.net/jpg/04/28/59/36/360_F_428593656_OlI7EwOEgG2ogmJ9caT7lKJcao2Ajeex.jpg">
        <div class="info-content">
            <h2>About Bloomify</h2>
            <p>
                Bloomify is a premium flower shop delivering fresh,
                elegant and handcrafted bouquets for every occasion.
            </p>
        </div>
    </div>
</section>

<!-- SERVICES -->
<section id="services" class="info-section">
    <div class="info-box reverse">
        <img src="https://thumbs.dreamstime.com/b/person-delivering-vibrant-floral-bouquet-to-residential-home-celebrating-special-service-occasion-giving-gift-delivery-man-430573556.jpg">
        <div class="info-content">
            <h2>Our Services</h2>
            <ul>
                <li>Wedding Decoration</li>
                <li>Birthday & Anniversary Bouquets</li>
                <li>Corporate Events</li>
                <li>Same Day Delivery</li>
                <li>Custom Floral Designs</li>
            </ul>
        </div>
    </div>
</section>

<!-- HELP -->
<section id="help" class="info-section">
    <div class="info-box">
        <img src="https://img.freepik.com/free-photo/little-girl-greeting-mother-with-flowers-mothers-day_1303-21721.jpg">
        <div class="info-content">
            <h2>Help & Support</h2>
            <p><b>Email: flowersshop09@gmail.com </b></p>
            <p><b>Phone: 03703780833 </b></p>
        </div>
    </div>
</section>

<!-- CONTACT -->
<section class="contact" id="contact">
    <h2 class="section-title">Get In Touch</h2>
    <div class="contact-info">
        <div class="contact-item">
            <h4>📞 Call Us</h4>
            <p>03053805691</p>
        </div>
    </div>
</section>
<!-- CART -->
<section id="cart">
        <img src="https://cdn.shopify.com/s/files/1/0660/2765/1230/files/9_5bd1ae7a-dc59-4852-953f-b89e2cff1d5e.jpg?v=1742535738"width="500" height="400">
        <h2>Your Cart</h2>
    <ul id="cartItems"></ul>
    <h3 id="total">Total: 0 RS</h3>
</section>

<footer>
    © 2026 Bloomify fresh flowers with love & emotions 
</footer>

<script src="jv.js"></script>
</body>
</html>

CSS CODE :
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Segoe UI;
}

body{
    background:#fff5f5;
    color:#4a0c0c;
    transition:.3s;
    
}

body.dark{
    background:#121212;
    color:#f5f5f5;
}

/* HEADER */
header{
    display:flex;
    justify-content:space-between;
    padding:15px 40px;
    background:#b11226;
    color:white;
    position:sticky;
    top:0;
}

nav a, nav button{
    color:white;
    margin-left:15px;
    background:none;
    border:none;
    cursor:pointer;
}

/* HERO */
.hero{
    height:70vh;
    background:linear-gradient(rgba(211, 178, 178, 0.8),rgba(218, 119, 119, 0.8));
    display:flex;
    align-items:center;
    justify-content:center;
    color:black;
    text-align:center;
}

section{
    padding:60px;
    text-align:center;
}

.product-grid, .gallery-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
    gap:25px;
}

.product-card{
    background:white;
    padding:15px;
    border-radius:12px;
}

body.dark .product-card{
    background:#1e1e1e;
}

.product-card img{
    width:100%;
    height:220px;
    object-fit:cover;
    border-radius:10px;
}

button{
    background:#b11226;
    color:white;
    padding:8px 15px;
    border:none;
    border-radius:5px;
}

footer{
    background:#b11226;
    color:white;
    padding:20px;
    text-align:center;
}
/* Hover Animation */
.info-box{
    transition: transform .4s ease, box-shadow .4s ease;
}

.info-box:hover{
    transform: translateY(-10px);
    box-shadow:0 25px 55px rgba(177,18,38,0.35);
}

.info-box img{
    transition: transform .5s ease;
}

.info-box:hover img{
    transform: scale(1.05);
}
/* INFO SECTIONS BOX STYLE */
.info-section{
    padding:70px 60px;
}

.info-box{
    max-width:1100px;
    margin:auto;
    display:flex;
    align-items:center;
    gap:40px;
    background:#fff;
    border-radius:18px;
    padding:40px;
    box-shadow:0 15px 40px rgba(177,18,38,0.2);
}

.info-box img{
    width:45%;
    height:280px;
    object-fit:cover;
    border-radius:15px;
}

.info-content{
    width:55%;
    text-align:left;
}

.info-content h2{
    color:#b11226;
    margin-bottom:15px;
}

.info-content p, 
.info-content li{
    font-size:16px;
    line-height:1.8;
}

.info-content ul{
    padding-left:18px;
}

/* reverse layout for middle section */
.info-box.reverse{
    flex-direction:row-reverse;
}

/* DARK MODE SUPPORT */
body.dark .info-box{
    background:#1e1e1e;
}

JAVASCRIPT CODE :

let total = 0;
let loggedIn = false;

function addToCart(name, price){
    const li = document.createElement("li");
    li.textContent = name + " - " + price + " RS";
    document.getElementById("cartItems").appendChild(li);
    total += price;
    document.getElementById("total").innerText = "Total: " + total + " RS";
}

function login(){
    loggedIn = true;
    alert("Login Successful!");
}

function signup(){
    alert("Signup Successful! Please Login.");
    showLogin();
}

function showSignup(){
    document.getElementById("login").classList.add("hidden");
    document.getElementById("signup").classList.remove("hidden");
}

function showLogin(){
    document.getElementById("signup").classList.add("hidden");
    document.getElementById("login").classList.remove("hidden");
}

function showPayment(){
    if(!loggedIn){
        alert("Please login first!");
        return;
    }
    document.getElementById("payment").classList.remove("hidden");
}

function placeOrder(){
    document.getElementById("payment").classList.add("hidden");
    document.getElementById("orderDone").classList.remove("hidden");
}
