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

// ------------------------------------------------------------------------

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

// ------------------------------------------------------------------------

// Why do you need a Cookie 

/*
When a user visits a web page, the user profile can be stored in a cookie.
Next time the user visits the page, the cookie remembers the user profile.
*/

// ------------------------------------------------------------------------

// if both cookie and web storage store key/value pairs, then which one should be used and where???

/*
a - Capacity: Cookies have a relatively small size limit, typically around 4KB. Web storage, on the other hand,
provides much more space, with a maximum of around 5MB per origin.
(In the context of web storage, "per origin" refers to a combination of the protocol, domain, and port of a website. The maximum size of web storage is around 5MB per origin, meaning that each website can store up to 5MB of data in web storage. This size limit applies to both local storage and session storage.)

b - Persistence: Cookies are persisted on the client's device until they expire or are deleted. Web storage is also persisted on the client's device, but it does not have an expiration date.

c - Security: Cookies are sent with every HTTP request, including cross-origin requests. This can be a security concern if sensitive information is stored in a cookie. Web storage, on the other hand, is only accessible from the origin that created it and is not sent with every HTTP request.

d - Use cases: Cookies are often used to store information that is needed for server-side rendering or server-side authentication. Web storage is better suited for storing information that is needed for client-side rendering or client-side logic.
*/

// ------------------------------------------------------------------------

// Options of a cookie
/*
path
expires
domain
secure
httpOnly
*/

// how do we securely store JWT Token in a cookie using js??
/*
To securely store JWT Token in a cookie using JavaScript, you can use the HttpOnly flag and secure flag. 
The HttpOnly flag tells the browser that the cookie should only be accessed by the server, not by client-side JavaScript. 
This helps to prevent cross-site scripting (XSS) attacks. The secure flag tells the browser 
to only send the cookie over HTTPS, which helps to prevent man-in-the-middle attacks.

Here is an example of how you can set a cookie with the HttpOnly and secure flags in JavaScript:
document.cookie = "jwt=your-jwt-token; HttpOnly; secure";

Note that you should only use the HttpOnly and secure flags if your website is using HTTPS. 
If your website is not using HTTPS, you should not use these flags, as they will not provide any additional security.

You can also use the SameSite flag to further enhance the security of your cookies. 
The SameSite flag tells the browser whether or not to send the cookie with a request if the request
is coming from a different site. This can help to prevent cross-site request forgery (CSRF) attacks.

document.cookie = "jwt=your-jwt-token; HttpOnly; secure; SameSite=Strict";

The SameSite flag can be set to Strict, Lax, or None. The Strict value tells the browser to only send the
cookie with same-site requests, while the Lax value allows the cookie to be sent with same-site 
requests as well as some cross-site requests. The None value allows the cookie to be sent with all requests,
regardless of whether they are same-site or cross-site.
*/


// how do I use CORS package and header to my backend server to allow your frontend client to make cross-origin requests in production?

/*
To use the CORS package and set headers on your backend server to allow your frontend client
to make cross-origin requests in production, you can follow these steps:

1. Install the CORS package:
In your terminal, navigate to your backend project directory and run npm install cors. 
This will install the CORS package in your backend project.

2. Import the CORS package in your server file:
In your server file (e.g. server.js), import the CORS package using the following code:
const cors = require('cors');

3. Enable CORS in your server:
To enable CORS on your server, use the following code:
app.use(cors());

This will allow all cross-origin requests to your server. If you want to specify which origins are allowed,
you can use the following code:
app.use(cors({
  origin: 'http://example.com'
}));
This will allow only cross-origin requests from the specified origin to your server.

4. Set headers on your server:
To set headers on your server to allow cross-origin requests, use the following code:
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
This will set the necessary headers on your server to allow cross-origin requests.

5. Make cross-origin requests from your frontend client:
In your frontend client (e.g. a React.js app), you can now make cross-origin requests
to your backend server using the fetch API or a library like axios.
fetch('http://example.com/api/endpoint', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    data: 'some data'
  })
})
.then(res => res.json())
.then(data => console.log(data))
.catch(error => console.error(error));

By following these steps, you should be able to use the CORS package

*/

// how do I use the CORS package and header to my Node.js backend server to allow your frontend client 
// to make cross-origin requests in production?

/*
To use the CORS package and header to your Node.js backend server to allow your frontend client to make cross-origin requests in production, you can follow these steps:

1. Install the cors package using npm: npm install cors
2. Require the cors package in your Node.js server file: const cors = require('cors')
3. Enable the CORS middleware by calling the cors() function and passing it as middleware: app.use(cors())
4. If you want to set specific CORS options, you can pass an options object to the cors() function:
app.use(cors({
  origin: 'http://example.com',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))
This will enable CORS for your Node.js server, allowing your frontend client to make 
cross-origin requests to your server in production.

Note: If you want to enable CORS for specific routes only, you can use the cors()
function as middleware for those specific routes instead of the entire app.
*/

// what is SSL and why is cookie SSL supported?
/*
SSL (Secure Sockets Layer) is a standard security technology that is used to establish an 
encrypted connection between a server and a client. It is used to secure the transmission 
of sensitive data, such as credit card numbers, login credentials, and other personal information, 
between a web server and a client's web browser.

Cookie SSL supported means that the cookie will only be sent to the server when a secure connection 
is established. This ensures that the cookie cannot be intercepted by a third party while in transit 
and helps to protect the privacy and security of the user. SSL-supported cookies are often used in 
e-commerce and other sensitive applications where it is important to protect the confidentiality of user data.
*/

/* When do you get NaN in JS?*/
let a = 1 / 'a'
console.log(a) // NaN
a = 1 / 0
console.log(a) // Infinity
a = 1 / -0
console.log(a) // -Infinity
a = parseInt('a')
console.log(a) // NaN
// When a mathematical function or operation encounters an error or invalid input.
// example: 1 / 'a' or 1 / 0 or 1 / -0 or parseInt('a')


// How does JavaScript handle the "Divide by Zero" operation
/*
Dividing the number 0 by 0 returns NaN.
Dividing the positive number by 0 returns Infinity.
Dividing the negative number by 0 returns -Infinity.
*/

// What are MAX_SAFE_INTEGER and MIN_SAFE_INTEGER? How are these different from Infinity and -Infinity?
/*
MAX_SAFE_INTEGER and MIN_SAFE_INTEGER are constants in JavaScript that represent the maximum and minimum safe 
integer values that can be represented in the language without losing precision.

MAX_SAFE_INTEGER has a value of 9007199254740991, which is the largest integer that can be represented 
in JavaScript without losing precision when used in arithmetic operations. 
Similarly, MIN_SAFE_INTEGER has a value of -9007199254740991, which is the smallest integer 
that can be represented in JavaScript without losing precision.

On the other hand, Infinity and -Infinity are values in JavaScript that 
represent positive and negative infinity, respectively. These values are used to 
indicate that a calculation or operation has exceeded the maximum or minimum 
representable values in JavaScript. For example, if you try to divide a number by zero, 
the result will be Infinity or -Infinity depending on the sign of the number being divided.

Unlike MAX_SAFE_INTEGER and MIN_SAFE_INTEGER, Infinity and -Infinity are not specific 
integer values and are not subject to the same limitations on precision. 
They are special values that represent the limit of what can be represented in JavaScript.
*/

// What all in JavaScript are falsy?
// undefined , null , NaN , 0 , "" (empty string), and false