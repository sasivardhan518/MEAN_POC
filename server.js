var express =require("express");
var bodyParser =require("body-parser");
var path = require("path");
var http = require("http");
var cors = require("cors");

const port = process.env.port ||3000;
var index = require(path.join(__dirname,"routes/index"));
var api = require(path.join(__dirname,"routes/api"));

var app = express();

app.use('/',index);
app.use('/api',api);

api.use(cors()) ;

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname,'dist')));


app.get("*",(req,res)=>{
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.set('port',port);

var server = http.createServer(app);

server.listen(port,()=>{
  console.log("Server started on localhost: " + port);
});
