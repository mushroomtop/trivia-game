

// This is an array of all the questions and all the answers both wrong and right
var array = {
    questions: ["What is 1+1", "What is 3x3", "What is 10/2", "What is 9999+9999", "What is 12x12"
    ],
    correctAnswers: ["2", "9", "5", "199998", "144"
    ],
    wrongAnswer1: ["3","6","6","i give up","123"
    ],
    wrongAnswer2: ["4", "22","34","this is too hard","321"
    ],
    wrongAnswer3: ["5", "9999999","12","but why though", "213"
    ],

}
// when someone clicks the start button
$(".button").click(function() {
    // hide the start button
    $(this).addClass("hide");
    // unhide the timer
    $(".timer").removeClass("hide");
});

// define variable i
var i=0;
var complete;

// another on click.... 
$(".button").on("click", function() {
//  this function has a for loop in it
do {
    // set this var complete to false
    complete = false;
      // For all of these first gotta reset timer/picturediv
      $(".pictureright").addClass("hide");
      $(".picturewrong").addClass("hide");
    // this are variable is for the interval
    var timeLeft;
    var time = 30;
        // This are the interval
        clearInterval(timeLeft);
        timeLeft = setInterval(decrement, 1000);
        // This makes the timer go down, and also updates the html on the pg to show the timer counting down
            function decrement() {
                time--;
                $(".timer").html("<p> Time Remaining: " + time + " Seconds </p>");
              };
        // This lists question/answers so answer1 is always the correct answer because i dont know how to randomize it
        $(".question").text (array.questions[i]);
        $(".answer1").text (array.correctAnswers[i]);
        $(".answer2").text (array.wrongAnswer1[i]);
        $(".answer3").text (array.wrongAnswer2[i]);
        $(".answer4").text (array.wrongAnswer3[i]);

        // when timer reaches 0 notice shows up
            if (time === 0) {
                clearInterval(timeLeft);
                $(".picturewrong").removeClass("hide");
                $(".picturewrong").append ("<p> The correct answer was: " + array.correctAnswers[i] + "</p>");
                i++;
                complete = setTimeout(function() {
                    complete = true;
                  }, 2000);
                };
                
// This means if u click on the right answer you win
        $(".answer1").click (function() {
            $(".pictureright").removeClass("hide");
            $(".pictureright").append ("<p> Yup </p>");
            clearInterval(timeLeft);
            i++;
            complete = setTimeout(function() {
                complete = true;
              }, 2000);
        });
//This means if u click on any other answer it says your're wrong and the correct answer shows
        $(".answer2").click (function() {
            $(".picturewrong").removeClass("hide");
            $(".picturewrong").append ("<p> The correct answer was: " + array.correctAnswers[i] + "</p>");
            clearInterval(timeLeft);
            i++;
            complete = setTimeout(function() {
                complete = true;
              }, 2000);
         });
         $(".answer3").click (function() {
            $(".picturewrong").removeClass("hide");
            $(".picturewrong").append ("<p> The correct answer was: " + array.correctAnswers[i] + "</p>");
            clearInterval(timeLeft);
            i++;
            complete = setTimeout(function() {
                complete = true;
              }, 2000);
         });
         $(".answer4").click (function() {
            $(".picturewrong").removeClass("hide");
            $(".picturewrong").append ("<p> The correct answer was: " + array.correctAnswers[i] + "</p>");
            clearInterval(timeLeft);
            i++;
            complete = setTimeout(function() {
                complete = true;
              }, 2000);
         });
        } while (complete); 
        })
