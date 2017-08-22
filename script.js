
//////////////////// jQuery Variables /////////////////////////////////

var rodLeftJq = $('#rodLeft')
var rodMiddleJq = $('#rodMiddle')
var rodRightJq = $('#rodRight')

var selectorBoxJq = $('#selectorBox')
var turnCounterJq = $('#turnCountVal')
var discCacheJq = $('#discCache')
var winCounterJq = $('#scoreCounterVal')

// Create Array dsicObjects of jQuery DISC objects
var discObjects = rodLeftJq.children()


//////////////////// Global Variables /////////////////////////////////
var currentTurnCount = 0
var currentWinCount = 0


//////////////////// Hide Extra Discs and Selector ////////////////////
discObjects.eq(3).hide()
discObjects.eq(4).hide()
selectorBoxJq.hide()


//////////////////// Function to move Disc with Logic /////////////////
function AddRemoveDisc() {

var currentRod = $(this)
var discOnTop = $(this).children().eq(0)
var discWeight = discOnTop.attr('data-weight')
var discInCache = discCacheJq.children()
var discCacheWeight = discInCache.eq(0).attr('data-weight')

if (discInCache.length === 0) {
  discOnTop.prependTo(discCacheJq)
} else if (discCacheWeight < discWeight) {
  discInCache.prependTo(currentRod)
  addTurnCounter()
} else if (currentRod.children().length === 0) {
  discInCache.prependTo(currentRod)
  addTurnCounter()
} else {
  return (alert("Invalid move."))
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
    setTimeout(function() { alert("You Won!") }, 5)
    addWinCounter()
  } else if (rodRightJq.children().length === 3) {
    setTimeout(function() { alert("You Won!") }, 5)
    addWinCounter()
  } else return
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










//////////////////// To Do //////////////////////////////////////////
// >>>>>>> Play Again Game Button <<<<<<<<< //


//////////////////// Additional Features ////////////////////////////
// >>>>>>> Fix div clickable area <<<< //
// >>>>>>> Fix Cache div label <<<<<<< //
// >>>>>>> Adjust Game Board Size <<<< //
// >>>>>>> Add In Selector Box <<<<<<< //
// >>>>>>> Add In Sounds <<<<<<<<<<<<< //
// >>>>>>> Option to Add More Discs << //


//////////////////// Issues /////////////////////////////////////////
// When clicked on an empty rod with empty cache, its putting an empty children into it //
// Also, the missing discs are still in there //
// Also, the turn counter goes even if you put the disc back (Oh well) //
