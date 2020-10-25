// function startTimer(time){
//     counter = setInterval(timer, 1000);
//     function timer(){
//         timeCount.textContent = time; //changing the value of timeCount with time value
//         time--; //decrement the time value
//         if(time < 9){ //if timer is less than 9
//             let addZero = timeCount.textContent; 
//             timeCount.textContent = "0" + addZero; //adds a 0 before time value
//         }
//         if(time < 0){ //if timer is less than 0
//             clearInterval(counter); //clear counter
//             timeText.textContent = "Time Off"; //change the time text to time off
//             const allOptions = option_list.children.length; //getting all option items
//             let correcAns = questions[que_count].answer; //getting correct answer from array
//             for(i=0; i < allOptions; i++){
//                 if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer
//                     option_list.children[i].setAttribute("class", "option correct"); //changes the style when correct option is selected
//                     option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
//                     console.log("Time Off: Auto selected correct answer.");
//                 }
//             }
//             for(i=0; i < allOptions; i++){
//                 option_list.children[i].classList.add("disabled"); //once user selects an option then it disabbles the rest
//             }
//             next_btn.classList.add("show"); //shows the next button upon selection
//         }
//     }
// }

// function startTimerLine(time){
//     counterLine = setInterval(timer, 29);
//     function timer(){
//         time += 1; //upgrading time value with 1
//         time_line.style.width = time + "px"; //increasing width of time_line with px by time value
//         if(time > 549){ //if time value is greater than 549
//             clearInterval(counterLine); //clear counterLine
//         }
//     }
// }
// PAGE COUNTER----->

function queCounter(index){
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span>'+ index +'of '+ questions.length +' Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}
const startTimer = function() {   
    timer.setAttribute('class', '');
    let countdown = setInterval(function() {
        if (secondsLeft === 0) {
        clearInterval(countdown);
        endQuiz();
        }
        else if (currentQuestion > 4) {
            clearInterval(countdown);
        }
        else {
            secondsLeft--
            timer.innerText = 'Seconds Remaining: ' + secondsLeft;
        } 
    }, 1000)    
};