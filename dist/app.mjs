import Hamburger from "./modules/Hamburger.mjs";
import FeatureTab from "./modules/FeatureTab.mjs";
import Accordion from "./modules/Accordion.mjs";
import Contact from "./modules/Contact.mjs";

const backdrop = document.querySelector('#modalBackdrop');
const hamburger = new Hamburger();

// FEATURE TABS CONVERTED TO ARRAY
const featureTabs = document.querySelectorAll('#featureTabs>li>span');
const tab = new FeatureTab();

// FEATURE TAB CONTENTS
const tabContents = document.querySelector('#tabContents').children;

// ACCORDION
const accordionItems = document.querySelector('#accordionContainer').children;
const answerContainer = new Accordion();
const accordionAnswers = Array.from(accordionItems); 

// CONTACT FORM
const contactForm = document.querySelector('#contactForm');
const errorContainer = document.querySelector('#formErrorContainer');
const errorMessage = document.querySelector('#errorMessage');
const email = new Contact();


// HAMBURGER MENU EVENT LISTENERS
hamburgerIcon.addEventListener('click', function(){
    hamburger.openModal(backdrop);
});

modalClose.addEventListener('click', function(){
    hamburger.closeModal(backdrop)
});

// FEATURE TABS EVENT LISTENERS
featureTabs.forEach(function(tabItem){
    tabItem.addEventListener('click', function(){

        featureTabs.forEach(function(tabItem){
            // Deselect tab if not clicked
            tab.deselectTab(tabItem);
        })

        if(this === tabItem) {
            // Select tab if clicked
            tab.selectTab(this, tabContents);
        }

    }, true);
})

// HIDE|SHOW ACCORDION ANSWERS
accordionAnswers.forEach(function(answer){

    if(answer.hasAttribute('id')){
        const accordionArrow = answer.previousElementSibling.lastElementChild.firstChild.firstChild;

        answer.previousElementSibling.addEventListener('click', function(){
            answerContainer.showAccordionAnswer(answer, accordionArrow);
        })
    }
})

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const regex_pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const formValue = contactForm.email.value;
    email.validateEmail(regex_pattern, formValue, errorContainer, errorMessage);
})