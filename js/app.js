var app = {

    // launched from init() and return answer
    askQuestion: function(questionToAsk){
    console.log(questionToAsk);

    // store and return answer
    var answer = prompt(questionToAsk);
    return answer;
    },

    init: function () {
        console.log('app.init');

        // store question to ask
        var question = questions[0];

        // store user answer
        var userAnswer = app.askQuestion(question);
        console.log(userAnswer);

    }
};

// launch application
app.init();
