
//////////////////// jQuery Wrappers /////////////////////////////////

var rodLeftJq = $('#rodLeft')
var rodMiddleJq = $('#rodMiddle')
var rodRightJq = $('#rodRight')

var selectorBoxJq = $('#selectorBox')
var turnCounterJq = $('#turnCountVal')
var discCacheJq = $('#discCache')
var winCounterJq = $('#scoreCounterVal')

var leftAreaJq = $('leftSelectArea')
var rightAreaJq = $('rightSelectArea')

// AS - remove commented out code

var discObjects = rodLeftJq.children()


//////////////////// Global Variables /////////////////////////////////
var currentTurnCount = 0
var currentWinCount = 0

var toWinAmount = 3

//////////////////// Detach Extra Discs and Selector ////////////////////
discObjects.eq(3).detach()
discObjects.eq(4).detach()
selectorBoxJq.detach()


//////////////////// Function to move Disc with Logic /////////////////
function AddRemoveDisc() {
  // AS - indent the body of functions
  var currentRod = $(this)
  var discOnTop = $(this).children().eq(0)
  var discWeight = discOnTop.attr('data-weight')
  var discInCache = discCacheJq.children()
  var discCacheWeight = discInCache.eq(0).attr('data-weight')

  if (discInCache.length === 0) {
    discOnTop.prependTo(discCacheJq)
    document.getElementById('beep1').play()
  } else if (discCacheWeight < discWeight || currentRod.children().length === 0) {
    // AS - put in two conditions instead of repeating the code
    discInCache.prependTo(currentRod)
    document.getElementById('beep2').play()
    addTurnCounter()
  } else {
    document.getElementById('errorBeep').play()
    alert("Invalid move.")
  }

  winCondition(toWinAmount)
}


//////////////////// 'On-Click' Events of Rod Divs ///////////////////
rodLeftJq.on("click", AddRemoveDisc)
rodMiddleJq.on("click", AddRemoveDisc)
rodRightJq.on("click", AddRemoveDisc)

//////////////////// Win Condition ///////////////////////////////////
function winCondition(toWinAmountNum) {
  // AS - use consistent indentation and semicolons
  // Since the bodies of the if statements are the same, you can do something
  // like the below. I would also abstract that if condition to be elsewhere
  if (rodMiddleJq.children().length === toWinAmountNum ||
      rodRightJq.children().length === toWinAmountNum  ||
      (currentWinCount > 0 && rodLeftJq.children().length === toWinAmountNum)
  ) {
    setTimeout(function() {
      document.getElementById('winBloop').play()
      alert("You Won!")
      turnCounterJq.text(0) }, 5)
    addWinCounter()
  }
}

//////////////////// Turn Counter ///////////////////////////////////
function addTurnCounter() {
  currentTurnCount += 1
  turnCounterJq.text(currentTurnCount)
}

//////////////////// Win Counter ////////////////////////////////////
function addWinCounter() {
  currentWinCount += 1
  winCounterJq.text(currentWinCount)
}


//////////////////// Play Intro Music ///////////////////////////////
document.getElementById('introBloop').play()

// AS - Use consistent spacing between code blocks
////////////////// Disc Setter ////////////////////////////////////
function setDisc() {
  // AS - you could reconfigure your code to something like this
  // which would make any number of discs work and be more DRY
  // You could also draw your elements originally in JQuery
  // so that you don't have to hardcode them on the home page.
  // you could pick a random color to have differentiation there.
  var numDiscs = $('#userInput').val()
  discObjects.detach()
  for (var i = numDiscs; i >= 0; i--) {
    discObjects.eq(i).prependTo(rodLeftJq)
  }
  turnCounterJq.text(0)
  $('#numOfDiscsVal').text(numDiscs)
}

////////////////// Run Disc Setter on User Input ////////////////////
$('#userInput').on('input', function() {
  setDisc()
})

$('#form').submit(function(event) {
  event.preventDefault();
})
