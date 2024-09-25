

document.getElementById('donate_add').addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Donate button clicked');

    const addDonate = document.getElementById('inpute_add_donate').value;
    const donateBalance = document.getElementById('noakhali_donate').innerText;
    const total_variable = document.getElementById('total_donation').innerText;

    // Parse inputs to numbers
    const inputDonate = parseFloat(addDonate);
    const totalDonation = parseFloat(total_variable);

    // Validation checks
    if (addDonate === "") {
        alert('Please enter a donation amount');
        return;
    }
    
    if (isNaN(inputDonate) || inputDonate <= 0) {
        alert('Please enter a valid number greater than 0');
        return;
    }
    
    if (inputDonate > totalDonation) {
        alert('Donation amount cannot be greater than the total available balance');
        return;
    }

    // Calculate new donation values
    const totalQuotaDonate = parseFloat(donateBalance);
    const newBalance = inputDonate + totalQuotaDonate;
    document.getElementById('noakhali_donate').innerText = newBalance;

    const newTotalDonation = totalDonation - inputDonate;
    document.getElementById('total_donation').innerText = newTotalDonation;

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

    // Show modal after successful donation
    // const modal =document.getElementById('my_modal_1').classList.remove('hidden');
    // modal.showModal();
     document.getElementById('my_modal_1').showModal();
});












document.getElementById('donate_feni').addEventListener('click', function(event) {
    event.preventDefault();

    const addDonate = document.getElementById('input_feni_donate').value;
    const feniDonateBalance = document.getElementById('feni_donate').innerText;
    const total_variable = document.getElementById('total_donation').innerText;

    // Parse values to floats
    const inputDonate = parseFloat(addDonate);
    const totalFeniBalance = parseFloat(feniDonateBalance);
    const totalDonation = parseFloat(total_variable);

    // Validation checks
    if(addDonate === "" || isNaN(inputDonate) || inputDonate <= 0) {
        alert('Please enter a valid donation amount');
        return;
    }

    if(inputDonate > totalDonation) {
        alert('The donation amount exceeds the available total donation balance.');
        return;
    }

    // Update Feni donation balance and total donation balance
    const newBalance = inputDonate + totalFeniBalance;
    document.getElementById('feni_donate').innerText = newBalance;

    const updatedTotalDonation = totalDonation - inputDonate;
    document.getElementById('total_donation').innerText = updatedTotalDonation;

    // Append to history
    const data = new Date();
    const historyItem = document.createElement("div");
    historyItem.className = "border bg-white rounded-md";

    historyItem.innerHTML = `
        <h4 class="font-bold text-xl w-10/12 text-start mx-auto mb-4 mt-5"> 
        ${inputDonate} Taka Donated for Flood Relief in Feni, Bangladesh </h4>
        <p class="text-start w-10/12 mx-auto mb-5">Date : ${data.toGMTString()} (Bangladesh Standard Time)</p>`;

    // Append the new history item to the history section
    const historySection = document.getElementById("history-section");
    historySection.appendChild(historyItem);

    // Clear the input field
    document.getElementById('input_feni_donate').value = "";

      // Show modal 

      document.getElementById('my_modal_1').showModal();
});















//===============================================
//===============================================
//===============================================

document.getElementById('donate_quota').addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Quota Movement donate button clicked');
    
    const addDonate = document.getElementById('input_quota_donate').value;
    const quotaBalance = document.getElementById('quota_donate').innerText;
    const total_variable = document.getElementById('total_donation').innerText;

    // Check if donation amount is valid
    if (addDonate === "" || isNaN(parseFloat(addDonate)) || parseFloat(addDonate) <= 0) {
        alert('Please enter a valid donation amount.');
        return;
    }

    const inputDonate = parseFloat(addDonate);
    const totalQuotaDonate = parseFloat(quotaBalance);
    const totalDonationBalance = parseFloat(total_variable);

    // Check if the donation amount is greater than the available total donation balance
    if (inputDonate > totalDonationBalance) {
        alert('The donation amount exceeds the available balance.');
        return;
    }

    // Update the quota donation balance
    const newBalance = inputDonate + totalQuotaDonate;
    document.getElementById('quota_donate').innerText = newBalance;

    // Update the total donation balance
    const updatedTotalDonation = totalDonationBalance - inputDonate;
    document.getElementById('total_donation').innerText = updatedTotalDonation;

    // Append to history
    const dateObj = new Date(); 
    const historyItem = document.createElement("div");
    historyItem.className = "border bg-white history-item rounded-md";
     
    historyItem.innerHTML = `
        <h4 class="font-bold text-xl w-10/12 text-start mx-auto mb-4 mt-5"> 
        ${inputDonate} Taka Donated for famine-2024 at Quota Movement, Bangladesh </h4>
        <p class="text-start w-10/12 mx-auto mb-5">Date : ${dateObj.toGMTString()} (Bangladesh Standard Time)</p>`;
    
    const historySection = document.getElementById("history-section");
    historySection.appendChild(historyItem);

    // Clear input field
    document.getElementById('input_quota_donate').value = "";

      // Show modal after successful donation
      document.getElementById('my_modal_1').showModal();
});



