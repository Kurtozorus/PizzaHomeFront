const inputEmail = document.getElementById("emailInput");
const inputPassword = document.getElementById("passwordInput");
const btnSignin = document.getElementById("btn-signin");

btnSignin.addEventListener("click", checkCredentials);

function checkCredentials() {
    // Ici il faudrat appeler l'api pour vérifier les crédentiales en bdd
    if(inputEmail.value == "test@mail.com" && inputPassword.value == "1234") {
        // Il faudra récupérer le vrai token
        const token = "kljermaklzjlrazeklmnrazlkkkke"
        setToken(token);

        //Placer le token en cookie
        
        setCookie(roleCookieName, "admin", 7);
        window.location.replace("/");
    }else {
        inputEmail.classList.add("is-invalid");
        inputPassword.classList.add("is-invalid");
    }
}