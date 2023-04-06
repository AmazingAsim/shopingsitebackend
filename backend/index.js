let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let cors = require('cors')
let port = process.env.port || 8080
const userroutes = require('./routes/userRoute')
app.use(cors({
    origin:"*",
    methods:['GET','POST','DELETE']
}));
app.use(bodyParser.json());
app.use('/api',userroutes)
app.listen(port,()=>{console.log('server is running on port 8080')});
