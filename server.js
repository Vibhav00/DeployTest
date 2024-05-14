const app = require('./app')
// initialize environment variables

// database connection

// starting server
const server = app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is working on http://127.0.0.1:5000`)
})
