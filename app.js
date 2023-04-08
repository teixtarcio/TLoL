const prompt = require("prompt-sync")({sigint:true}); 
var XMLHttpRequest = require('xhr2');

const express = require('express');
const app = express();
 
app.use(express.json());       
app.use(express.urlencoded({extended: true})); 
 
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
 
app.post("/", (req, res) => {
    const nickname = req.body.nickname;
    res.send("Data received");
  
    const xhr = new XMLHttpRequest();

    xhr.open("GET",'https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + nickname +'?api_key=')
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {
      if (xhr.readyState == 4 && xhr.status == 200) {
        const data = xhr.response;
        console.log(data);
      } else {
        console.log(`Erro: ${xhr.status}`);
      }
    };
  });
 
app.listen(3000);
