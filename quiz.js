var newHeight = document.getElementById("height");
var newRows = document.getElementById("asterisk");
var newSubmit = document.getElementById("submit");
// this is my tree object, it will accept two keys that are defined later as height and character
var tree = {}

// this is an event listener for the submit function
newSubmit.addEventListener("click", function ( event ) {
  // this takes the value entered in the text box that says height
  var inputHeight = newHeight.value;
  // this takes the value entered in the text box that says enter * here
  var inputRows = newRows.value;
  //this is one of the keys to the object tree, it stores the value entered and passes it to the function
  tree.height = inputHeight;
  //this is the other key to the object tree, it stores the value entered and passes it to the function as well
  tree.character = inputRows;
  // this is calling the function
  growTree(tree);
} )

// function submitOnEnter(inputElement, event) {
//   if (event.keyCode === 13) {
//     inputElement.form.submit();
//   }
// }

// This is running the function, obj is just a "variable", it's an anonymous way of running the code(Assigning a number instead of a name at a medical clinic)
function growTree(obj) {
  // this is a variable that will change dictacted by what's entered in to the key named character
  var row = obj.character;
  // this is a string that will be added to the dom
  var space = " ";
  // this variable takes what is entered into the object key(obj.height) and subtracts one from the total
  var spaces = obj.height - 1;
  // this is a repeat so that we can add the string space and tell how many spaces to add to it
  var actualSpaces = space.repeat(spaces);

  // Wrote a for loop that is based off the input of the obj.height
  for (var i = 0; i < obj.height; i++) {
    // this logs the amount of spaces that start the line + how many times the character will be shown
    console.log(actualSpaces + row);
    // the row is redifined each time thru the loop by the += sign then adds two more characters to what's existing
    row += obj.character + obj.character;
    // spaces get redifined by subtracting one from itself each time thru the loop to keep the spacing proper
    spaces -= 1;
    // the if statement is there so an error message doesn't appear, it says if spaces is greater than equal to zero(which is determined by actualSpaces) to continue to run the loop, otherwise it will stop it
    if (spaces >= 0) {
      actualSpaces = space.repeat(spaces);
    }
  }
}

