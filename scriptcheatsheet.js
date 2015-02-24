// // The format for selecting elements is:
// $("<element name, class, id, or XPath>") 
// // <!-- Here are some examples: -->
	$("p")
	$(".main-nav")
	$("ul li")

// // This snippet ensures that your code doesn't run until your
// // document fires a ready event
// $(document).ready()
$(document).ready(
  //Code that executes when the document is ready
  function(){
    alert('The document is ready, sah!');
  }
);

// Anonymous functions are another way to write functions that makes them a "first- class citizen" data type meaning they can be:
// given as an argument to a function (yes, a function taking a function)
// returned by a function or block of code
// assigned to a variable

//Example of an anonymous function
// function(){
//   alert("I am anonymous!");
// }
// Anonymous functions can be stored in variables:
var my_anon_func = function(){ alert("Har!"); }

// Anonymous functions are often used in callbacks, an anonymous function supplied to another
// function to be run when that function is done running

// Exampe: Define an anonymous function called someOtherFunction
var someOtherFunction = function(){ alert('hello world'); }
// Declare a regular or anonymous function that takes another
// function as an argument, does something,
// then runs that other function
function someRunner(anyFunction){ console.log(2+2); 
	anyFunction(); }
// Call the regular function, supplying the initial
// anonymous function as an argument
someRunner(someOtherFunction);

// To hide the body...
$("body").hide();

//To show the body...
$("body").show();

//To fade out section one (with class, section-one), with speed adjustment
$("#section-one").fadeOut(1000);
//To fade in section one (with class, section-one)
$("#section-one").fadeIn();

//To slide up a section with speed adjustment
$("#section-one").slideUp(1000);
//To slide down a section with speed adjustment
$("#section-one").slideDown(4000);


//To animate CSS properties...
$(".my-element").animate( {
  opacity: 0.25,
  width: 70%
} , 2000 );

// To monitor an HTML element for the click event and then fire a callback function with some code:
$("ul li a").click(
  function(){
    alert('imclicked!');
  }
);






