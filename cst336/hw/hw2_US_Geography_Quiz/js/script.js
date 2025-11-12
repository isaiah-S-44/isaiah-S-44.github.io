document.querySelector("button").addEventListener("click", gradeQuiz);

//Global Variables
var score = 0;
var attempts = localStorage.getItem("attempts") || 0;

// displayQ4Choices();

//calling function for radio button questions
// Question 4: smallest US state
displayChoices(4, ["Maine", "Rhode Island", "New Maryland", "Delaware"]);

// Question 6: largest US state by area
displayChoices(6, ["Texas", "California", "Alaska", "Montana"]);

//Functions

// Example Function call: displayChoices(4, ["Maine", "Rhode Island", "New Maryland", "Delaware"]);
function displayChoices(questionNumber, choicesArray) {
    // Shuffle the array so the order is random
    choicesArray = _.shuffle(choicesArray);

    // Get the container element dynamically (example: "#q4Choices")
    const container = document.querySelector(`#q${questionNumber}Choices`);

    // Clear out old content just in case
    container.innerHTML = "";

    // Loop through choices and build radio buttons
    for (let i = 0; i < choicesArray.length; i++) {
        container.innerHTML += `
            <input type="radio" name="q${questionNumber}" id="${choicesArray[i]}" value="${choicesArray[i]}">
            <label for="${choicesArray[i]}">${choicesArray[i]}</label>
        `;
    }
}


// function displayQ4Choices(){
//     let q4ChoicesArray = ["Maine", "Rhode Island", "New Maryland", "Delaware"];
//     q4ChoicesArray = _.shuffle(q4ChoicesArray);
//     for (let i = 0; i < q4ChoicesArray.length; i++){
//         document.querySelector("#q4Choices").innerHTML += `<input type="radio" name="q4" id="${q4ChoicesArray[i]}" 
//             value="${q4ChoicesArray[i]}"> <label for="${q4ChoicesArray[i]}">${q4ChoicesArray[i]}</label>`;
//     }
// }//displayQ4Choices

function isFormValid(){ 
    let isValid = true;
    if (document.querySelector("#q1").value == ""){
        isValid = false;
        document.querySelector("#validationFdbck").innerHTML = "Question 1 was not answered.";
    }
    return isValid;
}//isFormValid

function rightAnswer(index){
    document.querySelector(`#q${index}Feedback`).innerHTML = "Correct!";
    document.querySelector(`#q${index}Feedback`).className = "bg-success text-white!";
    document.querySelector(`#markImg${index}`).innerHTML = "<img src='img/checkmark.png' alt='Checkmark'>";
    score += 10;
}
function wrongAnswer(index){
    document.querySelector(`#q${index}Feedback`).innerHTML = "Incorrect.";
    document.querySelector(`#q${index}Feedback`).className = "bg-warning text-white!";
    document.querySelector(`#markImg${index}`).innerHTML = "<img src='img/xmark.png' alt='xmark'>";
}

function gradeQuiz(){
 console.log("Grading quiz…");
 document.querySelector("#validationFdbck").innerHTML = ""; // resets validation feedback
 if (!isFormValid()){
    return; //stops the function if form is not valid
 }

 //variables
 score = 0;
 let q1Response = document.querySelector("#q1").value.toLowerCase();
 let q2Response = document.querySelector("#q2").value;
 // question 3 is checkboxes
 let q4Response = document.querySelector("input[name='q4']:checked").value;
 let q5Response = document.querySelector("#q5").value;
 let q6Response = document.querySelector("input[name='q6']:checked").value;
 // question 7 is checkboxes
 let q8Response = document.querySelector("#q8").value.toLowerCase();
 let q9Response = document.querySelector("#q9").value;
 // question 10 is checkboxes

//  console.log(q1Response);
//  console.log(q2Response);
//  console.log(q4Response + " is q4 response");
//  console.log(q5Response + " is q5 response");
//  console.log(q6Response + " is q6 response");
//  console.log(q8Response + " is q8 response");
//  console.log(q9Response + " is q9 response");




 //Grading Question 1
 if (q1Response === "sacramento"){
    rightAnswer(1);
 } else {
    wrongAnswer(1);
 }

//Grading Question 2
 if (q2Response === "mo"){
    rightAnswer(2);
 } else {
    wrongAnswer(2);
 }

//Grading Question 3
 if (document.querySelector("#Jefferson").checked && document.querySelector("#Roosevelt").checked && 
  !document.querySelector("#Jackson").checked && !document.querySelector("#Franklin").checked) {
    rightAnswer(3);
 } else {
    wrongAnswer(3);
 }

//Grading Question 4
 if (q4Response === "Rhode Island"){
    rightAnswer(4);
 } else {
    wrongAnswer(4);
 }

//Grading Question 5
if (q5Response === "pacific"){
    rightAnswer(5);
} else {
    wrongAnswer(5);
}

//Grading Question 6
 if (q6Response === "Alaska"){
    rightAnswer(6);
 } else {
    wrongAnswer(6);
 }
 
//Grading Question 7
 if (document.querySelector("#Maine2").checked &&
        document.querySelector("#Montana2").checked &&
        !document.querySelector("#Ohio").checked &&
        !document.querySelector("#Utah").checked) 
        {
        rightAnswer(7);
    } else {
        wrongAnswer(7);
    }

//Grading Question 8
 if (q8Response === "austin"){
    rightAnswer(8);
 } else {
    wrongAnswer(8);
 }

 //Grading Question 9
 if (q9Response === "midwest"){
     rightAnswer(9);
 } else {
     wrongAnswer(9);
 }

//Grading Question 10
 if (document.querySelector("#PuertoRico").checked &&
        document.querySelector("#Guam").checked &&
        document.querySelector("#Samoa").checked &&
        !document.querySelector("#Hawaii").checked) {
        rightAnswer(10);
    } else {
        wrongAnswer(10);
    }

//  Modify #totalScore color based on score
 const totalScoreEle = document.querySelector("#totalScore");
 totalScoreEle.innerHTML = ""; // clear old message

    if (score === 100) {
        totalScoreEle.className = "text-success";
        totalScoreEle.innerHTML = `<span style="color: purple;">Perfect Score!!!</span><br>`;
    } else if (score >= 80) {
        totalScoreEle.className = "text-success";
        totalScoreEle.innerHTML = `<span style="color: blue;">Great Job!!!</span><br>`;
    } else {
        totalScoreEle.className = "text-danger";
        totalScoreEle.innerHTML = `Oops! Try Again!<br>`;
    }

 totalScoreEle.innerHTML += `Total Score: ${score}`;
 document.querySelector("#totalAttempts").innerHTML = `Total Attempts: ${++attempts}`;
 localStorage.setItem("attempts", attempts);

}//gradeQuiz