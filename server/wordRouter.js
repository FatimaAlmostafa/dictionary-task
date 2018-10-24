var wordRouter = require('express').Router();
var axios = require('axios');

wordRouter.route('/')
.post(function(req,res){
  var word = req.body.word; 
  console.log('wordddddd ',word) 
  var app_id = "b0691462";
  var app_key = "e924ba24525f6c231fbfeba62ce965ca";
  var url = "https://od-api.oxforddictionaries.com:443/api/v1/entries/en/"+word;
  
  axios.get(url, {headers:
    {"Accept": "application/json",
    "app_id": "5a638507",
    "app_key": "f4c54ae63405233c325354d8b52e9c71"}
  })
  .then(response => {
    // If request is good...
    res.send(response.data.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0]);
  })
  .catch((error) => {
    console.log('error 3 ' + error);
  });




  //   var dict = new Dictionary(app_id, app_key);
//   dict.find(word,function(error,data){
//     if(error) return console.log(error); 
//     console.log(JSON.parse(data)); 
//   });
})


module.exports = wordRouter;
// unirest.get("https://mashape-community-urban-dictionary.p.mashape.com/define?term=world")
// .header("X-Mashape-Key", "X68rUYSbMCmshav24t29GlhexDBAp1kWRBcjsn6NJ0YfRr4Nh5")
// .header("X-Mashape-Host", "mashape-community-urban-dictionary.p.mashape.com")
// .end(function (result) {
//   console.log(result.status, result.headers, result.body);
// });

// var app_id = "your oxford-account app id";
// var app_key = "your oxford-account app key";
// var dict = new Dictionary(app_id, app_key);
// dict.find("ace",function(error,data){if(error) return console.log(error); console.log(data); });
