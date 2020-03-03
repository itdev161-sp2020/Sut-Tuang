import express from 'express';
import connectDatabase from './config/db';

// Initialize express application
const app = express();

// Connect database
connectDatabase();

// Configure Middleware
app.use(express.json({ extended: false }));

// API endpoints

/**
 * @route GET /
 * @desc Test endpoint
 */
// API endpoints
app.get('/', (req, res) =>
	res.send('http get request sent to root api endpoint')
);

/**
 * @route GET /
 * @desc Test endpoint
 */
app.post('/api/users', (req, res) => {
	console.log(req.body);
	res.send(req.body)
});

app.listen(3000, () => console.log('Express server running on port 3000'));