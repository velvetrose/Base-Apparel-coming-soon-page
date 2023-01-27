'use strict';

let fieldBox = document.querySelector('#emailField');
let failMessage = document.querySelector('#errMsg');
let successMessage = document.querySelector('#successMsg');
let errIcon = document.querySelector('#error-btn');

function validate(e){
    e.preventDefault();
    if(fieldBox.value == ''){
        failMessage.style.display='none';
        errIcon.style.display='none';
    }
    else if(!fieldBox.checkValidity()){
        failMessage.style.display='block';
        errIcon.style.display='block';
    }
    else{   
        failMessage.style.display='none';
        errIcon.style.display='none';
        successMessage.style.display='block';
        fieldBox.value='';
    }

}
