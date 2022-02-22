var express=require('express');
var fs=require('fs');
var mysql=require('mysql');
var bodyParser=require('body-parser');
const { query } = require('express');
var app=express();

app.set("view engine",'ejs');
cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var con=mysql.createConnection({
    host:"localhost",
    database:'cuppoid',
    user:"root",
    password:""
});

con.connect(function(err){
    if(err){
        console.log("error");
    }
    else{
        console.log("Connected");
    }
});


app.use(bodyParser.urlencoded({extended:true}));

app.post('/signup',function(req,res){
    console.log(req.body)
    let name=req.body.name
    let email=req.body.email;
    let dob=req.body.dob;
    let location=req.body.location;
    let password=req.body.password;
    let sql="insert into `user_info` values(NULL,?,?,?,?,?)";
    con.query(sql,[email,password,name,dob,location],function(err,result){
        if(err) throw err;
        else{
            console.log("inserted")
            res.send({"error":"","status":"Inserted"})
        }
    });
});

app.post('/api/signin',function(req,res){
    let email=req.body.emailid;
    let password=req.body.password;

    let sql="SELECT * FROM `user_info` WHERE `user_id`=? AND `password`=?";
    con.query(sql,[email,password],function(err,result){
        if(err) throw err;
        else{
            console.log(result)
            if(result.length === 0){
                res.send({error:"Credential not found"})
            }
            else{
                res.send({error:"",userData:result})              
            }
        }
    });
});
app.post('/api/topfive',(req,res)=>{
    let  sql='select * from rest_info order by res_rating DESC LIMIT 5';
    con.query(sql,(err,results)=>{
      if(err)console.log(err);
      else{
        res.send({error:'',results})
      }
    })
})
app.post('/api/getAllRestaurant',(req,res)=>{
    let  sql='select * from rest_info order by res_rating DESC'
    con.query(sql,(err,results)=>{
      if(err)console.log(err);
      else{
        res.send({error:'',results})
      }
    })
})

app.listen(8080,function(){
    console.log("Server is Setup..");
});