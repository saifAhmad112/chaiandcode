// require('dotenv').config()
import dotenv from "dotenv"
import connectDb from "./db/index.js";
import cors from "cors"
import {app} from './app.js'



const port = 5000


dotenv.config()
// Connect to MongoDB

connectDb()
const jsonFIle=[
    {
        title:"node",
        amout:"11"
    },
    {
        title:"express",
        amout:"10"
    },
    {
        title:"express",
        amout:"122"
    },
]

app.use(cors({ origin: '*' }));
// app.use(cors({ origin: 'http://localhost:3000' }));





app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/youtube', (req, res)=>{
    res.send("hello youtube")
})

app.get("/json",(req,res)=>{
    res.json(jsonFIle)
})

app.get("/nodemon",(req,res)=>{
    res.send("nodemon is running")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})