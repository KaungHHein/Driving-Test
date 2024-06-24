const quizData = [


    {
        question:"1.  Motorist should be aware that all bicycles used after dark must have:",
        a: "A front Headlight and red rear reflector",
        b: "White reflector on the front and rear fenders",
        c: "Brake lights",
        d: "Reflective handlebar grips",
        correct: "a",
    },
    {
        question:"2.  You are making a left turn from a two street into a one-way street. When you have completed the turn, your car should be:",
        a: "In the left lane of the street",
        b: "In the center of the street",
        c: "In the lane with the least traffic",
        d: "In the right lane of the street",
        correct: "a",
    },
    {
        question:"3.	When you drive in heavy fog during daylight hours, you should drive with your:",
        a: "Headlightd off",
        b: "Parking lights on",
        c: "Headlights on high beam",
        d: "Headlights on low beam",
        correct: "d",
    },
    {
        question:"4.	A traffic light which has a green arrow and a red light means that:",
        a: "You may only drive straight ahead",
        b: "You may drive only in the direction of the green arrow",
        c: "You must wait for a green light",
        d: "Vehicles moving in any direction must stop",
        correct: "b",
    },
    {
        question:"5.	When a snow emergency is declared, what does the snow emergency street sign means?",
        a: "Chains and snow tires must be on all vehicles using the street",
        b: "No cars are allowed on the street during the emergency",
        c: "No vehicle may use the street until it is cleared",
        d: "Only police cars may use the street",
        correct: "a",
    },
    {
        question:"6.	What does a “no stopping” sign mean?",
        a: "You may stop long enough to unload packages",
        b: "You may not stop your vehicle at all",
        c: "You may not stop for longer than five minutes",
        d: "You may stop when ordered to do so by a policeman",
        correct: "d",
    },
    {
        question:"7.	You are getting on a highway which has a very short entrance lane. The safest way for you to enter the flow of traffic would be to:",
        a: "Use the left lane of the highway to get up to cruising speed",
        b: "Use as much ramp as possible to get up to cruising speed",
        c: "Wait for a large gap in traffic then speed up quickly",
        d: "Get up to cruising speed gradually so others cars will see you",
        correct: "c",
    },
    {
        question:"8.	You want to turn left at an intersection. The light is green but oncoming traffic is heavy. You should:",
        a: "Use the next intersection",
        b: "Wait in the center of the intersection for traffic to clear",
        c: "Take the right of way since you have the light",
        d: "Wait at the crosswalk for traffic",
        correct: "b",
    },
    {
        question:"9.	Minimum speed signs are designed to:",
        a: "Test future signal needs",
        b: "Keep traffic flowing smoothly",
        c: "Assure pedestrian safety",
        d: "Show current local road conditions",
        correct: "b",
    },
    {
        question:"10.	Which of the following is one of the rules of defensive driving?",
        a: "Keep your eyes fixed firmly on the road in front of you",
        b: "Keep your eyes moving to know what is going on around you",
        c: "Be confident that you can avoid danger in any driving situation",
        d: "Expect the other driver to make up for any mistakes on your part",
        correct: "b",
    },
    {
        question:"11.	What is the best thing to do if your car becomes disabled on an expressway?",
        a: "Get your car off the road",
        b: "Leave your car where it is and call a low truck",
        c: "Get out of your car and walk a safe distance away",
        d: "Wait for the police to give you a push",
        correct: "a",
    },
    {
        question:"12.	You come to an intersection which has a flashing  red light.You should:",
        a: "Come to a full stop, then go when it is safe to do so",
        b: "Go through the intersection slowly",
        c: "Stop only if cars are approaching the intersection",
        d: "Stop only if cars are already in the intersection",
        correct: "a",
    },
    {
        question:"13.	In general, you should pass vehicles going in the same direction as you are going:",
        a: "On the right",
        b: "On the left",
        c: "Whenever you have the opportunity to do so",
        d: "At intersections where you have more space",
        correct: "b",
    },
    {
        question:"14.	If you are parked parallel to the curb, you may get out of the car on the traffic side:",
        a: "When the traffic light at the closed intersection turns red",
        b: "When you won’t interfere with oncoming vehicles",
        c: "If you use your four-way flasher first",
        d: "During the daytime when other drivers can see you",
        correct: "b",
    },
    {
        question:"15.	Around sign with a yellow background and black “X” is a warning that you are approaching:",
        a: "A blasting zone",
        b: "A crosswalk",
        c: "A railroad crossing",
        d: "An intersection",
        correct: "c",
    },
    {
        question:"16.	Before you leave a parking space which is parallel to the curb, you should:",
        a: "Sound your horn",
        b: "Look for traffic by turning your head",
        c: "Turn on your four-way flasher",
        d: "Look for traffic by using your inside rear-view mirror",
        correct: "b",
    },
    {
        question:"17.	You are waiting in the intersection to complete a left turn. You should:",
        a: "Signal and keep your wheels to the left",
        b: "Drive around the rear of a car if it blocks you",
        c: "Signal and keep your wheels straight",
        d: "Flash your headlight so the driver will let you get through",
        correct: "c",
    },
    {
        question:"18.	When driving at night, it is most important for you to:",
        a: "Drive within the range of your headlights",
        b: "Use your high beams at all times",
        c: "Watch for cars at intersection",
        d: "Be ready to brake more quickly",
        correct: "a",
    },
    {
        question:"19.	When you want to make a right turn, your car must be:",
        a: "Close to the right side of the street",
        b: "Past the center of the intersection when you begin to turn",
        c: "Near the center of the street",
        d: "Close to the left side of the street",
        correct: "a",
    },
    {
        question:"20.	What is the most important driving rule that applies to all emergency situations?",
        a: "Your first reaction is the best",
        b: "Always slow down gradually",
        c: "Think before you act",
        d: "Apply your brakes immediately",
        correct: "c",
    },
    {
        question:"21.	When you get ready to leave an expressway, you should begin to use your turn signal:",
        a: "Once you are in the exit lane",
        b: "Just as you get to the exit lane",
        c: "Before you reach the exit lane",
        d: "When you see cars behind you the exit lane",
        correct: "c",
    },
    {
        question:"22.	What does a “slow moving vehicle” emblem look like?",
        a: "A square red sign",
        b: "A diamond shaped yellow sign",
        c: "A triangle orange sign",
        d: "A round green sign",
        correct: "c",
    },
    {
        question:"23.	When your right wheel runs onto a soft shoulder , what is the best way to get back on the highway?",
        a: "Apply the brakes firmly and stop completely",
        b: "Steer hard to the left and then gently to the right",
        c: "Apply the brake gently and steer gently to the left",
        d: "Take your foot off the gas and steer gently to the left",
        correct: "d",
    },
    {
        question:"24.	If a tire blows out, the proper thing to do is:",
        a: "Apply the brakes then shift into neutral",
        b: "Hold the steering wheel firmly, and ease up on the gas",
        c: "Speed up to gain traction and then pull to the right",
        d: "Shift into neutral, then apply the brakes",
        correct: "b",
    },
    {
        question:"25.	A bicyclist differs from a motorist in that he is not required to:",
        a: "Signal all turns",
        b: "Insure his vehicle",
        c: "Follow all the traffic control signs",
        d: "Obey the same traffic laws",
        correct: "b",
    },


];

const quiz= document.getElementById('quiz') /* quiz = All the element */
const questionEl= document.getElementById('question') /* questionEl = Question Text */
const answerEls = document.querySelectorAll('.answer') 
/* 
querySelectorAll will create a NodeList.
const answerEls = [ Radio Button of Answer Text (a) , 
                    Radio Button of Answer Text (b) , 
                    Radio Button of Answer Text (c) , 
                    Radio Button of Answer Text (d) ] 
*/
const a_text= document.getElementById('a_text') /* const a_text = Answer Text (a) */
const b_text= document.getElementById('b_text') /* const b_text = Answer Text (b) */
const c_text= document.getElementById('c_text') /* const c_text = Answer Text (c) */
const d_text= document.getElementById('d_text') /* const d_text = Answer Text (d) */
const submitBtn = document.getElementById('submit') /* sunmitBtn = Submit */

let currentQuiz = 0 ; 
let score = 0 ;
let incorrectQuestions = [] ;
let wrongdata = [];



function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false)   /* Function that will uncheck All Radio Button */
}


function loadQuiz(){

    deselectAnswers()  /* Uncheck All Radio Button */

    const currentQuizData = quizData[currentQuiz]

    /*    currentQuiz is 0                                            
    
    const currentQuizData = quizData [0]

    Therefore , const currentQuizData = { 
        question:"1.  Motorist should be aware that all bicycles used after dark must have:",
        a: "A front Headlight and red rear reflector",
        b: "White reflector on the front and rear fenders",
        c: "Brake lights",
        d: "Reflective handlebar grips",
        correct: "a", }

    */

    questionEl.innerText = currentQuizData.question /* questionEl = "1.  Motorist should be aware that all bicycles used after dark must have:"  */
    a_text.innerText = currentQuizData.a  /* a_text = "A front Headlight and red rear reflector" */
    b_text.innerText = currentQuizData.b  /* b_text = "White reflector on the front and rear fenders" */
    c_text.innerText = currentQuizData.c  /* c_text = "Brake lights" */
    d_text.innerText = currentQuizData.d  /* d_text = "Reflective handlebar grips" */
}




loadQuiz();






function getSelected(){
    let answer;
    answerEls.forEach(answerEl => {   
        if(answerEl.checked){
            answer = answerEl.id;
        }
    })
    return answer
}



/* 
answerEls = [ 
    Radio Button of Answer Text (a) , 
    Radio Button of Answer Text (b) , 
    Radio Button of Answer Text (c) , 
    Radio Button of Answer Text (d) 
    ] 
    
forEach function/Method will loop all Element within a  Nodelist of answerEls.
Eachtime when it loop , it will put the value in answerEl. 
Let's say now is the first time for looping.
Therefore answerEl =  Radio Button of Answer Text (a).
if(answerEl.checked){answer = answerEl.id} means " if Radio Button of Answer Text (a) is ticked/checked , id 'a' will be put in answer.".
i.e answer = 'a'

Then , it will loop again until finish.
    
*/




submitBtn.addEventListener('pointerdown', () => {
    const answer = getSelected() 

    /* 
    If we didn't click/tick one of the Radio Button , getSelected() value  is null. i.e. answer = null
    But if we clicked/ticked one of the Radio Button, getSelected() has a value.i.e answer = 'a' or 'b' or 'c' or 'd'
    */
    
    
    if(answer){  

        if (answer === quizData[currentQuiz].correct){  

            score++ ; 

        }
        
        if (answer !== quizData[currentQuiz].correct){

            incorrectQuestions.push(quizData[currentQuiz]);

            console.log(incorrectQuestions);   

        }


        /* 
        Let's say this is the first time running and answer = 'a'
        And quizData[0].correct is a
        if answer == quizData[0].correct 
        a      ==     a
        Therefore it is True
        */

        


        currentQuiz++           /* if we have answer and it is not necessary Whether the answer is True or False, add +1 to currentQuiz */


        

        if(currentQuiz < quizData.length){

            loadQuiz()
            
        }
        else{

            const getName = sessionStorage.getItem("key");

            quiz.innerHTML = `

            <h3>${getName}<h3>

            <h3>You answered ${score}/${quizData.length} question correctly</h3>

            <button onclick="location.href='index.html'">Reload to start again</button>

            <br>

            <button onclick="checkWrongQuiz()">Check wrong quiz</button>
            `
            /* 
            Within variable.innerHTML = `` ,
            if we want to put variable of scroe and quizData.length,
            We can not use (+) sign. i.e , quiz.innerHTML = ` <h2>You answered + score} + / + quizData.length + question correctly</h2> `
            instance of + sign, ${} is used to put variable within the text. 
            */
        }
    }
})




function checkWrongQuiz(){
   

    quiz.innerHTML = `
        <h4>Question : ${incorrectQuestions[0].question}</h4>
        <p>a : ${incorrectQuestions[0].a}</p>
        <p>b : ${incorrectQuestions[0].b}</p>
        <p>c : ${incorrectQuestions[0].c}</p>
        <p>d : ${incorrectQuestions[0].d}</p>
        <p>correct answer : ${incorrectQuestions[0].correct}</p>

        <button onclick="reloadornext()">OK</button>
    `
}         


function reloadornext(){

    incorrectQuestions.shift();

    console.log(incorrectQuestions) ;

    console.log("incorrectQuestions.length : " + incorrectQuestions.length) ;
    
    var reduced_array_length = incorrectQuestions.length;

    reduced_array_length = reduced_array_length - 1; 

    console.log("reduced_array_length : " + reduced_array_length);


    if(reduced_array_length >= 0){                                                     

        checkWrongQuiz();

    }
    else{

        window.location.href = "index.html";

    }

}