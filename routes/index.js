var express = require('express');
var router = express.Router();
var util = require('../public/javascripts/gol');

function attPlacar2(times) {
  return new Promise((res, rej) => {
    times.forEach(time => {
      let gol = util.gol();
      if (time.time1.id == gol) {
        time.time1.gols++;
      } else if(time.time2.id == gol) {
        time.time2.gols++;
      }
  });
  res(times);
  });
}

router.get('/', function(req, res, next) {
  var times = [
    {"time1": {"id": 1, "nome": "Corinthians", "gols": 0}, "time2": {"id": 2, "nome": "Vasco", "gols": 0}},
    {"time1": {"id": 1, "nome": "Grêmio", "gols": 0}, "time2": {"id": 2, "nome": "Inter", "gols": 0}}
  ];

  setInterval(()=>{
    attPlacar2(times).then(data => {
      data.forEach(t => {
        console.log(t.time1.nome + ' ' + t.time1.gols + ' X ' + t.time2.nome + ' ' + t.time2.gols);
      });
    });
  }, 4500);
  res.send('As partidas começaram, acompanhe pelo terminal');
});

module.exports = router;
