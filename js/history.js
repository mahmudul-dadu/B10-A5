// const historyTab = document.getElementById("history_tab");
// const donateTab = document.getElementById("donate_tab"); 
// const cardsSection = document.querySelector(".cards"); 
// const historySection = document.getElementById("history-section");

// historyTab.addEventListener('click', function() {
    
//     historyTab.classList.add('bg-lime-400');
//     donateTab.classList.remove('bg-lime-400'); 

//    // cards display none
//     cardsSection.style.display = 'none';
//     // history show
//     historySection.style.display = 'block';
// });


// donateTab.addEventListener('click', function() {
//     donateTab.classList.add('bg-lime-400');
//     historyTab.classList.remove('bg-lime-400');

//     // cards display show
//     cardsSection.style.display = 'block';
//      // history show
//     historySection.style.display = 'none';
// });




// Tab functionality
const historyTab = document.getElementById("history_tab");
const donateTab = document.getElementById("donate_tab"); 
const cardsSection = document.querySelector(".cards"); 
const historySection = document.getElementById("history-section");

    historyTab.addEventListener('click', function() {
    historyTab.classList.add('bg-lime-400');
    donateTab.classList.remove('bg-lime-400'); 
    cardsSection.style.display = 'none';
    historySection.style.display = 'block';
});

    donateTab.addEventListener('click', function() {
    donateTab.classList.add('bg-lime-400');
    historyTab.classList.remove('bg-lime-400');
    cardsSection.style.display = 'block';
    historySection.style.display = 'none';
});