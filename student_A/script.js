const form = document.getElementById("registerForm");
const messageEle = document.getElementById("message");
const h2ele = document.getElementById("heading");
const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");
const appUI = document.getElementById("appUI");
const registerForm = document.getElementById("registerForm");
const loginCard = document.getElementById("loginCard");
const welcomeText = document.getElementById("welcomeText");
const adminUI = document.getElementById("adminUI");
const userUI = document.getElementById("userUI");
const logoutBtn = document.getElementById("logoutBtn");

let users = [];


form.addEventListener("submit", (e) => {
  e.preventDefault();

  
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  message.textContent="";
  message.className="";
  if(!name || !email ||!password || !role){
    showError("all fields are require !");
    return;
  }
//   console.log({users});
  
  let existEmail = false;
  for(let i=0;i<users.length;i++){
    if(users[i].email===email){
        // console.log(email);
        
        existEmail=true;
        break;
    }

  }
//   console.log(existEmail);
  
  if(existEmail){
     console.log({users});
     showError("email already exist!");
     throw("email already exist!")
    
  }

  const newUser = {
    id :Date.now(),
    name,
    email,
    password,
    role
  };
  users.push(newUser);
  console.log(users);
  
  localStorage.setItem("users",JSON.stringify(users));

  showSuccess("registration successfully");
  form.reset();
form.style.display="none";
// loginForm.style.display="block";
// console.log("loginCard", loginCard)
 loginCard.style.display="block";
 h2ele.style.display="block";
});
function showError(message){
    messageEle.textContent=message;
    messageEle.className="error";
}
function showSuccess(message){
    messageEle.textContent = message;
    messageEle.className="success"
}
 

 
users = JSON.parse(localStorage.getItem("users")) || [];
 
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  h2ele.style.display = "none";
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  loginMessage.textContent = "";

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    loginMessage.textContent = "Invalid email or password";
    loginMessage.className = "error";
    return;
  }
 
  localStorage.setItem("loggedInUser", JSON.stringify(user));

  renderApp(user);
  loginForm.reset();
});
 
const savedUser = JSON.parse(localStorage.getItem("loggedInUser"));
if (savedUser) {
  renderApp(savedUser);
}
 
function renderApp(user) {
  registerForm.style.display = "none";
  loginCard.style.display = "none";
  appUI.style.display = "block";

  welcomeText.textContent = `Welcome, ${user.name} (${user.role})`;

  adminUI.style.display = "none";
  userUI.style.display = "none";

  if (user.role === "admin") {
    adminUI.style.display = "block";
  } else {
    userUI.style.display = "block";
  }
}
 
logoutBtn.addEventListener("click", function () {
  localStorage.removeItem("loggedInUser");
    loginCard.style.display="block";
    registerForm.style.display="none";
    appUI.style.display="none";
    form.style.display="block";
// loginForm.style.display="block";
// console.log("loginCard", loginCard)
 loginCard.style.display="none";
 
});