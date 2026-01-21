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
