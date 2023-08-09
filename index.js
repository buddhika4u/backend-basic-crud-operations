const express = require('express');
const mongoose = require('mongoose');
const namesRouter = require('./routes/name.route');
const { MONGODB_URI } = require('./config');  // Import the MongoDB URI from config.js

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(err => console.error('Error connecting to MongoDB:', err));

    app.use(express.json());
    app.use('/names', namesRouter);
