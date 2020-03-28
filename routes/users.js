var express = require('express');
var router = express.Router();
var util = require('../public/javascripts/gol');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var times = [
    {"time1": {"id": 1, "nome": "Corinthians", "gols": 0}, "time2": {"id": 2, "nome": "Vasco", "gols": 0}},
    {"time1": {"id": 1, "nome": "Grêmio", "gols": 0}, "time2": {"id": 2, "nome": "Inter", "gols": 0}}
  ];
  
  setInterval(() => {
    times = attPlacar(times);
    if(times != null){
      times.forEach((t) =>{
        console.log(t.time1.nome + ' ' + t.time1.gols + ' X ' + t.time2.nome + ' ' + t.time2.gols);
      });
    }
  }, 4500);
  
    res.send('As partidas começaram, aguarde...');
  //res.render('times',{times: times});
});

module.exports = router;
