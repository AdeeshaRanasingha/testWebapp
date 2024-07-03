const setting = document.querySelector('#setting');
setting.addEventListener("click" , settingfnc);

//when setting button click
function settingfnc(){
    document.getElementById("inner").style.display="none";
    document.getElementById("displaySetting").style.display="block";
}

//when home button click
function home(){
    document.getElementById("inner").style.display="block";
    document.getElementById("displaySetting").style.display="none";
}

let count = parseInt(localStorage.getItem("count"));

if(count % 2 == 1){ //light theme
    document.body.style.color="black";
    document.getElementById('header').style.backgroundColor='rgba(255, 255, 255, 0.5)';
    document.getElementById('top').style.backgroundColor='rgba(255, 255, 255)';
    document.getElementById('theme').style.backgroundColor='rgba(0, 0, 0)';
    document.getElementById('theme').style.color='white';
    document.getElementById('theme').innerHTML="dark mode";
}
else{  //dark theme
    document.body.style.color="white";
    document.getElementById('header').style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    document.getElementById('top').style.backgroundColor = 'rgba(0, 0, 0 )';
    document.getElementById('theme').style.backgroundColor='rgba(255, 255, 255)';
    document.getElementById('theme').style.color='black';
    document.getElementById('theme').innerHTML="light mode";
}

//changing theme
function theme(){
    count = count +1;
    localStorage.setItem("count" , parseInt(count));

    if(count % 2 == 1){ //light theme
        document.body.style.color="black";
        document.getElementById('header').style.backgroundColor='rgba(255, 255, 255, 0.5)';
        document.getElementById('top').style.backgroundColor='rgba(255, 255, 255)';
        document.getElementById('theme').style.backgroundColor='rgba(0, 0, 0)';
        document.getElementById('theme').style.color='white';
        document.getElementById('theme').innerHTML="dark mode";
        
    }
    else{  //dark theme
        document.body.style.color="white";
        document.getElementById('header').style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        document.getElementById('top').style.backgroundColor = 'rgba(0, 0, 0 )';
        document.getElementById('theme').style.backgroundColor='rgba(255, 255, 255)';
        document.getElementById('theme').style.color='black';
        document.getElementById('theme').innerHTML="light mode";
    }
}

//change the color of top and bottom
function changeColor(){
    
    let color = document.getElementById("color");
    color.addEventListener("input",() =>{
        document.getElementById('header').style.backgroundColor=color.value;
        document.getElementById('top').style.backgroundColor=color.value;
    });
}

//change background image
var i =0;
function changeBgImg(){
    i=i+1;
    if(i == 1){
        document.body.style.backgroundImage='url(bg1.jpg)';

    }
    else if(i == 2){
        document.body.style.backgroundImage='url(bg2.jpg)';

    }
    else if(i == 3){
        document.body.style.backgroundImage='url(bg3.jpg)';
        i=0;
    }
}

//to show the data on input box
let username = localStorage.getItem("name");
let email = localStorage.getItem("email");
let contact = localStorage.getItem("contact");
let birth = localStorage.getItem("birth");

document.getElementById("userName").value= username;
document.getElementById("email").value= email;
document.getElementById("contact").value= contact;
document.getElementById("birthday").value= birth;

//save new entries
function save(){
    localStorage.setItem("name" , document.getElementById("userName").value);
    localStorage.setItem("email" , document.getElementById("email").value);
    localStorage.setItem("contact" , document.getElementById("contact").value);
    localStorage.setItem("birth" , document.getElementById("birthday").value);
}
