export default class Accordion {

    showAccordionAnswer(ans, arrow) {
        ans.classList.toggle('hidden');
            ans.previousElementSibling.lastElementChild.classList.toggle('rotate-180');
            switch (arrow.getAttribute('stroke')) {
                case '#5267DF':
                    arrow.setAttribute('stroke', '#E82f29');
                    break;
            
                default:
                    arrow.setAttribute('stroke', '#5267DF');
                    break;
            }
    }
}