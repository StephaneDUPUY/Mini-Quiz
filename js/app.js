var app = {

    // launched question and return answer
    askQuestion: function(questionToAsk){
        console.log(questionToAsk);

        // store and return answer from popup
        var answer = prompt(questionToAsk);
        return answer;
    },

    // check if answer is good
    checkResponse: function(questionId, userResponse){
        // store good answer from responses array
        var correctAnswer = responses[questionId];

        // if answer is good return true
        // parseInt to return integer
        if (correctAnswer === parseInt(userResponse)){
            return true;
        }
        else {
            return false;
        }
    },

    playQuizz: function() {
        // loop on all questions array
        for(var i = 0; i < questions.length; i++){
            console.log('app.init');
            var questionId = i;

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
                // else target red ul
                list = document.querySelector("#wrong .responses");
            }
            // and then add li with question in ul
            list.innerHTML += '<li>' + question + '</li>';
        }

    },

    init: function () {
        app.playQuizz();
    }
};

// launch application
app.init();
