import express from "express";
import router from "./routes/index.js";

const app = express();

// Middleware to parse JSON request body
app.use(express.json());

const PORT = 4000;

// Mount the router on '/api'
app.use('/api', router);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
