
$(document).ready(function(){
        $("#signupform").validate({
            rules:{
                fname:{
                    required:true,
                    minlength:4},
                 sname:{
                    required:true,
                    minlength:4
                },
                emailbox:{
                    required:true,
                    email:true
                },
                password:{
                    required:true,
                    minlength:6,
                    maxlength:10,
                    
                }
            }
            
        })
        
    })
