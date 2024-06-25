
//signup form for first users
if(localStorage.getItem("name") == null && localStorage.getItem("password") == null){

    

    document.getElementById("reset").style.display="none";

    document.getElementById('heading').innerHTML="sign up"

    document.getElementById('loginBtn').innerHTML = "sign up"

    function login(){
        let name = document.getElementById("name").value;
        let password = document.getElementById("password").value;
        let email = document.getElementById("email").value;
        let contact = document.getElementById("contact").value;

            //getting details
        localStorage.setItem("name" , name);
        localStorage.setItem("password" , password);
        localStorage.setItem("email" , email);
        localStorage.setItem("contact" , contact);


        //finding the empty field
        let value1 = document.getElementById("name").value.trim();
        let value2 = document.getElementById("password").value.trim();


        if(value1.length == 0 || value2.length == 0){
            alert("havent filled all the sections");
        }
        else{
            alert("signed up successfully");
            window.location.href = "index.html";
        }
    }
}

//login form
else{

    
    document.getElementById("signup").style.display="none"

    //reset the password
    function reset(){

        document.getElementById("heading").innerHTML="reset form";
        document.getElementById("reset").style.display="none";
        document.getElementById("loginBtn").innerHTML="reset";
        document.getElementById("loginBtn").id="resetBtn";
    
        const resetBtn = document.querySelector("#resetBtn");
    
        resetBtn.addEventListener("click", login);
    
        function login(){
    
            let name = document.getElementById("name").value;
            let password = document.getElementById("password").value;
            
            localStorage.setItem("name" , name);
            localStorage.setItem("password" , password);
    
            alert("credentials were successfully changed");
            window.location.reload();
    
        }
    
    
        
    }
        //login form
    function login(){
        let name = document.getElementById("name").value;
        let password = document.getElementById("password").value;
        
        //if password maches move to the site
        if(localStorage.getItem("password") == password && localStorage.getItem("name") == name){
            alert("succesfully loged in");

            document.getElementById("main").style.display="none";
            window.location.href = "index.html";
        }
        else{
            alert("some thing went wrong");
        }

    }
}


