function loginUser(event) {
  event.preventDefault();
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  const userData = JSON.parse(localStorage.getItem("user_" + username));

  if (!userData || userData.password !== password) {
    alert("Login gagal!");
    return;
  }

  localStorage.setItem("currentUser", username);
  window.location.href = "dashboard.html";
}

function logoutUser() {
  localStorage.removeItem("currentUser");
  window.location.href = "index.html";
}

function checkLogin() {
  const user = localStorage.getItem("currentUser");
  if (!user) window.location.href = "index.html";
}
