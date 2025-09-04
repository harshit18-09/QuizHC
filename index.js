/**Creating dataset of questions */
let readlineSync = require('readline-sync');
let score = 0;
let kuler = require('kuler');
let username = readlineSync.question('Enter your name: ');
console.log(kuler(`\nWelcome ${username} to the QuizHC!` , '#a3e635'));

const database = {
  data : [
    {
      question: `let a = {}, b = {}
        console.log(a == b)
        console.log(a === b)`,
      options:{
        a: 'true false',
        b: 'false true',
        c: 'true true',
        d: 'false false'
      },
      correctAns: 'd'
    },
    {
      question: `Object.assign(target, ...sources)
        What does the above statement do?`,
      options:{
        a: 'It will copy all the values of one or more source objects to a target object.',
        b: 'It will copy all the values of one or more source objects to a target object recursively.',
        c: 'It will copy all the values of one or more source objects to a target object recursively upto 2 depth.',
        d: 'It will copy all the values of one or more source objects to a target object recursively upto 2 depth.'
      },
      correctAns: 'a'
    },
    {
      question: `What is the output of the following code snippet?
        let a = {}, b = {}, c = {}
        a[b] = 123
        a[c] = 456
        console.log(a[b])`,
      options:{
        a: '123',
        b: '456',
        c: 'undefined',
        d: 'ReferenceError'
      },
      correctAns: 'b'
    }
  ]
}

const leaderboard = {
  data : [
    {
      name: "Ashish",
      score: 1
    },
    {
      name: "Rahul",
      score: 2
    },
    {
      name: "Rohit",
      score: 3
    }
  ]
}

function playGame(userAns, correctAns){
  if(userAns === correctAns){
    console.log(kuler('Correct Answer!', '#a3e635'));
    score++;
  }
  else{
    console.log(kuler('Wrong Answer!' , '#dc2626'));
    console.log(kuler(`Correct Answer is ${correctAns}` , '#2563eb'));
  }
}

function showQuestionsandOptions(database){
  for(let i=0; i<database.data.length; i++){
    console.log(`Q${i+1} - ${database.data[i].question}`);
    console.log();
    for(let j in database.data[i].options){
      console.log(`${j} - ${database.data[i].options[j]}`);
    }
    console.log();

    let userAns = readlineSync.question('Enter your answer: ').toLowerCase();
    playGame(userAns, database.data[i].correctAns);
  }
}

function showLeaderboard(leaderboard){
  leaderboard.data.push({name: username, score: score});
  let sortedLeaderboard = leaderboard.data.sort((a,b) => b.score - a.score);
  console.log('\nLeaderboard: ');
  for(let i=0; i<sortedLeaderboard.length; i++){
    console.log(kuler(`${i+1} - ${sortedLeaderboard[i].name} : ${sortedLeaderboard[i].score}` , '#e11d48'));
  }
}

showQuestionsandOptions(database);
console.log(`\nYour final score is ${score}`);
showLeaderboard(leaderboard);