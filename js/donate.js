document.getElementById('donate_add').addEventListener('click', function(event) {
    event.preventDefault();
    console.log('donate button clicked');

    const addDonate = document.getElementById('inpute_add_donate').value;
    const donateBalance = document.getElementById('noakhali_donate').innerText;

    // Check
    if (addDonate === "" || isNaN(parseFloat(addDonate)) || parseFloat(addDonate) <= 0) {
        alert('Please enter a valid donation amount');
        return;
    }

    const inputDonate = parseFloat(addDonate);
    const totalQuotaDonate = parseFloat(donateBalance);
    const newBalance = inputDonate + totalQuotaDonate;
    document.getElementById('noakhali_donate').innerText = newBalance;

    const total_variable = document.getElementById('total_donation').innerText;
    const donate = parseFloat(total_variable);
    const totalDonation = donate - inputDonate;
    document.getElementById('total_donation').innerText = totalDonation;

    // Append to history
    const dateObj = new Date(); 
    const historyItem = document.createElement("div");
    historyItem.className = "border bg-white rounded-md";
    
    historyItem.innerHTML = `
        <h4 class="font-bold text-xl w-10/12 text-start mx-auto mb-4 mt-5"> 
        ${inputDonate} Taka Donated for Flood Relief in Noakhali, Bangladesh </h4>
        <p class="text-start w-10/12 mx-auto mb-5 ">Date : ${dateObj.toGMTString()} (Bangladesh Standard Time) </p>`;
    
    // Append history item
    const historySection = document.getElementById("history-section");
    historySection.appendChild(historyItem);

    // Clear input field
    document.getElementById('inpute_add_donate').value = "";
});

//===============================================
//===============================================
//===============================================

document.getElementById('donate_feni').addEventListener('click', function(event) {
    event.preventDefault();
    
    const addDonate = document.getElementById('input_feni_donate').value;
    const feniDonateBalance = document.getElementById('feni_donate').innerText;

    // check
    if(addDonate === "" || isNaN(parseFloat(addDonate)) || parseFloat(addDonate) <= 0 ){
        alert('Please enter a valid donation number');
        return;
    }

    const inputDonate = parseFloat(addDonate);
    const totalFeniBalance = parseFloat(feniDonateBalance);
    const newBalance = inputDonate + totalFeniBalance;
    document.getElementById('feni_donate').innerText = newBalance;

    const total_variable = document.getElementById('total_donation').innerText;
    const donate = parseFloat(total_variable);
    const totalDonation = donate - newBalance;
    document.getElementById('total_donation').innerText = totalDonation;



    // history jamela
    const data = new Date ();
    const historyItem = document.createElement("div");
    historyItem.className = "border bg-white rounded-md"

    historyItem.innerHTML = `
    <h4 class="font-bold text-xl w-10/12 text-start mx-auto mb-4 mt-5"> 
        ${inputDonate} Taka Donated for Flood Relief in Feni, Bangladesh </h4>
        <p class="text-start w-10/12 mx-auto mb-5 ">Date : ${dateObj.toGMTString()} (Bangladesh Standard Time) </p>`;
 
    // push  .........
    const historySection = document.getElementById("history-section");
    historySection.appendChild(historyItem);
    // input er pore khali thakbe
    document.getElementById('inpute_feni_donate').value = " ";
});














//===============================================
//===============================================
//===============================================
document.getElementById('donate_quota').addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Quota Movement donate button clicked');
    
    const addDonate = document.getElementById('input_quota_donate').value;
    const quotaBalance = document.getElementById('quota_donate').innerText;

    // Check if donation amount is valid
    if (addDonate === "" || isNaN(parseFloat(addDonate)) || parseFloat(addDonate) <= 0) {
        alert('Please enter a valid donation amount.');
        return;
    }

    const inputDonate = parseFloat(addDonate);
    const totalQuotaDonate = parseFloat(quotaBalance);
    const newBalance = inputDonate + totalQuotaDonate;
    document.getElementById('quota_donate').innerText = newBalance;

    const total_variable = document.getElementById('total_donation').innerText;
    const donate = parseFloat(total_variable);
    const totalDonation = donate - inputDonate;
    document.getElementById('total_donation').innerText = totalDonation;

    // Append to history
    const dateObj = new Date(); 
    const historyItem = document.createElement("div");
    historyItem.className = "border bg-white history-item rounded-md";
     
    historyItem.innerHTML = `
        <h4 class="font-bold text-xl w-10/12 text-start mx-auto mb-4 mt-5"> 
        ${inputDonate} Taka Donated for famine-2024 at Quota Movement, Bangladesh </h4>
        <p class="text-start w-10/12 mx-auto mb-5 ">Date : ${dateObj.toGMTString()} (Bangladesh Standard Time) </p>`;
    
    const historySection = document.getElementById("history-section");
    historySection.appendChild(historyItem);

    // Clear input field
    document.getElementById('input_quota_donate').value = "";
});



