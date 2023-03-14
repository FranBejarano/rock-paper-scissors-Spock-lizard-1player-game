const dotenv = require('dotenv');
const express = require('express');
const app = express();
const port = 3000;

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

const indexRouter = require('./routes/index.js');
const gameRouter = require('./routes/game.js');
const turnRouter = require('./routes/turn.js');

app.use('/', indexRouter);
app.use('/game', gameRouter);
app.use('/turn', turnRouter);

const server = app.listen(process.env.PORT, () => {
    const SERVERHOST = server.address().address;
    const SERVERPORT = server.address().port;
    console.log(`Server is running on https://${SERVERHOST}:${SERVERPORT}`);
});

module.exports = app;