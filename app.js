const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let OBJECT_RESULT;

app.get('/*', (req, res) => {
    if (OBJECT_RESULT) {
        res.status(200)
           .send(JSON.stringify(OBJECT_RESULT));
        return;
    }
    
    res.status(200)
       .send('null');
});

app.post('/*', (req, res) => {
    if (!OBJECT_RESULT) {
        OBJECT_RESULT = {...req.body};
        res.status(200)
           .send('ok');
        return;
    }
    
    res.status(400)
       .send();
});

app.put('/*', (req, res) => {
    if (OBJECT_RESULT) {
        OBJECT_RESULT = {...req.body};
        res.status(200)
           .send('ok');
        return;
    }
    
    res.status(400)
       .send();
});

app.patch('/*', (req, res) => {
    if (OBJECT_RESULT) {
        OBJECT_RESULT = {...OBJECT_RESULT, ...req.body};
        res.status(200)
           .send('ok');
        return;
    }
    
    res.status(400)
       .send();
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
