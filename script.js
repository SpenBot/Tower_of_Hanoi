
///////////////// jQuery Variables //////////////////////
var disc1Var = $('#disc1')
var disc2Var = $('#disc2')
var disc3Var = $('#disc3')
var disc4Var = $('#disc4')
var disc5Var = $('#disc5')

var selectorBoxVar = $('#selectorBox')

var rodLeftVar = $('#rodLeft')
var rodMiddleVar = $('#rodMiddle')
var rodRightVar = $('#rodRight')

var turnCountValVar = $('#turnCountVal')

var discCache = null

/////////////// Assign each DISC variable with property "WEIGHT" ///////////////

disc1Var.weight = 1
disc2Var.weight = 2
disc3Var.weight = 3

rodLeftVar.discsArray = []
rodMiddleVar.discsArray = []
rodRightVar.discsArray = []
// consider using .children() on your rod elements, .prepend()


/////////// Hide Extra Discs ///////////
disc4Var.hide()
disc5Var.hide()


//////// USE DATA TAGS for weight ////////////
//////// Use .children of intial left Rod to create an array of jQ objects /////////
/////// use .children(0)
////// use FlexBox on each rod, and push them to the bottom.



//////////// Function to add DISC variables to discsArray of Left Rod //////////
function setRodLeftDiscs (discNumVar) {
    rodLeftVar.discsArray.push(discNumVar)
}

setRodLeftDiscs(disc3Var)
setRodLeftDiscs(disc2Var)
setRodLeftDiscs(disc1Var)

function displayTest () {
  let firstDisc = rodLeftVar.discsArray.eq(0)
  console.log(firstDisc);
  firstDisc.css("background-color", "blue")
}

displayTest()












// console.log(rodLeftVar.discsArray[rodLeftVar.discsArray.length - 1])
// console.log(rodLeftVar.discsArray[0])
// console.log(rodLeftVar.discsArray[1])
// console.log(rodLeftVar.discsArray[2])



// maybe make it into a variable?






// function setRodLeftDisc (discNumVar) {
//   if (rodLeftVar.discsArray === []) {
//     rodLeftVar.discsArray.push(discNumVar)
  // } else if (rodLeftVar.discsArray.last.weight > discNumVar.weight) {
  //   rodLeftVar.discsArray.push(discNumVar)
//   } else {
//     return
//   }
// }

// disc1Var.hide()
// disc2Var.hide()
// disc3Var.hide()















/////// display functions //////////
// function displayLeftDiscs () {
//   if (rodLeftVar.discsArray[2] == true) {
//     rodLeftVar.discsArray.eq(2).css('bottom', '75px')
//   } else {
//     return
//   }
// }
//
// displayLeftDiscs ()

// console.log(rodLeftVar.discsArray.css(''))










// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// var a = fruits.lastIndexOf("Apple");
















//////on.mouseover function of div, show selector as white, unless selector is already there///////
//////on.click function of div, move selector + pop lastChild of discArray in Object////////
  //// ***** if discCache === true, .push discArray ////
  //// if lastChild of distination rod is > discCache, place disc at bottom ///

//////on.click function of body, hide selector//////
