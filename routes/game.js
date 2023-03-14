const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const Duel = require('../src/duel.js');
const Player = require('../src/player.js');

router.post('/', [
    check('humanPlayer').isLength(1)
],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({
                'message': `There was no name in the input field`,
                'error': errors.array()
            });
        }
        const duel = new Duel();
        const names = [req.body.humanPlayer, req.body.botPlayer];

        duel.setup(names);
        req.app.locals.duel = duel;

        res.redirect('/game');
    });

router.get('/', (req, res) => {

    const humanPlayer = req.app.locals.duel.humanPlayer();
    const botPlayer = req.app.locals.duel.botPlayer();

    res.render('game', {
        humanName: humanPlayer.name,
        humanVictories: humanPlayer.victories,
        botName: botPlayer.name,
        botVictories: botPlayer.victories
    });
});

module.exports = router;