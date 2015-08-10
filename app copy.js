///////////////////// Dropdown menu for smaller devices


//Create a select and append to #menu
var $select = $("<select></select>");
$("#menu").append($select);

//Cycle over menu links
$("#menu").each(function(){
	var $anchor = $(this);
	// Create an option
	var $option = $("<option> </option>");

	//Option's value is the href
	$option.val($anchor.attr("href"));
	//Option's text is the text of the link
	$option.text($anchor.text());
	//Append option to select
	$select.append($option);
});

//Create button
var $button = $("<button>Go</button>");
$("#menu").append($button);
$button.click(function() {
	window.location = $select.val();
});

///////////////////// Start overlay    

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>")

// An image to overlay
$overlay.append($image);

// A caption to overlay
$overlay.append($caption);

//Add overlay
$("body").append($overlay);



//1. Capture the click event on a link to an image
$("#imageGallery a").click(function(event){
	event.preventDefault();	
	var imageLocation = $(this).attr("href");

//Update overlay with the image linked in the link
	$image.attr("src", imageLocation);

// get childs alt attribute and set caption
	var captionText = $(this).children("img").attr("alt");
	$caption.text(captionText);
// Show the overlay.
	$overlay.show();
});
  //Get child's alt attribute and set caption

$overlay.click(function(){
	$(this).hide();
});
//When overlay is clicked
  //Hide the overlay