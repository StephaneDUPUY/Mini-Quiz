var app = {

    // launched from init() and return answer
    askQuestion: function(questionToAsk){
        console.log(questionToAsk);

        // store and return answer from popup
        var answer = prompt(questionToAsk);
        return answer;
    },

    checkResponse: function(questionId, userResponse){
        // store good answer from responses array
        var correctAnswer = responses[questionId];

        // if answer is good return tru
        // parseInt to return integer
        if (correctAnswer === parseInt(userResponse)){
            return true;
        }
        else {
            return false;
        }
    },

    init: function () {
        console.log('app.init');

        // set manually question number
        var questionId = 0;
        // store question to ask
        var question = questions[questionId];

        // store user answer
        var userAnswer = app.askQuestion(question);
        console.log(userAnswer);

        //isAnswerCorrect is a boolean
        var isAnswerCorrect = app.checkResponse(questionId, userAnswer);

        // will content ul where added question
        var list = null;

        // if good answer
        if (isAnswerCorrect){
            // target green ul
            list = document.querySelector("#right .responses"); 
        }
        else {
            // else red one
            list = document.querySelector("#wrong .responses");
        }
        // then add li with question in ul
        list.innerHTML += '<li>' + question + '</li>';

    }
};

// launch application
app.init();
