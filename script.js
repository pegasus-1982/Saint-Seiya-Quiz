$(document).ready(function(){
    


    $("#startGame").on("click",function (){
        // Start button will display the first question and start the timmer
        $("#startGame").attr("disabled", true);
        $(".card").show();
        $(".card-img-top").attr("src", saintsImage[0]);
        $(".card-title").text(cardTitle[0]);
        $(".card-text").text(cardText[0]);
        $("#optionA").text(optionA[0]);
        $("#optionB").text(optionB[0]);
        $("#optionC").text(optionC[0]);
        console.log(questionNumber);


        // Adding Next button, when Next is selected, the title, image, question and answer changes to next one
    // Also disables the possible answers once click so user can`t continue to click on them after selection
        var questionNumber = 0; 
                $(".next").on("click", function() {
                questionNumber++;
                $(".card-img-top").attr("src", saintsImage[questionNumber]);
                $(".card-title").text(cardTitle[questionNumber]);
                $(".card-text").text(cardText[questionNumber]);
                
                $("#optionA").text(optionA[questionNumber]);
                $("#optionB").text(optionB[questionNumber]);
                $("#optionC").text(optionC[questionNumber]);
                
                if (questionNumber < 6) {
                    $("#optionA").attr("disabled", false);
                    $("#optionB").attr("disabled", false);
                    $("#optionC").attr("disabled", false);

                }
                        
                $(".btn-secondary").on("click", function() {

                    $("#optionA").attr("disabled", true);
                    $("#optionB").attr("disabled", true);
                    $("#optionC").attr("disabled", true);
                })


            }); 

            // Score input
            var score = 0;
            $("#optionA").on("click",function(){
                console.log($("#optionA").text());
                if ($("#optionA").text() === correctAnswers[questionNumber] ){
                    console.log("correctAnswers");
                    score++;
                    $("#yourScore").text(score);
                }
            })

            $("#optionB").on("click",function(){
                console.log($("#optionB").text());
                if ($("#optionB").text() === correctAnswers[questionNumber] ){
                    console.log("correctAnswers");
                    score++;
                    $("#yourScore").text(score);
                }
            })

            $("#optionC").on("click",function(){
                console.log($("#optionC").text());
                if ($("#optionC").text() === correctAnswers[questionNumber] ){
                    console.log("correctAnswers");
                    score++;
                    $("#yourScore").text(score);
                }
            })


        // Accounting for correct answer in Q1.
        var AnswerQ1 = "Cristal Wall";
        var correctCountQ1 = 0;
        var count = correctCountQ1;
        var userInputA = $("#optionA").text();
        var userInputB = $("#optionB").text();
        var userInputC = $("#optionC").text();
        
        
            
        

        




        // Disabling user input after selecting any option.
        $(".btn-secondary").on("click", function() {

            $("#optionA").attr("disabled", true);
            $("#optionB").attr("disabled", true);
            $("#optionC").attr("disabled", true);
        })
        

        // Adding timmer and message when time is up.
            
        var timeEl = document.querySelector(".time");
        var mainEl = document.getElementById("main");
        var secondsLeft = 20;

        function setTime() {
        var timerInterval = setInterval(function() {
          secondsLeft--;
          timeEl.textContent = secondsLeft + " Seconds left";
          
          if(secondsLeft === 0) {
            $(".next").attr("disabled", true);
            clearInterval(timerInterval);
            sendMessage();
            $("#tryAgain").show();
          }
        }, 1000);

        function sendMessage() {
            timeEl.textContent = "Time is up!!! ";
            var imgEl = document.createElement("img");
            imgEl.setAttribute("src", "https://static.wikia.nocookie.net/saintseiya/images/c/c5/Athena_1.png/revision/latest/scale-to-width-down/325?cb=20130630213200");
            imgEl.setAttribute("style", "background-color:transparent");
            imgEl.style.height = "600px";
            imgEl.style.width = "auto";
            imgEl.style.marginTop = "10px";
            imgEl.style.marginLeft = "250px";
            mainEl.appendChild(imgEl);
          }
        }
        
        setTime();
    })
    
    // Adding arrays of Images, Questions and Answers
    var saintsImage = [
        "https://static.wikia.nocookie.net/saintseiya/images/a/a2/Aries_muu23.png/revision/latest/scale-to-width-down/300?cb=20140629043817",
        "https://static.wikia.nocookie.net/saintseiya/images/2/2a/Gold_Taurus_Aldebaran.jpeg/revision/latest?cb=20130521111326",
        "https://static.wikia.nocookie.net/saintseiya/images/1/12/Gold_Saint_3-Gemini_Saga-1.png/revision/latest/scale-to-width-down/350?cb=20170714032839",
        "https://static.wikia.nocookie.net/saintseiya/images/0/0f/Death_Mask_cancer.png/revision/latest/scale-to-width-down/337?cb=20130712021003",
        "https://static.wikia.nocookie.net/saintseiya/images/4/44/Leo_Aiolia_Profile.png/revision/latest/scale-to-width-down/300?cb=20150414120119",
        "https://static.wikia.nocookie.net/saintseiya/images/1/18/Virgo_Shaka.jpg/revision/latest/scale-to-width-down/249?cb=20130712021757",
    ]
   
    var cardTitle = [
        "Question #1. Aries Battle",
        "Question #2. Taurus Battle",
        "Question #3. Geminis Battle",
        "Question 4. Cancer Battle",
        "Question #5. Leos Battle",
        "Question #6. Virgos Batlle"
    ]

    var cardText = [
        "The following is a technique used by Aries Saint:",
        "which bronce saint fights Aldebaran?",
        "What is the name of Saga´s twin brother",
        "Who is Deathmask´s oponent?",
        "Who saved Seiya from dying in Leo`s house?",
        "Shaka is known as:",
    ]
    
    var optionA = [
        "Crystal Wall",
        "Hyoga",
        "Aiolos",
        "Shiryu",
        "Marin",
        "most loyal Saint to Athena",

    ]

    var optionB = [
        "Scarlet Needle",
        "Shun",
        "Kanon",
        "Pegasus",
        "Cassios",
        "the man who is almost a god",
    ]

    var optionC = [
        "Sacred Sword Excalibur",
        "Seiya",
        "Sigfired",
        "Ikki",
        "Sagittarius",
        "most powerful saint"
    ] 
    
    var correctAnswers = [
        "Crystal Wall",
        "Seiya",
        "Kanon",
        "Shiryu",
        "Cassios",
        "the man who is almost a god",
    ]
    
    $('#tryAgain').click(function() {
        location.reload();
    });

    
    
})

