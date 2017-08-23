
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

// var numOfDiscsJq = $('#numOfDiscsVal')

// var DiscNumInput = $('#userInput')

var discObjects = rodLeftJq.children()


//////////////////// Global Variables /////////////////////////////////
var currentTurnCount = 0
var currentWinCount = 0


//////////////////// Detach Extra Discs and Selector ////////////////////
discObjects.eq(3).detach()
discObjects.eq(4).detach()
selectorBoxJq.detach()


//////////////////// Function to move Disc with Logic /////////////////
function AddRemoveDisc() {

var currentRod = $(this)
var discOnTop = $(this).children().eq(0)
var discWeight = discOnTop.attr('data-weight')
var discInCache = discCacheJq.children()
var discCacheWeight = discInCache.eq(0).attr('data-weight')

if (discInCache.length === 0) {
  discOnTop.prependTo(discCacheJq)
  document.getElementById('beep1').play()
} else if (discCacheWeight < discWeight) {
  discInCache.prependTo(currentRod)
  document.getElementById('beep2').play()
  addTurnCounter()
} else if (currentRod.children().length === 0) {
  discInCache.prependTo(currentRod)
  document.getElementById('beep2').play()
  addTurnCounter()
} else {
    document.getElementById('errorBeep').play()
    alert("Invalid move.")
}

winCondition()

}


//////////////////// 'On-Click' Events of Rod Divs ///////////////////
rodLeftJq.on("click", AddRemoveDisc)
rodMiddleJq.on("click", AddRemoveDisc)
rodRightJq.on("click", AddRemoveDisc)

//////////////////// Win Condition ///////////////////////////////////
function winCondition() {
  if (rodMiddleJq.children().length === 3) {
    setTimeout(function() {
      document.getElementById('winBloop').play()
      alert("You Won!");
      turnCounterJq.text(0) }, 5)
    addWinCounter()
  } else if (rodRightJq.children().length === 3) {
    setTimeout(function() {
      document.getElementById('winBloop').play()
      alert("You Won!");
      turnCounterJq.text(0) }, 5)
    addWinCounter()
  } else if ( (currentWinCount > 0) && (rodLeftJq.children().length === 3) ) {
        setTimeout(function() {
          document.getElementById('winBloop').play()
          alert("You Won!");
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









////////////////// Disc Setter ////////////////////////////////////
function setDisc() {

  if ( $('#userInput').val() == 4 ) {
    discObjects.detach()
    discObjects.eq(3).prependTo(rodLeftJq)
    discObjects.eq(2).prependTo(rodLeftJq)
    discObjects.eq(1).prependTo(rodLeftJq)
    discObjects.eq(0).prependTo(rodLeftJq)
    currentTurnCount = 0
    turnCounterJq.text(currentTurnCount)
    $('#numOfDiscsVal').text("4")
  } else if ( $('#userInput').val() == 5 ) {
    discObjects.detach()
    discObjects.eq(4).prependTo(rodLeftJq)
    discObjects.eq(3).prependTo(rodLeftJq)
    discObjects.eq(2).prependTo(rodLeftJq)
    discObjects.eq(1).prependTo(rodLeftJq)
    discObjects.eq(0).prependTo(rodLeftJq)
    currentTurnCount = 0
    turnCounterJq.text(currentTurnCount)
    $('#numOfDiscsVal').text("5")
  } else if ( $('#userInput').val() == 3 ) {
    discObjects.detach()
    discObjects.eq(2).prependTo(rodLeftJq)
    discObjects.eq(1).prependTo(rodLeftJq)
    discObjects.eq(0).prependTo(rodLeftJq)
    currentTurnCount = 0
    turnCounterJq.text(currentTurnCount)
    $('#numOfDiscsVal').text("3")
  }
  //   else {
  //     alert("Enter in 3, 4, or 5 to change discs.")
  // }

}

////////////////// Run Disc Setter on User Input ////////////////////
$('#userInput').on('input', function() {
  setDisc()
})

$('#form').submit(function(event) {
  event.preventDefault();
})
