/*****************
    
    Project 3 dom
    Name: Deborah Ekpeneidua
    Date: dec 20, 2023
    Description: project 3 dom: contact form validation

******************/

// hideError();



// function reset(){

//     let inputs = document.getElementsByTagName("input").value;
//     let errors = document.querySelectorAll(".error");
//     let reset = document.querySelector("#resetButton");

//     resetButton.addEventListener("click", ()=>{

//         for(let i = 0; i < inputs.length; i++){
//             input.value = " ";
//         }
//         for(let i = 0; i < errors.length; i++){
//             errors.innerHTML = " ";
//         }
//     })
// }


// function fieldHasInput(fieldElement){
//     if(fieldElement.value == null)
//     {
//         return true;
//     }
//     return false;
// }



// function hasError(){

//     let fullNameFormat = document.querySelector("#fullName");
//     let fullNameError = document.querySelector("#fullName_error");
//     let phNumFormat = document.querySelector("#phNum").value;
//     let phNumError = document.querySelector("#phNum_error");
//     let emailError = document.querySelector("#email_error");
//     let errorFlag = false;

//    if(!fieldHasInput(fullNameFormat)){
//             fullNameError.style.display ="block";
//             fullNameFormat.focus();
//         } else if(fieldHasInput(fullNameFormat)){
//             fullNameError.style.display = "none";
//         }



//         let regexNumber = new RegExp( /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);

//         if(!regexNumber.test(phNumFormat)){
//             phNumError.style.display = "block";
//             phNumFormat.focus();
//             errorFlag = true;
//            } else{
//             phNumError.style.display = "none";
//             phNumFormat.blur();
//             errorFlag = false;
//          }


//        let regexEmail = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
//         let emailFormat = document.getElementById("email").value;

//         if(!regexEmail.test(emailFormat)){
//             document.getElementById("email_error").style.display = "block";

//         if(!errorFlag){
//             document.getElementById("email").focus();       
//             document.getElementById("email").select();
//         }

//         errorFlag = true;

//         return errorFlag;
//     }

//  }






// function hideError(){
//    let error = document.getElementsByClassName("error");

//    for(let i =0; i < error.length; i++){
//     error[i].style.display = "none";
//    }
// }

let errors = document.getElementsByClassName("error");

     for(let i =0; i < errors.length; i++){
     errors[i].style.display = "none";
    }


let phoneNumber = document.querySelector("#phNum").value;

let phoneError = document.querySelector("#phNum_error");


let submit = document.querySelector("#submitButton");

submit.addEventListener("submit", (e) =>{

    let regexNumber = new RegExp( /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/);

    if(!regexNumber.test(phoneNumber)){
            e.preventDefault()
            phoneError.style.display = "block";         
     } 


        
})

// function validate(e){
   
//     if (formErrors()) {
// // Prevents the form from submitting
//     e.preventDefault();
//     return false;

//     }

//     return true;

//     }



