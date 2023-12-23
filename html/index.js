// This function is called when the user clicks the login button
function login() {
  // Get the button and container elements from HTML</strong>:
  const username = document.getElementById("username");
  const password = document.getElementById("password");

  // Create an event listener on the button element</strong>:
  // Get the reciever endpoint from Python using fetch</strong>:
  fetch("http://admin.kushshah.net:5000/login", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    }, // Strigify the payload into JSON</strong>:
    body: JSON.stringify({
      username: username.value,
      password: password.value,
    }),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        alert("something is wrong");
      }
    })
    .then((jsonResponse) => {
      // Log the response data in the console
      if (jsonResponse["status"] == "success") {
        document.cookie = "loggedin=True; path=/";
        console.log("allow in");
        // window.location.replace("http://admin.kushshah.net/dashboard.html");
        window.location.href = "http://admin.kushshah.net/dashboard.html";
      } else if (jsonResponse["status"] == "user not found") {
        alert("Login Failed");
        username.style.borderColor = "red";
      } else if (jsonResponse["status"] == "wrong password") {
        alert("Login Failed");
        password.style.borderColor = "red";
      } else {
        alert("Login Failed");
        username.style.borderColor = "red";
        password.style.borderColor = "red";
      }

      console.log(jsonResponse);
    })
    .catch((err) => console.error(err));
}

function getCookieLogin(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

/*
 * checkCookieLogin()
 * @return undefined
 * @desc checks if the user is logged in by checking the cookie
 *       if the user is logged in, redirect to the dashboard page
 *       if the user is not logged in, do nothing
 */

function checkCookieLogin() {
  // get the cookie value
  let username = getCookieLogin("loggedin");
  // check if the cookie value is an empty string
  if (username == "") {
    // cookie is empty, so user is not logged in, do nothing
    return undefined;
  } else {
    // cookie is not empty, so user is logged in, redirect to dashboard page
    window.location.href = "http://admin.kushshah.net/dashboard";
  }
}

function passwdKeypress(e) {
  if (e.keyCode == 13) {
    login();
  }
}
