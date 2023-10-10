
let userName = "";

while(userName == "" || userName == null){
    userName = window.prompt("Enter your name");
}

console.log("Hello", userName);

//promise
const promise = new Promise((resolve, reject) => {

    let fileLoaded = false;

    if(fileLoaded){
        resolve("File loaded");
    }
    else{
        reject("File NOT loaded");
    }
});

promise.then(value => console.log(value))
.catch(error => console.log(error));

const wait = time => new Promise(resolve => {
    setTimeout(resolve, time);
});

wait(3000).then(() => console.log("Thanks for waiting!"));


//map
const store = new Map([
    ["xiaomi", 600],
    ["google", 700],
    ["samsung", 800],
    ["apple", 1000]
]);
  

store.forEach((value, key) => console.log(`${key} $${value}`));



let prices = [200, 250, 300, 350, 400];

for(let price of prices){
    console.log(price);
}

//arrays
let fruits = ["banana", "apple", "orange", "mango"];

fruits = fruits.sort();


for(let fruit of fruits){
    console.log(fruit);
}


//callback
sum(2, 3, displayConsole);

function sum(x, y, callBack){
let result = x + y;
callBack(result);
}




function displayConsole(output){
console.log(output);
}

function displayDOM(output){
document.getElementById("myLabel").innerHTML = output;
}

//ეს უბრალოდ სლაიდი

let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
    active = key;
    reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};

function sendcotact() {
    const data = {
        name: namenik.value,
        email: email.value,
        text: text.value
    }

    axios.post('https://mail.google.com/mail/u/0/#inbox', data)
    .then(response =>{
        console.log(response);
    })
    .catch(error=>{
        console.log(error);
    });
}




function sumUpTo(n) {
    let sum = 0;
    for(let i = 1; i <= n; i++) {
    sum += i;
    }
    return sum;
    }
    
    console.log(sumUpTo(5));
    
    function factorial(n) {
    let result = 1;
    
    for (let i = 1; i <= n; i++) {
    result *= i;
    }
    
    return result;
    }
    
    console.log(factorial(5));
    
    
    function isPrime(n) {
    if (n <= 1) {
    return false;
    }
    
    for (let i = 2; i < n; i++ ) {
    if (n % i === 0) return false;
    }
    return true;
    }
    
    console.log(isPrime(12));


    
    let x;
    let y;
    let z;
    
    document.getElementById("rollButton").onclick = function(){
    
        x = Math.floor(Math.random() * 6) + 1;
        y = Math.floor(Math.random() * 6) + 1;
        z = Math.floor(Math.random() * 6) + 1;
    
        document.getElementById("xlabel").innerHTML = x;
        document.getElementById("ylabel").innerHTML = y;
        document.getElementById("zlabel").innerHTML = z;
    }
    

    let nn = document.getElementById('userform').addEventListener('submit', function(event) {
        event.preventDefault();
    
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var password = document.getElementById('password').value;
    
        
        var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(email)) {
            alert('hello ,' + email  + ',_come in !' );
        }
    
        
        var phoneRegex = /^(\(\d{3}\) |\d{3}-)\d{3}-\d{4}$/;
        if (!phoneRegex.test(phone)) {
             alert('hello,'+  phone   +  ",_ saved - come in");
        }
    
        
        var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
        if (!passwordRegex.test(password)) {
            alert('you should not have done that :) :) :)');
        }
    }); 
  

