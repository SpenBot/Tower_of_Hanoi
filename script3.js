
//////////////////// jQuery Variables ////////////////////

var rodLeftJq = $('#rodLeft')
var rodMiddleJq = $('#rodMiddle')
var rodRightJq = $('#rodRight')

var selectorBoxJq = $('#selectorBox')
var turnCountValJq = $('#turnCountVal')
var discCacheJq = $('#discCache')

// Create Array dsicObjects of jQuery DISC objects
var discObjects = rodLeftJq.children()


//////////////////// Hide Extra Discs and Selector ////////////////////
discObjects.eq(3).hide()
discObjects.eq(4).hide()
selectorBoxJq.hide()


//////////////////// 'On-Click' of Rod Divs ////////////////////
  // if CACHE empty, add rod.child[0] to CACHE //
  // if CACHE NOT empty, add cache to rod //
rodLeftJq.on("click", AddRemoveDisc())
rodMiddleJq.on("click", AddRemoveDisc())
rodRightJq.on("click", AddRemoveDisc())


//////////////////// Define Function: Add or Remove Disc ////////////////////
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
  } else if (currentRod.children().length === 0) {
    discInCache.children().prependTo(currentRod)
  } else {
    return (alert("invalid"))
  }

}































///////// define function: compare weight of disc and return TRUE/FALSE //////
// function compareWeight () {
//   if (discCacheJq.children().eq(0).attr('data-weight') )
// }





/////// Right now, when clicked on an empty rod, its putting an empty children into it. It doenst break anything but probably not good./////

////// Also, the missing discs are still in there //////////////




/////// >>>> fix rod divs, so they can be clicked properly <<<<< //////

//////// USE DATA TAGS for weight
