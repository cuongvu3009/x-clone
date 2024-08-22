require('dotenv').config()
import express from 'express'
import databaseService from './services/database.services'
import userRouter from './routes/users.routes'

const app = express()
const port = process.env.PORT

//  Database connection
databaseService.connect()

app.get('/', (req, res ) => {
    res.send("Hello World")
})
app.use('/api', userRouter)


app.listen(port, () => console.log(`Server is listening on ${port}`))
