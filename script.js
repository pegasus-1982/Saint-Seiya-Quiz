$(document).ready(function() {
    $("#startGame").click(function(){
      $("#startGame").hide();   
      $("#Question1").show();
      $(".score").show();
      
      var timeEl = document.querySelector(".time");
      var mainEl = document.getElementById("main");
      var secondsLeft = 20;
      
      function setTime() {
        var timerInterval = setInterval(function() {
          secondsLeft--;
          timeEl.textContent = secondsLeft + " Seconds left";
          
          if(secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
          }
        }, 1000);
      }
      
      function sendMessage() {
        timeEl.textContent = " ";
        var imgEl = document.createElement("img");
        imgEl.setAttribute("src", "https://static.wikia.nocookie.net/saintseiya/images/c/c5/Athena_1.png/revision/latest/scale-to-width-down/325?cb=20130630213200");
        imgEl.setAttribute("style", "background-color:black");
        imgEl.setAttribute("position", "center top");
        mainEl.appendChild(imgEl);
      }
      
      setTime();
    })
    
    

    
    
    
  })
  


var count = 0;
var incrementEl = document.querySelector("#correctAnswerCount");
var countEl = document.querySelector("#count");

function setCounterText() {
  countEl.textContent = count;
}

incrementEl.addEventListener("click", function() {
  count++;
  setCounterText();
  
});

  $(".goto2").on("click", function(){
    $("#Question1").hide();
    $("#Question2").show();
  })
  
var count = 0;
var incrementEl2 = document.querySelector("#correctAnswerCount2");
var countEl = document.querySelector("#count");

function setCounterText() {
  countEl.textContent = count;
}

incrementEl2.addEventListener("click", function() {
  count++;
  setCounterText();
  
}); 
  
  $(".goto3").on("click", function(){
    $("#Question2").hide();
    $("#Question3").show();
  
  })
  
  var count = 0;
  var incrementEl3 = document.querySelector("#correctAnswerCount3");
  var countEl = document.querySelector("#count");
  
  function setCounterText() {
    countEl.textContent = count;
  }
  
  incrementEl3.addEventListener("click", function() {
    count++;
    setCounterText();
    
  }); 

  $(".goto4").on("click", function(){
    $("#Question3").hide();
    $("#Question4").show();
  })

  var count = 0;
  var incrementEl4 = document.querySelector("#correctAnswerCount4");
  var countEl = document.querySelector("#count");
  
  function setCounterText() {
    countEl.textContent = count;
  }
  
  incrementEl4.addEventListener("click", function() {
    count++;
    setCounterText();
    
  }); 

  
  $(".goto5").on("click", function(){
    $("#Question4").hide();
    $("#Question5").show();
  })

  var count = 0;
  var incrementEl5 = document.querySelector("#correctAnswerCount5");
  var countEl = document.querySelector("#count");
  
  function setCounterText() {
    countEl.textContent = count;
  }
  
  incrementEl5.addEventListener("click", function() {
    count++;
    setCounterText();
    
  }); 
  
  $(".goto6").on("click", function(){
    $("#Question5").hide();
    $("#Question6").show();
  })


  var count = 0;
  var incrementEl6 = document.querySelector("#correctAnswerCount6");
  var countEl = document.querySelector("#count");
  
  function setCounterText() {
    countEl.textContent = count;
  }
  
  incrementEl6.addEventListener("click", function() {
    count++;
    setCounterText();
    
  }); 




 









