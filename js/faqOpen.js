
const questions = document.querySelectorAll(".faq__question");
for (let i = 0; i <= questions.length; i++) {
  let question = questions[i];
  question.onclick = function () {
    question.classList.toggle("faq__question_open");
    let arrow = question.querySelector(".faq__arrow");
    let answer = question.querySelector(".faq__ansverText");
    arrow.classList.toggle("faq__arrow_open");
    answer.classList.toggle("faq__ansverText_open");
    console.log(question.id)
  }
}


