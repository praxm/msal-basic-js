var sharedData = {};
const signInButton = document.getElementById("SignIn");
const welcomeDiv = document.getElementById("WelcomeMessage");
const emailDiv = document.getElementById("profileEmailAddress");


function updateFieldValue(account) {
    const myJSON = JSON.stringify(account);
    console.log("Pring My JSON "+ myJSON);

    const username = account.username;
    const name = account.name;
    sharedData.email = `${username}`;
    sharedData.name = `${name}`;
    
    // Reconfiguring DOM elements
    welcomeDiv.innerHTML = `Welcome ${name}`;
    signInButton.setAttribute("onclick", "signOut();");
    signInButton.setAttribute('class', "btn btn-success")
    signInButton.innerHTML = "Sign Out";
    emailDiv.innerHTML = `Email: ${username}`;
    
}
