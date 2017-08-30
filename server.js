let express = require('express');
let body_parser = require('body-parser');
let path = require('path');
let app = express();

let port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json());

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});

app.post('/api/plates', (req, res) => {
    if (req.body.pay)
        res.json({ plates: [{ id: 1, name: 'New York Steak', paid: true}, {id: 2, name: 'Seabass', paid: true}]});
    else
        res.json({ plates: [{ id: 1, name: 'New York Steak', paid: false}, {id: 2, name: 'Seabass', paid: false}]});
});

app.post('/api/players', (req, res) => {
    const players = ['jamies', 'mike'];
    res.json(players);
}); 

app.listen(port, () => console.log(`Listening on port: ${port}`));
