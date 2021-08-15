var readlineSync = require('readline-sync')
var score=0

var question_bank=[
  {
    question:"Which team won the 2021 NBA Championship?",
    answer:"Milwaukee Bucks"
  },
  {
    question: "Who won the Euro 2020?",
    answer:"Italy"
  },
  {
    question:"How many medals did India win in the Tokyo Olympics?",
    answer:"7"
  },
  {
    question:"Which Indian went against the odds to secure the first track and field gold medal after 120 year in the olympics?",
    answer:"Neeraj Chopra"
  },
  {
    question:"Which tennis player joined the club of winning 20 grand slams this year?",
    answer:"Novak Djokovic"
  },
    {
    question:"Which team was the first ever to win the first edition of the WTC?",
    answer:"New Zealand"
  },
  {
    question:"In which sport did India win its first medal in the Tokyo Olympics?",
    answer:"Weightlifting"
  }
]

var players=[{
  name:"Anish",
  score:7
},{
  name:"Divi",
  score:5
}]

var userName=readlineSync.question("What is your name? ")
console.log("Welcome to the Ultimate Quiz Show, "+userName)
console.log("How well have you been following the sports section? Lets's find out!\n");

function quizz(question,answer){
  var userAnswer=readlineSync.question(question);

  if(userAnswer.toLowerCase()===answer.toLowerCase()){
    console.log("You are right!")
    score++;
   
  }
  else {
    console.log("Oh you've answered wrong");

  }

  console.log("You're running score is "+score+"\n")
   console.log("--------------------------")

}


for(i=0;i<question_bank.length;i++){
  quizz(question_bank[i].question,question_bank[i].answer)
}

console.log("your final score is "+score+" thank you for playing!")
console.log("Top scorers are---")
for(topScorer of players ) console.log(topScorer.name+":"+topScorer.score)


