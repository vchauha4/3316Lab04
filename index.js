const express = require('express');
const questionList = require('./questions.json');
const app = express();

app.use(express.static('static'));

app.get('/questionsInJson', function(req,res){

    let questions = JSON.parse(JSON.stringify(questionList));
    
    for(i in questions){
        delete questions[i].answerIndex;
    }
    
    res.json(questions); 
})


app.get('/answersInJson', function(req,res){

    let qIndex = req.query.q;
    let aIndex = req.query.a;
    let result= "";

    let questions = questionList[qIndex];

    if(questions.answerIndex == aIndex){
        result = "Correct! " + qIndex;
    }

    else{
        result = "Incorrect! " + qIndex;
    }

    res.send(result);
})



app.listen(80);