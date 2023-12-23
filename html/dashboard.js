function getCookie(cname) {
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

function adguardOnClick() {
  // window.location.replace("http://150.136.87.32:3000");
  window.location.href = "http://150.136.87.32:3000";
}

function uptimeOnClick() {
  // window.location.replace("");
  window.location.href = "http://150.136.87.32:3001";
}

function siteOnClick() {
  // window.location.replace("https://kushshah.net");
  window.location.href = "https://kushshah.net";
}

function checkCookie() {
  let username = getCookie("loggedin");
  if (username != "") {
    return;
  } else {
    window.location.href = "http://admin.kushshah.net";
  }
}
function logoutOnClick() {
  document.cookie = "loggedin=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
  window.location.href = "http://admin.kushshah.net";
}

checkCookie();
