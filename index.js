const express = require ('express')
// const {errorHandler} = require('./middlewares/error')//
const port=3000;

const app = express()

app.use(express.json())

app.use(express.urlencoded({extended:false}))

app.use('/api/books', require('./routes/goalRoutes'))



app.listen(port , ()=> console.log(`Server started on port ${port}`))



