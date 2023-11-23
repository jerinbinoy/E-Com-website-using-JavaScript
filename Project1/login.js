





document.getElementById('password').blur(function(){
        
        var password1 = document.querySelector('.passwordinput').value;
                if (password1 < 4){
                        alert("This field requires minimum 5 characters");
                }
        });





// Receiving the click and calling adequate function to perform
const submitButton = document.querySelector('.submit-btn');
if(submitButton){
        submitButton.addEventListener('click',addUser);
}
document.querySelector('.btn').addEventListener('click',validation);




function addUser(){
        //Storing received credentials from user
        var username = document.querySelector('.nameinput').value ;
        var email = document.querySelector('.emailinput').value ;
        var password = document.querySelector('.passwordinput').value ;
        var repassword = document.querySelector('.re-password-js').value ;

        //checking password and reentered password 
        if (password === repassword){
                //Storing it as an object
                let users = JSON.parse(localStorage.getItem('user'));
                let user = {name:username,email:email,password:password} ;
                
                users.push(user);
                localStorage.setItem('user',JSON.stringify(users)) ;
                
                document.getElementById('password-reenter').style.borderColor = '' ;
                document.getElementById('password-reenter').style.backgroundColor = '' ;
                document.querySelector('.re-password-js').value = repassword ;
                document.querySelector('.alertsection').innerHTML = ``;
                location.href = "login.html" ;
        }else{
                //if password not matching to re-entered password
                document.getElementById('password-reenter').style.borderColor = 'red' ;
                document.getElementById('password-reenter').style.backgroundColor = 'rgb(236, 162, 162)' ;
                document.querySelector('.re-password-js').value = '' ;
                document.querySelector('.alertsection').innerHTML = `<div class="alert alert-dismissible alert-danger d-flex align-items-center fade show " role="alert" >
                <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:" ><use xlink:href="#exclamation-triangle-fill"/></svg>
                <div>
                  Passwords should be same.
                </div>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>`   ;  
        }
        

}

function validation(){
        // Receiving user credentials and storing in the variables
        var name = document.querySelector('.loginname').value ;
        var password = document.querySelector('.passwordinput').value ;
       let importUser = JSON.parse(localStorage.getItem('user'));
       var filteredUsers = importUser.filter(function(filtered){
                return filtered != null ; 
       }) ;

       console.log(filteredUsers);
        
       // Validating the credentials with the stored data of the user from the local storage using for loop
        for(let i=0;i<filteredUsers.length;i++){
                
                if (filteredUsers[i].name || filteredUsers[i].email === name){
                        if (filteredUsers[i].password === password){
                                document.getElementById('username').style.borderColor = 'blue' ;
                                document.getElementById('username').style.backgroundColor = '' ;
                                document.querySelector('.loginname').value = name ;
                                document.getElementById('password').style.borderColor = 'blue' ;
                                document.getElementById('password').style.backgroundColor = '' ;
                                document.querySelector('.passwordinput').value = password ;
                                document.querySelector('.alertsection').innerHTML = `` ;
                                location.href ="index.html" ;
                                break;      
                        }else{
                                //If the password not matching
                                document.getElementById('password').style.borderColor = 'red' ;
                                document.getElementById('password').style.backgroundColor = 'rgb(236, 162, 162)' ;
                                document.querySelector('.passwordinput').value = '' ;
                                document.querySelector('.alertsection').innerHTML = `<div class="alert alert-dismissible alert-danger d-flex align-items-center fade show " role="alert" >
                                <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:" ><use xlink:href="#exclamation-triangle-fill"/></svg>
                                <div>
                                  Incorrect Username or Password!
                                </div>
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                              </div>` ;
                        }
                }else{
                        //If the username not matching
                        document.getElementById('username').style.borderColor = 'red' ;
                        document.getElementById('username').style.backgroundColor = 'rgb(236, 162, 162)' ;
                        document.querySelector('.loginname').value = '' ;
                        document.querySelector('.alertsection').innerHTML = `<div class="alert alert-dismissible alert-danger d-flex align-items-center fade show " role="alert" >
                                <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:" ><use xlink:href="#exclamation-triangle-fill"/></svg>
                                <div>
                                  Incorrect Username or Password!
                                </div>
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                              </div>`   ; 
                }
                
        } ;


        
} 