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
// define ul element to search for navbar
const ulP=document.querySelector("#navbar__list");
// get sections from page
const sections= document.querySelectorAll("section");
//get main position to add button 
const mainBtn=document.querySelector("main");
// add button (hyperlink) to return back up the page
const btn=document.createElement("a");
/**
* @description build navigation bar by creating list elements then add hyper
links to them give them class name and href.
* @returns nothing just ad navigation bar
*/
function addNavBar() {
for(let sec of sections){
    let newli=document.createElement("li");
    let newLink=document.createElement("a");
    newLink.setAttribute("class","menu__link");
    newLink.textContent=sec.id;
    newli.appendChild(newLink);
    ulP.appendChild(newli);
    newLink.addEventListener("click", ()=>{
    sec.scrollIntoView({behavior: "smooth"});
   });
  }
}
/**
* @description add hyperlink which appear when user flood the page.
* @returns nothing just add hyperlink bar
*/
function addBtn() {
	//add class name , href ,and text to button
	btn.setAttribute("class","up__button");
    btn.addEventListener("click", ()=>{
    sections[0].scrollIntoView({behavior: "smooth"});
   });
    btn.textContent="up page";
    //
    mainBtn.appendChild(btn);
    //make button invisable
    btn.style.display="none";
}
/**
* @description get active segment position by the ratio between
* height and top. as height for all segment the same and top come from 0 to the end of page
* we start from position  top =0 then we get the segment from their devision.
* @returns active segment index
*/
function getActiveSegment() {
let activesegment=0;
btn.style.display="none";
for (let section of sections) {
	// get current position
        let pos = section.getBoundingClientRect();
        //get active segment from the  result of the ratio between height and top.
        //we get absluote values no need for negative value
        activesegmen=Math.round(Math.abs(pos.top)/Math.abs(pos.height));
        //extract all top position <0
        if(pos.top>0){
        		activesegmen=0;
        	}
        //return active segment
        return activesegmen;
    }
}
/**
* @description lear our timeout throughout the scroll ,Set a timeout to run after scrolling ends by 5seconds
*  get current segment by calling getActiveSegment() function
*  get all sections navigator
*  remove all active classes from segments and navigation bar in the sametime
*  make in view segment and navigation bar active
* @returns nothing just add hyperlink bar
*/
function setActive() {
	let isScrolling=0;
	window.addEventListener("scroll", function(){
	// Clear our timeout throughout the scroll
	window.clearTimeout( isScrolling );
    ulP.style.display = "inline";
	// Set a timeout to run after scrolling ends
	isScrolling = setTimeout(function() {
		// Run the callback wait for 5 seconds
		ulP.style.display = "none";
		},5000);
	 //get current segment by calling getActiveSegment() function 
		let i=getActiveSegment();
		//if the active segment flood the page
		if(i===sections.length){
			btn.style.display="inline";
			i=i-1;
		}
		// get all sections navigator
		let navLink=ulP.querySelectorAll("a");
		// remove all activ styles from segments and navigation bar in the sametime
		for(let index=0;index<sections.length;index++) {
			sections[index].classList.remove("your-active-class");
	        navLink[index].classList.remove("active__link");
        }
        //make in view segment and navigation bar active
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
addNavBar();

// Set sections as active
setActive();

// add button when user flod of the page
addBtn();

