const app = require('./src/app')

require("dotenv").config()
const PORT = process.env.PORT || 3000;

app.listen(PORT ,() => { 
    console.log('Server is running on http://localhost:3000')
})