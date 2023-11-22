let formEl = document.getElementById('form');
let firstNameEl = document.getElementById('fname');
let secondNameEl = document.getElementById('lname');
let successTxtEl = document.getElementById('successTxt');
let fnameErrMsgEl = document.getElementById('fnameErrorMsg');
let lnameErrMsgEl = document.getElementById('lnameErrorMsg');
let mailEl = document.getElementById('email');
let mailErrMsgEl = document.getElementById('mailErrorMsg');
let dateEl = document.getElementById('userDob');
let dateErrMsgEl = document.getElementById('DateErrorMsg');
let numberEl = document.getElementById('phoneNum');
let numErrMsgEl = document.getElementById('numberErrorMsg');
let filEl = document.getElementById("file");
let fileErrMsg = document.getElementById('fileErrorMsg');


formEl.addEventListener('submit',function(event) {
    event.preventDefault();
    validateFirstNameField();
    validateSecondNameField();
    validateEmailField();
    validateNumberField();
    validateDate();
    validateFileField();
    displaySuccessMsg();
});

function validateFirstNameField() {
    if (firstNameEl.value === "") {
        fnameErrMsgEl.textContent = "Required*";
      } else {
        fnameErrMsgEl.textContent = "";
        
      }
     
  };

  function validateSecondNameField() {
    if (secondNameEl.value === "") {
        lnameErrMsgEl.textContent = "Required*";
      } else {
        lnameErrMsgEl.textContent = "";
        
      }
     
  };

  function validateEmailField() {
    if (mailEl.value === "") {
        mailErrMsgEl.textContent = "Required*";
      } else {
        mailErrMsgEl.textContent = "";
      }
  }

  function validateNumberField() {
    if (numberEl.value === "") {
        numErrMsgEl.textContent = "Required*";
      } else {
        numErrMsgEl.textContent = "";
      };
  }

  function validateDate() {
    if (numberEl.value === "") {
        dateErrMsgEl.textContent = "Required*";
      } else {
        dateErrMsgEl.textContent = "";
      };
  }

  function validateFileField() {
    if (filEl.value === "") {
        fileErrMsg.textContent = "Required*";
      } else {
        fileErrMsg.textContent = "";
      };
  }

  function displaySuccessMsg() {
    if (firstNameEl.value !== "" && secondNameEl.value !== "" && mailEl.value !== "" && numberEl.value !== "" && dateEl.value === "" && filEl.value !== "") {
        alert('Thanks for applying Our Hr team will contact you soon')
        successTxtEl.textContent = firstNameEl.value +" " + secondNameEl.value + " your form has been Submitted Successfully"
    }else {
        alert('Invalid Fields: Please fill out the required field');
    }
  };




firstNameEl.addEventListener("blur",function(event){
    if (event.target.value === "") {
        fnameErrMsgEl.textContent = "Required*";
      } else {
        fnameErrMsgEl.textContent = "";
      }
});

secondNameEl.addEventListener("blur",function(event){
    if (event.target.value === "") {
        lnameErrMsgEl.textContent = "Required*";
      } else {
        lnameErrMsgEl.textContent = "";
      }
});

mailEl.addEventListener("blur",function(event){
    if (event.target.value === "") {
        mailErrMsgEl.textContent = "Required*";
      } else {
        mailErrMsgEl.textContent = "";
      }
});

numberEl.addEventListener("blur",function(event) {
    if (event.target.value === "") {
        numErrMsgEl.textContent = "Required*";
      } else {
        numErrMsgEl.textContent = "";
      };
})

dateEl.addEventListener("blur",function(event){
    if (event.target.value === "") {
        dateErrMsgEl.textContent = "Required*";
      } else {
        dateErrMsgEl.textContent = "";
      };
});

filEl.addEventListener("blur",function(event){
    if (event.target.value === "") {
        fileErrMsg.textContent = "Required*";
      } else {
        fileErrMsg.textContent = "";
      };
});


