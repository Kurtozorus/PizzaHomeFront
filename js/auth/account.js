const inputNom = document.getElementById("nomInput");
const inputPrenom = document.getElementById("prenomInput");
const inputAllergie = document.getElementById("allergieInput");
const inputNbConvive = document.getElementById("nbConviveInput");
const btnUpdateAccount = document.getElementById("btn-update-account");
const btnDeleteAccount = document.getElementById("btn-delete-account");

inputNom.addEventListener("keyup", validateForm);
inputPrenom.addEventListener("keyup", validateForm);
inputAllergie.addEventListener("keyup", validateForm);
inputNbConvive.addEventListener("keyup", validateForm);
btnUpdateAccount.disabled = true;


function validateForm() {
    const nomOk = validateRequired(inputNom);
    const prenomOk = validateRequired(inputPrenom);
    const allergieOk = validateRequired(inputAllergie);
    const nbConviveOk = validateRequired(inputNbConvive);

    if(nomOk && prenomOk && allergieOk && nbConviveOk) {
        btnUpdateAccount.disabled = false;
    }else {
        btnUpdateAccount.disabled = true;
    }
}

function validateRequired(input) {
    if (input.value.trim() != "") {
      input.classList.add("is-valid");
      input.classList.remove("is-invalid");
      return true;
    } else {
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
      return false;
    }
  }