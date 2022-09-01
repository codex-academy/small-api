import express from "express";
import cors from "cors";

const app = express();

// app.use(cors());


app.use(express.json())

app.use(express.static('public'));

const PORT = 6002;

app.get('/api/one', function(req, res){

    const name = req.query.name || 'No name';

    res.json({
        name
    });
});

app.post('/api/one', function(req, res){

    const name = req.body.name || 'No name'

    res.json({
        name : `${name} from POST`
    });
});


app.listen(PORT, function() {
    console.log(`app started on ${PORT}`)
});