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
        // counters for all answer initialised
        var goodAnswersCount = 0;
        var wrongAnswersCount = 0;

        // loop on all questions array
        for(var i = 0; i < questions.length; i++){
            console.log('app.init');
            var questionId = i;

            // store question to ask
            var question = questions[questionId];

            // store user answer
            var userAnswer = app.askQuestion(question);
            console.log(userAnswer);

            // isAnswerCorrect is a boolean
            var isAnswerCorrect = app.checkResponse(questionId, userAnswer);

            // will content ul where added question
            var list = null;
            var listTitle = null;

            // if good answer
            if (isAnswerCorrect){
                // target green ul
                list = document.querySelector("#right .responses");
                // increment counter for good answers
                goodAnswersCount++;
                // target span for good answers
                listTitle = document.getElementById("good-answers-count");
                // add quantity of good answers.
                listTitle.innerHTML = " (" + goodAnswersCount + ")"
            }
            else {
                // else target red ul
                list = document.querySelector("#wrong .responses");
                wrongAnswersCount++;
                listTitle = document.getElementById("wrong-answers-count");
                listTitle.innerHTML = " (" + wrongAnswersCount + ")";
                    }
            // and then add li with question in ul
            list.innerHTML += '<li>' + question + '</li>';

            debugger;
        }

    },

    init: function () {
        app.playQuizz();
    }
};

// launch application
app.init();
