var app = {
    init: function () {
        console.log('app.init');

        app.askQuestion(questions[0]);
    },


    // new method to give question to user
    askQuestion: function(questionToAsk){
        let userAnswer = prompt(questionToAsk);
        console.log(userAnswer);

    }
};

// HTML fully loaded and catch it
document.addEventListener('DOMContentLoaded', app.init);