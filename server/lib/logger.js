
const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    const body = req.body;

    const message = `${new Date().toTimeString()}: ${req.method} - ${req.url}`;

    console.log(message);

    if (body) {
        console.log(JSON.stringify(body));
    }
    
    next();
});

module.exports = router;