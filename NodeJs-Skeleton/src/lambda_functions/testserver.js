const express = require('express');
const app = express();
const port = 3000;

app.get('/api/user', (req, res) => {
    const email = req.query.email;

    if (!email) {
        return res.status(400).json({ error: 'Email query parameter is required' });
    }

    let responseData;
    switch (email) {
        case 'test@email.com':
            responseData = {
                name: 'test',
                email: email
            };
            break;
        case 'no@email.com':
            responseData = {};
            break;
        default:
            responseData = {};
    }

    res.json(responseData);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
