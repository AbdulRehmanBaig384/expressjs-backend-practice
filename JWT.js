const express = require('express');
const ejs = require('ejs');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

app.get('/', (req, res) => {
    res.render('Url_Generate');
});

app.post('/generate', (req, res) => {
    const redirectURL = req.body.redirectURL;
    res.render('Generate', { redirectURL });
});

app.get('/redirect/:url', (req, res) => {
    const url = req.params.url;
    const fullURL = 'https://' + url; // simple add https
    res.redirect(fullURL);
});

const port = 4200;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
