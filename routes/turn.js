const express = require('express');
const router = express.Router();
const Rules = require('../src/rules.js');

router.post('/', (req, res) => {
    const duel = req.app.locals.duel;
    const rules = new Rules();
    const humanSelector = req.body.selector;
    const botSelector = duel.botSelection();
    const duelResult = rules.prime(humanSelector, botSelector);

    if (duelResult === "wins") duel.humanVictory();
    if (duelResult === "loses") duel.botVictory();

    const humanPlayer = duel.humanPlayer();
    const botPlayer = duel.botPlayer();

    if (humanPlayer.victories === 3) {
        res.render('winner', {
            winnerName: humanPlayer.name,
            humanName: humanPlayer.name,
            botName: botPlayer.name
        });
    }
    else if (botPlayer.victories === 3) {
        res.render('winner', {
            winnerName: botPlayer.name,
            humanName: humanPlayer.name,
            botName: botPlayer.name
        });
    }

    else {
        res.render('turn', {
            humanName: humanPlayer.name,
            humanSelection: humanSelector,
            duelResult: duelResult,
            botName: botPlayer.name,
            botSelection: botSelector
        });
    }
})

module.exports = router;