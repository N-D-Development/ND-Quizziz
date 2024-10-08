// ADD QUESTIONS HERE BY COPYING THE ARRAY
// ONLY SET ONE ANSWER TRUE OR THE SYSTEM WILL BUG OUT

const questions = [
  {
    "Question": "Who Is The Owner of N&D Development?",
    "Answer": [
      ["Nico", "f"],
      ["Jack", "f"],
      ["Ducky", "t"],
      ["Doggo", "f"],
    ],
  },
  {
    "Question": "Who Is The Co-Owner of N&D Development?",
    "Answer": [
      ["Nico", "f"],
      ["Jack", "t"],
      ["Ducky", "f"],
      ["Doggo", "f"],
    ],
  },
  "Question": "Can Nico Debadge Cars?",
    "Answer": [
      ["Yes", "t"],
      ["No", "f"],
      ["Ducky's Job", "f"],
      ["Jack's Job", "f"],
    ],
  },
  "Question": "How Many Sales Do We Have?",
    "Answer": [
      ["0", "t"],
      ["15+", "f"],
      ["70+", "f"],
      ["150+", "f"],
    ],
  },
];
var c = 0;
var end = questions.length;

function ask() {
  if (c >= questions.length) {
    endGame();
  } else { 
    $(".top").html(questions[c].Question);
    $(`div[name="red"]`).html(questions[c].Answer[0][0]);
    $(`div[name="green"]`).html(questions[c].Answer[1][0]);
    $(`div[name="blue"]`).html(questions[c].Answer[2][0]);
    $(`div[name="yellow"]`).html(questions[c].Answer[3][0]); 
  }
}

$(`div[name="red"],div[name="blue"],div[name="yellow"],div[name="green"]`).click(function() {
  if (c >= questions.length) {
    
  } else { 
    var req = $(this).html();
    var ans;
    questions[c].Answer.forEach(function(i) {
      if (i[1] == "t") {
        ans = i[0];
      }
    });
    if (ans == req) {
      reveal(true);
    } else {
      reveal(false);
      end--;
    }
    c++;
  }
});

function reveal(t) {
  if (t) {
    $("#query div").html("Correct!");
    $("#query").css({
      "background-color": "green",
    });
  } else {
    $("#query div").html("Incorrect");
    $("#query").css({
      "background-color": "red",
    });
  }
  $("#game").addClass("hidden");
  $("#query").removeClass("hidden");
}

$("#query").click(function() {
  $(this).addClass("hidden");
  $("#game").removeClass("hidden");
  ask();
})

function endGame() {
  var result = (+end / questions.length).toFixed(2).toString().replace("0.", "").replace(".", "");
  $(`div[name="percent"]`).html("Accuracy: " + result + "%");
  $("#game").addClass("hidden");
  $("#result").removeClass("hidden");
}

$(`div[name="bottom"] button`).click(function() {
  c = 0;
  end = questions.length;
  ask();
  $("#result").addClass("hidden");
  $("#game").removeClass("hidden");
});

ask();
