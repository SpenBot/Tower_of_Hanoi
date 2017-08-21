
///////////////// jQuery Variables //////////////////////
var disc1Var = $('#disc1')
var disc2Var = $('#disc2')
var disc3Var = $('#disc3')

var selectorBoxVar = $('#selectorBox')

var rodLeftVar = $('#rodLeft')
var rodMiddleVar = $('#rodMiddle')
var rodRightVar = $('#rodRight')

var turnCountValVar = $('#turnCountVal')

var discCache = null;


/////////////// Assign each DISC variable with property "WEIGHT" ///////////////

disc1Var.weight = 1;
disc2Var.weight = 2;
disc3Var.weight = 3;




///////assign each rod as an object, give it a property discsArray///////
  /// ***** the disc on top is last child of array ****** //

//////on.mouseover function of div, show selector as white, unless selector is already there///////
//////on.click function of div, move selector + pop lastChild of discArray in Object////////
  //// ***** if discCache === true, .push discArray ////
  //// if lastChild of distination rod is > discCache, place disc at bottom ///

//////on.click function of body, hide selector//////

///// assign all discs to rod 1 /////
///// hide selector at start ////
