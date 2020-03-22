var express = require('express');
var router = express.Router();
var util = require('../public/javascripts/gol');

router.get('/', function(req, res, next) {

  var times = [
    {"time1": {"id": 1, "nome": "Corinthians", "gols": 0}, "time2": {"id": 2, "nome": "Vasco", "gols": 0}},
    {"time1": {"id": 1, "nome": "Grêmio", "gols": 0}, "time2": {"id": 2, "nome": "Inter", "gols": 0}}
  ];

  setInterval(() => {
    times.forEach(time => {
      new Promise((res, rej) => {
        let gol = util.gol();
        if (time.time1.id == gol) {
          time.time1.gols++;
        } else if(time.time2.id == gol) {
          time.time2.gols++;
        }
      });
      console.log(time.time1.nome + ' ' + time.time1.gols + ' X ' + time.time2.nome + ' ' + time.time2.gols);
    });
  }, 4500);

  res.send('ok');
});

module.exports = router;
