// Requirement 1: Server Setup
const http = require('http');

const server = http.createServer((req, res) => {
    // Requirement 2: Sending HTML
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("<h1>Welcome to my Node.js Server!</h1><p>This is very easy.</p>");
    res.end();
});

// Requirement 3: Listening to Port
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});