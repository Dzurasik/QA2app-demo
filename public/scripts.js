var plus10 = document.getElementById("plus10");
var minus5 = document.getElementById("minus5");
var out = document.getElementById("out");

//create a counter variable
var points = 0;

const app = Vue.createApp({
    data() {
        return {
            showModal: false,
            index: 0,
            selectedAnswer: '',
            correctAnswer: 0,
            wrongAnswer: 0,
            count: 12,
            questions: [
                {
                    question: "The Applicant is a legal entity (public or private body?",
                    answers: {a: 'True', b: 'False'},
                    correctAnswer: 'a',
                },
                {
                    question: "The Applicant is registered in eligible country?",
                    answers: {a: 'True', b: 'False'},
                    correctAnswer: 'a'
                },
                {
                    question: "As Lead Applicant you are not subject to an EU exclusion decision?",
                    answers: {a: 'True', b: 'False'},
                    correctAnswer: 'a'
                },
                {
                    question: "The project idea meets all the eligibility criteria of the applicant",
                    answers: {a: 'True', b: 'False'},
                    correctAnswer: 'a'
                },
                {
                    question: "Is the Operation for the benefit of the Programme area?",
                    answers: {a: 'True', b: 'False'},
                    correctAnswer: 'a'
                },
                {
                    question: "Project activities are not research, do NOT include staatutory responsibilities of the competent authority, and are clearly related to the objective(s) of the project and the corresponding SNAP?",
                    answers: {a: 'True', b: 'False'},
                    correctAnswer: 'a'
                },
                {
                    question: "All activities are new and additional to the work undertaken by the applicant prior to the project?",
                    answers: {a: 'True', b: 'False'},
                    correctAnswer: 'a'
                },
                {
                    question: "The project idea meets all project acceptance criteria?",
                    answers: {a: 'True', b: 'False'},
                    correctAnswer: 'a'
                },
                {
                    question: "We declare to have the explicit consent of all applicants on their participation and on the content of this proposal.",
                    answers: {a: 'True', b: 'False'},
                    correctAnswer: 'a'
                },
                {
                    question: "We confirm that the information contained in this proposal is correct and complete and that none of the project activities have started before the proposal was submitted (unless explicitly authorised in the call conditions).",
                    answers: {a: 'True', b: 'False'},
                    correctAnswer: 'a'
                },
                {
                    question: "We declare: to be fully compliant with the eligibility criteria set out in the call ,not to be subject to any exclusion grounds under the EU Financial Regulation 2018/1046 , to have the financial and operational capacity to carry out the proposed project.",
                    answers: {a: 'True', b: 'False'},
                    correctAnswer: 'a'
                },
                {
                    question: "We confirm that for activities carried out outside the Union, the same activities would have been allowed in at least one EU Member State.",
                    answers: {a: 'True', b: 'False'},
                    correctAnswer: 'a'
                },

            ]
        }
    },
    methods: {
        toggleModal: function(){
            if(this.wrongAnswer > 0)
                this.showModal = !this.showModal
            else
                this.showModal = false
            },
        answered(e) {
            this.selectedAnswer = e.target.value
            if(this.selectedAnswer == this.questions[this.index]['correctAnswer'])
                this.correctAnswer++
            else
                this.wrongAnswer++
        },
        nextQuestion() {
            this.index++
            this.selectedAnswer = ''
        },        showResults() {
            this.index++
        }, 
        resetQuiz() {
            this.index = 0
            this.selectedAnswer = ''
            this.correctAnswer = 0
            this.wrongAnswer = 0
        }
    }
})

app.mount('#app')