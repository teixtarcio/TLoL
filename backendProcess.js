const prompt = require("prompt-sync")({sigint:true}); 
var XMLHttpRequest = require('xhr2');
const xhr = new XMLHttpRequest();

var nickname = prompt("Digite seu nickname: ");

xhr.open("GET",'https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + nickname +'?api_key=')
xhr.send();
xhr.responseType = "json";
xhr.onload = () => {
  if (xhr.readyState == 4 && xhr.status == 200) {
    const data = xhr.response;
    console.log(data);

    const puuid = data.puuid;

    xhr.open("GET",'https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/' + puuid + '/ids?start=0&count=20&api_key=')
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
          const data = xhr.response;
          console.log(data);}}
        
  } else {
    console.log(`Erro: ${xhr.status}`);
  }

};


//capturar o puuid
//