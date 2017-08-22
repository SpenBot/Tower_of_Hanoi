
///////////////// jQuery Variables //////////////////////

var rodLeftJq = $('#rodLeft')
var rodMiddleJq = $('#rodMiddle')
var rodRightJq = $('#rodRight')

var selectorBoxJq = $('#selectorBox')
var turnCountValJq = $('#turnCountVal')
var discCacheJq = $('#discCache')

// Create Array dsicObjects of jQuery DISC objects
var discObjects = rodLeftJq.children()

/////////// Hide Extra Discs and Selector ///////////
discObjects.eq(3).hide()
discObjects.eq(4).hide()
selectorBoxJq.hide()

//////////////////// ON-CLICK OF ROD DIV ////////////////////
  // if CACHE empty, add rod.child[0] to CACHE //
  // if CACHE NOT empty, add cache to rod //
rodLeftJq.on("click", function () {
  var discToMove = $(this).children().eq(0)

  if (discCacheJq.children().length === 0) {
    discToMove.prependTo(discCacheJq)
  } else {
    discCacheJq.children().prependTo(rodLeftJq)
  }
})

rodMiddleJq.on("click", function () {
  var discToMove = $(this).children().eq(0)

  if (discCacheJq.children().length === 0) {
    discToMove.prependTo(discCacheJq)
  } else {
    discCacheJq.children().prependTo(rodMiddleJq)
  }
})

rodRightJq.on("click", function () {
  var discToMove = $(this).children().eq(0)

  if (discCacheJq.children().length === 0) {
    discToMove.prependTo(discCacheJq)
  } else {
    discCacheJq.children().prependTo(rodRightJq)
  }
})


















////// on-click of a rod div, if there is an item in the cache, prepend to div
////// if div empty, do nothing
///// if last child0 weight is < cache weight, do nothing







////////// test function, move disc to middle rod //////////
function moveDisc(destination) {
  rodLeftJq.children().eq(0).prependTo(destination)
}


/////// >>>> fix rod divs, so they can be clicked properly <<<<< //////

//////// USE DATA TAGS for weight
//////// Fix the rod elements on each rod, with background-color and FlexBox
