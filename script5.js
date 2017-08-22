
//////////////////// jQuery Variables ////////////////////

var rodLeftJq = $('#rodLeft')
var rodMiddleJq = $('#rodMiddle')
var rodRightJq = $('#rodRight')

var selectorBoxJq = $('#selectorBox')
var turnCounterJq = $('#turnCountVal')
var discCacheJq = $('#discCache')

// Create Array dsicObjects of jQuery DISC objects
var discObjects = rodLeftJq.children()


//////////////////// Global Variables ////////////////////
var currentTurnCount = 0


//////////////////// Hide Extra Discs and Selector ////////////////////
discObjects.eq(3).hide()
discObjects.eq(4).hide()
selectorBoxJq.hide()


//////////////////// 'On-Click' of Rod Divs ////////////////////
rodLeftJq.on("click", function() {

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

  winAlert();
})

rodMiddleJq.on("click", function() {

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

  winAlert();
})

rodRightJq.on("click", function() {

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

  winAlert();
})


//////////////////// Win Condition ////////////////////
function winAlert() {
  if (rodMiddleJq.children().length === 3) {
    setTimeout(function() { alert("You Won!") }, 5)
  } else if (rodRightJq.children().length === 3) {
    setTimeout(function() { alert("You Won!") }, 5)
  }
}


//////////////////// Turn Counter ////////////////////
function addTurnCounter() {
  currentTurnCount += 1
  turnCounterJq.text(currentTurnCount)
}






//////////////////// To Do ////////////////////
// >>>>>>> Refactor this code <<<<<<<< //
// >>>>>>> Fix div clickable area <<<< //
// >>>>>>> Fix Cache div label <<<<<<< //
// >>>>>>> Re-arrange Sizes <<<<<<<<<< //
// >>>>>>> Adjust Game Board Size <<<< //
// >>>>>>> Win Counter <<<<<<<<<<<<<<< //
// >>>>>>> Reset Game Button <<<<<<<<< //
// >>>>>>> Add In Selector Box <<<<<<< //
// >>>>>>> Add In Sounds <<<<<<<<<<<<< //
// >>>>>>> Option to Add More Discs << //


//////////////////// Issues ////////////////////

// When clicked on an empty rod with empty cache, its putting an empty children into it //
// Also, the missing discs are still in there //
// Also, the turn counter goes even if you put the disc back (Oh well) //
