import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';

// Import DB
import connectDB from './config/db.js'

// Importing Routers
import pinsRouter from './routes/pins.js'
import userRouter from './routes/user.js'

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

// Init express
const app = express();

// Body parser
app.use(express.json());

// Enable cors
app.use(cors());

// Routes
app.use('/api/v1/pins', pinsRouter);
app.use('/api/v1/user', userRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));

