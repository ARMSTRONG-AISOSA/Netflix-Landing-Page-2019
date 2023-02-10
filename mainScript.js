// Below would grab all the tab-items in the DOM and put them into a nodelist which is similar to an array. So we basically loop through what we want to do
const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');


// A function to select tab-content-item
// (e) is an event parameter
function selectItem(e) {
    // Remove border
    removeBorder();
    // remove show (tab)
    removeShow();
    // Add border to current tab
    this.classList.add('tab-border');
    // Grab content item from DOM
    const tabContentItems = document.querySelector(`#${this.id}-content`);
    // Add show class
    tabContentItems.classList.add('show')

    // Uncomment this to see the tab being called/grabed on click.
    console.log(this.id);
}

function removeBorder() {
    // It loops through and remooves all the borders
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow() {
    // It loops through and remooves all the borders
    tabContentItems.forEach(item => item.classList.remove('show'));
}


// Event Listener for when we click on a tab item
// The forEach loops through
tabItems.forEach(item => item.addEventListener('click', selectItem));