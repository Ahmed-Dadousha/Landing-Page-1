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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

document.addEventListener("DOMContentLoaded" , () => {
    // alert(window.innerHeight + " " + window.innerWidth)
    //getting all sections
    const sections = document.querySelectorAll("section");
    //Building Nav menue
    function buildMenu(){
        const ul = document.getElementById("navbar__list");
        const nav = document.querySelector(".navbar__menu");
        nav.style.backgroundColor = "black";
            for(const section of sections){
                const li = document.createElement("li");
                li.id = `${section.getAttribute("id")}`;
                //setting css for each li element
                li.innerHTML = `<a href="" >${section.getAttribute("data-nav")}</a>`;
                li.style.cssText = `
                padding:20px;
                font-size:15pt;
                text-decoration:none;
                cursor:pointer;
                `;
                li.firstElementChild.style.cssText = `
                text-decoration:none;
                color:white;
                `;

                
                //Mouse over event
            li.onmouseover = () => {
                li.style.color = "#ffcc00";
                li.style.backgroundColor = "gray"
                li.firstElementChild.style.color = "#ffcc00";
            }
            //Mouse leave event
            li.onmouseleave = () =>{
                li.style.color = "black";
                li.style.backgroundColor = "black";
                li.firstElementChild.style.color = "white";
        }
            //click event
            li.firstElementChild.addEventListener( "click",(e) =>{
                //Prevent default event 
                e.preventDefault();

                //scroll to the section
                section.scrollIntoView({behavior:"smooth"});

                //Adding active class when link is clicked
                section.classList.add("your-active-class");
            });
        ul.appendChild(li);
    }
    
    }
    //Set CSS class active state when the element is in the viewport
    function setActiveClass(){
        //Scroll Event
        document.addEventListener("scroll" , () => {
            for(const section of sections){
                const rect = section.getBoundingClientRect();

                const li = document.querySelector(`li#${section.id}`)
                
                if(window.innerWidth < 420){
                     //Check if the section is in viewport in mobile devices
                if(rect.top >= 0 && rect.left >= 0 && rect.right <= (window.innerWidth || document.documentElement.clientWidth)){
                    section.classList.add("your-active-class")
                    li.style.color = "#ffcc00";
                    li.style.backgroundColor = "gray"
                    li.firstElementChild.style.color = "#ffcc00"
            }
                else{
                    section.classList.remove("your-active-class");                                        /*if the section is in viewport its top and left are always greater than or equal zero.and  its distance from the right is less than or equal to the width of the viewport,and ids distance from the bottom is less than or equal to the height of the viewport. */
                    li.style.color = "black";
                    li.style.backgroundColor = "black";
                    li.firstElementChild.style.color = "white";
                }

                }
                else{
                                    //Check if the section is in viewport in bigger screens
                if(rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)  && rect.right <= (window.innerWidth || document.documentElement.clientWidth)){
                    section.classList.add("your-active-class")
                    li.style.color = "#ffcc00";
                    li.style.backgroundColor = "gray"
                    li.firstElementChild.style.color = "#ffcc00"
            }
                else{
                    section.classList.remove("your-active-class");                                        /*if the section is in viewport its top and left are always greater than or equal zero.and  its distance from the right is less than or equal to the width of the viewport,and ids distance from the bottom is less than or equal to the height of the viewport. */
                    li.style.color = "black";
                    li.style.backgroundColor = "black";
                    li.firstElementChild.style.color = "white";
                }
                }

            }
        });
    }

    //calling the functions
    buildMenu();

    setActiveClass();
});


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


