export default class FeatureTab {

    selectTab(dis, tabContents) {
        dis.classList.add('border-red-500');
        dis.classList.remove('border-white');

        Array.from(tabContents).forEach(tabContent => {

            tabContent.classList.remove('flex', 'lg:grid');

            switch(dis.id) {
                case 'tabItem1':
                    tabContents[0].classList.add('flex', 'lg:grid');
                    tabContents[0].classList.remove('hidden');
                    tabContents[1].classList.add('hidden');
                    tabContents[2].classList.add('hidden');
                    break;

                case 'tabItem2':
                    tabContents[1].classList.add('flex', 'lg:grid');
                    tabContents[1].classList.remove('hidden');
                    tabContents[0].classList.add('hidden');
                    tabContents[2].classList.add('hidden');
                    break;

                case 'tabItem3':
                    tabContents[2].classList.add('flex', 'lg:grid');
                    tabContents[2].classList.remove('hidden');
                    tabContents[0].classList.add('hidden');
                    tabContents[1].classList.add('hidden');
                    break;

                default:
                    tabContents[0].classList.add('flex, lg:grid');
                    tabContents[1].classList.add('hidden');
                    tabContents[2].classList.add('hidden');
                    tabContents[0].classList.remove('hidden');
              }
              
        })
    }

    deselectTab(tabItem) {
        tabItem.classList.remove('border-red-500');
        tabItem.classList.add('border-white');
    }

    selectContent() {

    }
}