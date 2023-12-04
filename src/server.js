const app = require('./app');
const dotenv = require('dotenv')
dotenv.config()
console.log('ambiente', process.env.ENVIRONMENT)
app.listen(3333, () => console.log('Server running on port 3333'))