const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
const htmlDir = path.join(__dirname, 'html');

// Serve static files from html directory
app.use(express.static(htmlDir));

// Optional: Log directory contents
fs.readdir(htmlDir, (err, files) => {
    if (err) {
        console.error("Error reading directory:", err);
        return;
    }
    console.log("HTML Directory Contents:", files);
});

// Default route to serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(htmlDir, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
