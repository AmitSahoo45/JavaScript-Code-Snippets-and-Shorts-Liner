// Service Worker in JS
// read from notes

// how do we store data in cookies??

/*
Cookies are small text files that are stored on a user's computer by their web browser. 
They can be used to store small amounts of data, such as a user's preferences or session information. 
To store data in a cookie, you can use the setCookie function, which takes three parameters: 
the name of the cookie, 
the value to store, 
and the number of days until the cookie expires. 
Here is an example:
function setCookie(name, value, days) {
  var d = new Date();
  d.setTime(d.getTime() + (days*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

setCookie("username", "John", 7);

This will set a cookie named "username" with a value of "John" that will expire in 7 days. 
To retrieve the value of a cookie, you can use the getCookie function:

function getCookie(name) {
  var name = name + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

var username = getCookie("username");
console.log(username); // Output: "John"

Cookies have some limitations, such as a maximum size of 4KB and the fact that they are sent back and
forth between the server and the client with every HTTP request and response. 
Web storage, on the other hand, provides a more intuitive way to store data locally in the user's browser,
with larger storage limits (typically around 5MB) and faster access times.
*/

// how do we securely store JWT Token in a cookie using js??

/*To securely store JWT Token in a cookie using JavaScript, you can use the HttpOnly flag and secure flag. 
The HttpOnly flag tells the browser that the cookie should only be accessed by the server, 
not by client-side JavaScript. This helps to prevent cross-site scripting (XSS) attacks.
 The secure flag tells the browser to only send the cookie over HTTPS, which helps to prevent man-in-the-middle attacks.

Here is an example of how you can set a cookie with the HttpOnly and secure flags in JavaScript:
document.cookie = "jwt=your-jwt-token; HttpOnly; secure";

Note that you should only use the HttpOnly and secure flags if your website is using HTTPS. 
If your website is not using HTTPS, you should not use these flags, as they will not provide any additional security.

You can also use the SameSite flag to further enhance the security of your cookies. 
The SameSite flag tells the browser whether or not to send the cookie with a request 
if the request is coming from a different site. This can help to prevent cross-site request forgery (CSRF) attacks.

document.cookie = "jwt=your-jwt-token; HttpOnly; secure; SameSite=Strict";

The SameSite flag can be set to Strict, Lax, or None. The Strict value tells the browser to only
send the cookie with same-site requests, while the Lax value allows the cookie to be sent with 
same-site requests as well as some cross-site requests. The None value allows the cookie to be sent with all requests, 
regardless of whether they are same-site or cross-site.
*/


// why it is not a good practive to store JWT in local storage???

/*
JWTs contain sensitive information, such as user IDs and other personal data. 
Storing them in local storage means that this information is accessible to any JavaScript code that runs on the same domain.
This means that if an attacker can execute JavaScript on your domain, they can potentially access and misuse this sensitive information.

Local storage is vulnerable to cross-site scripting (XSS) attacks. 
If an attacker is able to inject malicious code into your web application, 
they could potentially steal JWTs stored in local storage and use them to impersonate a user.

Local storage is accessible to all scripts on the same domain, even if the user has navigated to a different page. 
This means that if an attacker can lure a user to a malicious website on the same domain, 
they could potentially access the JWTs stored in local storage and use them to gain unauthorized access to the user's account.

For these reasons, it is generally safer to store JWTs in an HTTP-only cookie or in a secure server-side session. 
This way, the JWTs are not accessible to client-side JavaScript and are less vulnerable to attacks.
*/

