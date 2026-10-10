# Full Stack Lab Repository

## File Index

01 : 01-login.html & 01-login.css

02 : 02-profile.html & 02-profile.css

03 : 03-greeting.html

04 : 04-time.html

05 : 05-jsLogin.html

06 : 06-multiplication.html

07 : 07-file.js

08 : 08-server.js

09 : 09-read_db.js

---

## Questions & Requirements

### 01 : Simple Login Box (`01-login.html` & `01-login.css`)

**Question:** Create a very simple, centered login box using HTML and external CSS.

**Requirements & Instructions:**

1. **HTML Structure:**
* Create an `index.html` file.
* Add a container `<div>` with a heading (`<h2>Login</h2>`).
* Inside the container, add two `<input>` fields: one for Username (`type="text"`) and one for Password (`type="password"`).
* Add a `<button>` that says "Sign In".


2. **CSS Link & Background:**
* Create a `style.css` file and link it inside your HTML `<head>`.
* Set the body background color to a light gray (e.g., `lightblue` or `#f0f0f0`).


3. **Styling the Box:**
* Give your container `<div>` a white background color, a solid black border (`1px solid black`), and `20px` padding.
* Center the text inside the container using `text-align: center;`.
* Set the width of the container to `300px` and center it on the screen using `margin: 50px auto;`.


4. **Styling the Button:**
* Give the `<button>` a background color (e.g., blue or green) and make the text color white.
* Remove the button's default border and add padding (e.g., `10px`).



---

### 02 : Simple User Profile Card (`02-profile.html` & `02-profile.css`)

**Question:** Create a simple, centered user profile card using HTML and external CSS.

**Requirements & Instructions:**

1. **HTML Structure:**
* Create an `index.html` file.
* Add a container `<div>` that will act as the profile card.
* Inside the container, add an image tag `<img>`, a heading `<h3>` for the user's name, a `<p>` for a short bio, and a `<button>` that says "Follow".


2. **CSS Link & Background:**
* Create a `style.css` file and link it inside your HTML `<head>`.
* Set the body background color to a soft color (e.g., `#e2e8f0` or light gray).


3. **Styling the Card:**
* Give your card `<div>` a white background color, a subtle border or box-shadow, and `20px` padding.
* Center the text inside the card using `text-align: center;`.
* Set the width of the card to `250px` and center it on the screen using `margin: 50px auto;`.


4. **Styling the Text & Button:**
* Set the image width to `100px` and make it a circle using `border-radius: 50%;`.
* Give the `<button>` a background color (e.g., purple or blue), white text, remove the default border, and add `8px` padding.



---

### 03 : Personal Greeting Alert (`03-greeting.html`)

**Question:** Create a simple webpage that takes the user's name and greets them using a popup alert when a button is clicked.

**Requirements & Instructions:**

1. **HTML Form:**
* Create an `index.html` file.
* Add an `<input>` field and give it an id (e.g., `id="nameInput"`).
* Add a `<button>` with the text "Say Hello" and give it an id (e.g., `id="greetBtn"`).


2. **JavaScript Linking:**
* Create a `<script>` tag at the bottom of your HTML `<body>` (or link an external `.js` file).


3. **Button Click Event:**
* In your JavaScript, select the button and add a click event listener to it using `document.getElementById()` or `querySelector()`.


4. **Capturing Data & Alert:**
* Inside the click event function, get the text typed into the `<input>` field.
* Trigger an `alert()` that says: `"Hello, [Name Entered]! Welcome to the lab."`



---

### 04 : Dynamic Time & Greeting Generator (`04-time.html`)

**Question:** Create a simple webpage that automatically displays the current date and time when the page loads. Below it, add a button that, when clicked, greets the user ("Good Morning", "Good Afternoon", or "Good Evening") based on the current time of day.

**Requirements & Instructions:**

1. **HTML Structure:**
* Create an `index.html` file.
* Add an empty heading tag (e.g., `<h2>`) and give it an id (e.g., `id="timeDisplay"`).
* Add a `<button>` with the text "Greet" and give it an id (e.g., `id="greetBtn"`).
* Add a second empty heading tag below the button and give it an id (e.g., `id="greetingMessage"`).


2. **Default Date & Time Display:**
* Create a `<script>` tag at the bottom of your HTML `<body>`.
* Inside the script, create a new Date object (`let now = new Date();`).
* Select the `timeDisplay` element using `document.getElementById()` and set its `.innerText` to show the current date and time using `now.toLocaleString()`.


3. **Button Click Event & Hour Extraction:**
* Select the button and add a click event listener to it.
* Inside the click event function, use `new Date().getHours()` to get the current hour of the day (0–23).


4. **Greeting Logic & Output:**
* Write an `if...else if...else` statement inside the click event function:
* If the hour is less than 12, set greeting to `"Good Morning!"`.
* If the hour is between 12 and 17 (less than 18), set it to `"Good Afternoon!"`.
* Otherwise, set it to `"Good Evening!"`.


* Update `greetingMessage` `.innerText` to display the final greeting string.



---

### 05 : JS Logic Loop (`05-jsLogin.html`)

**Question:** Create a webpage where a user types a number, and the page prints a specific word that many times.

**Requirements & Instructions:**

1. **HTML Setup:**
* Add an `<input type="number">` field and give it an id (e.g., `id="numberInput"`).
* Add a `<button>` that says "Print Words".


2. **Array Creation:**
* In your JavaScript, create an Array with 3 colors: `["Red", "Green", "Blue"]`.
* Use `document.write()` to print the first color in the array to the screen before the loop starts.


3. **Number Capture:**
* Attach a click event to the button to get the number entered by the user.


4. **The Loop:**
* Write a `for` loop that starts at 0 and runs as many times as the user-inputted number.
* Inside the loop, use `document.write("JavaScript is fun!<br>")` to print the sentence repeatedly on new lines.



---

### 06 : Multiplication Table Generator (`06-multiplication.html`)

**Question:** Create a webpage where a user types a number, and the page prints the multiplication table (from 1 to 10) for that number.

**Requirements & Instructions:**

1. **HTML Setup:**
* Add an `<input type="number">` field with an id (e.g., `id="tableInput"`).
* Add a `<button>` that says "Generate Table" and give it an id.


2. **Initial Output:**
* Declare a simple variable holding a welcome message string (e.g., `"Welcome to the Math Generator!"`).
* Use `document.write()` to print this string to the screen before the button is clicked.


3. **Number Capture:**
* Attach a click event to the button to extract the user's number from the input field.


4. **The Loop:**
* Write a `for` loop running from 1 to 10.
* Inside the loop, compute the product and use `document.write()` to print each line (e.g., `2 x 1 = 2<br>`).



---

### 07 : Simple System Info File Writer (`07-file.js`)

**Question:** Write a basic Node.js script that finds out your computer's operating system and home directory and writes it to a text file.

**Requirements & Instructions:**

1. **Module Import:**
* Create a file named `app.js` (or `07-file.js`).
* Import the built-in `os` and `fs` modules using `require()`.


2. **Get System Data:**
* Use `os.platform()` to get the name of your operating system.
* Use `os.homedir()` to get your home directory path.


3. **Write to File:**
* Create a string formatted as: `"My OS is: [Platform] and my home folder is: [HomeDir]"`.
* Save this string into `info.txt` using `fs.writeFileSync('info.txt', ...)`.


4. **Print to Terminal:**
* Print `console.log("File created successfully!");` at the end of the script.



---

### 08 : "Hello World" Web Page Server (`08-server.js`)

**Question:** Create a pure Node.js server (without Express) that displays a simple HTML message when visited in the browser.

**Requirements & Instructions:**

1. **Server Setup:**
* Create a file named `server.js` (or `08-server.js`).
* Import the built-in `http` module and create a server using `http.createServer()`.


2. **Sending HTML:**
* Set the response header using `res.writeHead(200, {'Content-Type': 'text/html'})`.
* Send HTML via `res.write("<h1>Welcome to my Node.js Server!</h1><p>This is very easy.</p>")`.
* End the response using `res.end()`.


3. **Listening to Port:**
* Set the server to listen on port 3000.
* Output `console.log("Server running on http://localhost:3000");` to verify startup.



---

### 09 : Read Students from Database (`09-read_db.js`)

**Question:** Write a Node.js script that connects to a local MongoDB database, reads student records, and prints them to the terminal console.

**Requirements & Instructions:**

1. **Project Setup:**
* Initialize a new Node project (`npm init -y`).
* Install the official MongoDB driver (`npm install mongodb`).


2. **Database Connection:**
* Create a file named `read_db.js` (or `09-read_db.js`).
* Define the connection string (e.g., `mongodb://localhost:27017`).
* Connect to the `CollegeDB` database.


3. **Fetch the Data:**
* Access the `students` collection.
* Write a query to fetch all documents in the collection using `.find().toArray()`.


4. **Print to Console:**
* Print the retrieved student records directly to the terminal screen using `console.log()`.
