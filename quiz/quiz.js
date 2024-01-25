const quizQuestions = [
    {
      description:
        "A ninja with a dream of becoming the strongest ninja and leader of his village.",
      answer: "Naruto",
      point: 5,
      coverImg : "https://i.pinimg.com/564x/85/31/7b/85317b621555591cfdc1daebd40f399d.jpg",
      character : "https://photos.tf1.fr/780/780/perso-showpage-8efac4-fe1481-0@1x.png"
    },
    {
      description:
        "A high school student who gains the powers of a death god and uses them to bring justice.",
      answer: "Death Note",
      point: 10,
      coverImg : "https://m.media-amazon.com/images/M/MV5BNjRiNmNjMmMtN2U2Yi00ODgxLTk3OTMtMmI1MTI1NjYyZTEzXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
      character : "/assets/img/death.png"
    },
    {
      description:
        "A group of friends embark on an adventure to find a mysterious treasure.",
      answer: "One Piece",
      point: 2,
      coverImg:"https://www.manga-news.com/public/images/pix/dvd/690/One-piece-anime-east-blue.jpg",
      character : "/assets/img/onePiece.png"
    },
   
]
//   document.getElementById("score")
//   console.log(document.getElementById("score") )
//  let element=document.getElementsByClassName("cardGlob")
//  console.log(document.getElementsByClassName("cardGlob"))
//  let elements=document.getElementsByTagName("p")
//  console.log(elements);
//  document.querySelector("#score")
//  console.log(document.querySelector("#score"));


let questionIndex = 0;
function displayFunc() {
  let currentQuestion=quizQuestions[questionIndex]
  document.getElementById("question").innerText=currentQuestion.description
  document.getElementById("cover").src=currentQuestion.coverImg
  document.getElementById("character").src=currentQuestion.character
 
    
  }
  displayFunc()


  function changeIndex() {
  
if (questionIndex<quizQuestions.length-1) { 
  questionIndex++
  displayFunc()
}
else alert(" you win! ")
    
  }
  
function submitQuestion() {
  let userAnswer = document.getElementById("answer").value
  let right=quizQuestions[questionIndex].answer
  if (userAnswer===right) {
    alert("right answer")
    
  }else{
alert("try again")
  } 
}
function updateScore( ) {
  let scoreDisplay = document.getElementById("score").value
  let userScore=quizQuestions[questionIndex].point
  if (userScore=== ) {
    
  } else {
    
  }
}

