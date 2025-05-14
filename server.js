const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the project root directory
app.use(express.static('.'));

// Serve the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
}); 