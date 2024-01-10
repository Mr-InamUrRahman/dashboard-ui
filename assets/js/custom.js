//start stripeTable
const stripeTable = document.querySelectorAll('.stripeTable');
stripeTable.forEach(table => {
    const rows = table.querySelectorAll('tbody tr');
    rows.forEach((row, index) => {
        const isEven = index % 2 === 0;
        row.classList.add(isEven ? 'bg-primary-100' : 'bg-white');
    });

    const cells = table.querySelectorAll('th, td');
    cells.forEach(cell => {
        cell.classList.add('py-[.3rem]', 'px-2', 'whitespace-nowrap');
    });
});
//end stripeTable

//stripeTableLarge
const stripeTableLarge = document.querySelectorAll('.stripeTableLarge');
stripeTableLarge.forEach(table => {
    const rows = table.querySelectorAll('tbody tr');
    rows.forEach((row, index) => {
        const isEven = index % 2 === 0;
        row.classList.add(isEven ? 'bg-white' : 'bg-primary-100');
    });

    const cells = table.querySelectorAll('th, td');
    cells.forEach(cell => {
        cell.classList.add('p-4', 'whitespace-nowrap');
    });
});
//end stripeTableLarge

//start tabbing
document.addEventListener('DOMContentLoaded', function () {
    const tabButtons = document.querySelectorAll('.tab-nave button');
    const initialTab = 'tab1';

    tabButtons.forEach(function (button, index) {
      button.addEventListener('click', function () {
        const tabName = this.getAttribute('data-tab');
        openTab(tabName, index);
      });
    });

    openTab(initialTab, 0);
  });

  function openTab(tabName, index) {
    const tabContents = document.querySelectorAll('.tab-content');
    const tabButtons = document.querySelectorAll('.tab-nave button');

    tabContents.forEach(function (tabContent) {
      tabContent.classList.add('opacity-0');
      tabContent.style.display = 'none';
    });

    tabButtons.forEach(function (button) {
      button.classList.remove('bg-primary-dark', 'text-white');
    });

    const selectedTab = document.getElementById(tabName);
    selectedTab.style.display = 'block';

    fadeIn(selectedTab);

    tabButtons[index].classList.add('bg-primary-dark', 'text-white');
  }

  function fadeIn(element) {
    let opacity = 0;
    element.style.opacity = opacity;
    element.style.display = 'block';

    const fadeInterval = setInterval(function () {
      if (opacity < 1) {
        opacity += 0.1;
        element.style.opacity = opacity;
      } else {
        clearInterval(fadeInterval);
      }
    }, 10);
  }
  //end tabbing

  function toggleSideMenu() {
    var sideMenu = document.querySelectorAll('.side-menu');
    var aside = document.querySelectorAll('.aside');
    var navAnchor = document.querySelectorAll('nav a span');
    var mainContent = document.querySelectorAll('.main-content');
    
    sideMenu.forEach(function(sideMenuTrigger) {
        sideMenuTrigger.classList.toggle('scale-y-100');
        sideMenuTrigger.classList.toggle('-scale-x-100');
    });

    aside.forEach(function(asideTrigger) {
        asideTrigger.classList.toggle('w-[42px]');
        asideTrigger.classList.toggle('xl:w-[184px]');
        asideTrigger.classList.toggle('md:w-[42px]');
    });

    navAnchor.forEach(function(navAnchorTrigger) {
        navAnchorTrigger.classList.toggle('opacity-0');
        navAnchorTrigger.classList.toggle('text-[0px]');
    });

    mainContent.forEach(function(mainContentTrigger) {
        mainContentTrigger.classList.toggle('w-full');
        mainContentTrigger.classList.toggle('xl:w-[calc(100%-184px)]');
        
    });
    
}

function toggleMilestone() {
    var milestoneBox = document.querySelectorAll('.milestone-box');
    var toggleMilestone = document.querySelectorAll('.toggle-milestone img');
    var content = document.querySelectorAll('.content');
    var milestone = document.querySelectorAll('.milestone .milestone-box');
    
    milestoneBox.forEach(function(milestoneBoxTrigger) {
        milestoneBoxTrigger.classList.toggle('-right-full');
    });

    toggleMilestone.forEach(function(toggleMilestoneTrigger) {
        toggleMilestoneTrigger.classList.toggle('scale-y-100');
        toggleMilestoneTrigger.classList.toggle('-scale-x-100');
    });

    content.forEach(function(contentTrigger) {
        contentTrigger.classList.toggle('w-full');
        contentTrigger.classList.toggle('2xl:w-[calc(100%-313px)]');
        contentTrigger.classList.toggle('xl:w-[calc(100%-350px)]');
        contentTrigger.classList.toggle('md:w-[calc(100%-350px)]');
          
    });

    milestone.forEach(function(milestoneTrigger) {
        milestoneTrigger.classList.toggle('hidden');
    });
}