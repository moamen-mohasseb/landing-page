/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const ulP=document.querySelector("#navbar__list");
const sections= document.querySelectorAll("section");
function addNavBar() {
for(let sec of sections)
{
    let newli=document.createElement("li");
    let newLink=document.createElement("a");
    newLink.setAttribute("class","menu__link");
    newLink.textContent=sec.id;
    newLink.setAttribute("href",`#${sec.id}`);
    newli.appendChild(newLink);
    ulP.appendChild(newli);
}
}
function getActiveSegment() {
var posi=0;
for (let section of sections) {
        let pos = section.getBoundingClientRect();
        posi=Math.round(Math.abs(pos.top)/Math.abs(pos.height));
        if(posi>=sections.length)
        	{posi=posi-1;}
        if(pos.top>0)
        	{posi=0;}
        return posi;
}
}
function setActive() {
	
	window.addEventListener("scroll", function(){
	let isScrolling=0;
	ulP.style.display = "inline";
		// Clear our timeout throughout the scroll
	//window.clearTimeout( isScrolling );

	// Set a timeout to run after scrolling ends
	isScrolling = setTimeout(function() {

		// Run the callback
		ulP.style.display = "none";
		},10000);
		let i=getActiveSegment();
		let navLink=ulP.querySelectorAll("a");
		for(let index=0;index<sections.length;index++)
   {
	sections[index].classList.remove("your-active-class");
	navLink[index].classList.remove("active__link");
   }
		sections[i].classList.add("your-active-class");
		navLink[i].classList.add("active__link");
	});
}
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
addNavBar();

setActive();
