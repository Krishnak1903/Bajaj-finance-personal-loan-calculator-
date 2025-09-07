// Data for Total Ins and LI based on Loan Amount bands
const totalInsData = [
{ min: 20000, max: 25000, li: 899, totalIns: 899 },
{ min: 25001, max: 30000, li: 1125, totalIns: 1125 },
{ min: 30001, max: 35000, li: 1349, totalIns: 1349 },
{ min: 35001, max: 40000, li: 1575, totalIns: 1575 },
{ min: 40001, max: 45000, li: 1799, totalIns: 1799 },
{ min: 45001, max: 50000, li: 1999, totalIns: 1999 },
{ min: 50001, max: 55000, li: 1799, totalIns: 2248 },
{ min: 55001, max: 60000, li: 2025, totalIns: 2474 },
{ min: 60001, max: 65000, li: 2249, totalIns: 2698 },
{ min: 65001, max: 70000, li: 2499, totalIns: 2948 },
{ min: 70001, max: 75000, li: 2499, totalIns: 3199 },
{ min: 75001, max: 80000, li: 2699, totalIns: 3399 },
{ min: 80001, max: 85000, li: 2899, totalIns: 3599 },
{ min: 85001, max: 90000, li: 2899, totalIns: 3798 },
{ min: 90001, max: 95000, li: 2899, totalIns: 4098 },
{ min: 95001, max: 100000, li: 2899, totalIns: 4274 },
{ min: 100001, max: 105000, li: 3999, totalIns: 4999 },
{ min: 105001, max: 110000, li: 3999, totalIns: 5248 },
{ min: 110001, max: 115000, li: 3999, totalIns: 5498 },
{ min: 115001, max: 120000, li: 3999, totalIns: 5798 },
{ min: 120001, max: 125000, li: 4999, totalIns: 5999 },
{ min: 125001, max: 130000, li: 4999, totalIns: 6248 },
{ min: 130001, max: 135000, li: 4999, totalIns: 6498 },
{ min: 135001, max: 140000, li: 5699, totalIns: 6748 },
{ min: 140001, max: 145000, li: 5699, totalIns: 6998 },
{ min: 145001, max: 150000, li: 5699, totalIns: 7248 },
{ min: 150001, max: 155000, li: 5699, totalIns: 7498 },
{ min: 155001, max: 160000, li: 5699, totalIns: 7774 },
{ min: 160001, max: 165000, li: 5799, totalIns: 7998 },
{ min: 165001, max: 170000, li: 5799, totalIns: 8248 },
{ min: 170001, max: 175000, li: 5799, totalIns: 8498 },
{ min: 175001, max: 180000, li: 5799, totalIns: 8748 },
{ min: 180001, max: 185000, li: 5799, totalIns: 8998 },
{ min: 185001, max: 190000, li: 5799, totalIns: 9248 },
{ min: 190001, max: 195000, li: 5799, totalIns: 9498 },
{ min: 195001, max: 200000, li: 5799, totalIns: 9748 },
{ min: 200001, max: 250000, li: 6799, totalIns: 9998 },
{ min: 250001, max: 300000, li: 9299, totalIns: 12498 },
{ min: 300001, max: 350000, li: 9299, totalIns: 14998 },
{ min: 350001, max: 400000, li: 9299, totalIns: 15498 },
{ min: 400001, max: 500000, li: 9999, totalIns: 16198 },
{ min: 500001, max: 600000, li: 14999, totalIns: 19198 },
{ min: 600001, max: 700000, li: 14999, totalIns: 20185 },
{ min: 700001, max: 800000, li: 19999, totalIns: 21198 },
{ min: 800001, max: 900000, li: 19999, totalIns: 21198 },
{ min: 900001, max: 1000000, li: 19999, totalIns: 21198 },
{ min: 1000001, max: 1500000, li: 19999, totalIns: 21198 }
];

// Data for Interest Rate based on Loan Amount
const interestRateData = [
{ min: 20000, rate: 31.00 },
{ min: 40000, rate: 31.00 },
{ min: 150000, rate: 31.00 },
{ min: 230000, rate: 31.00 },
{ min: 300000, rate: 31.00 },
{ min: 335000, rate: 27.00 },
{ min: 400000, rate: 27.00 },
{ min: 450000, rate: 27.00 },
{ min: 500000, rate: 27.00 },
{ min: 550000, rate: 26.00 },
{ min: 575000, rate: 24.75 },
{ min: 625000, rate: 24.00 },
{ min: 650000, rate: 22.00 },
{ min: 700000, rate: 22.00 },
{ min: 750000, rate: 18.50 },
{ min: 800000, rate: 18.50 }
];

// Function to find the correct value from a data table
function getBandValue(amount, data, key) {
for (let i = 0; i < data.length; i++) {
if (amount >= data[i].min && amount <= (data[i].max || Infinity)) {
return data[i][key];
}
}
return null; // Return null if no band matches
}

// Function to set interest rate automatically
function getInterestRate(amount) {
let rate = null;
// We need to find the correct rate based on the highest range that fits
for (let i = interestRateData.length - 1; i >= 0; i--) {
if (amount >= interestRateData[i].min) {
rate = interestRateData[i].rate;
break;
}
}
return rate;
}

// Main calculation function
function calculateLoan() {
const loanAmount = parseFloat(document.getElementById('loanAmount').value);
const tenureMonths = parseInt(document.getElementById('loanTenure').value);

// Validate inputs
if (isNaN(loanAmount) || isNaN(tenureMonths) || loanAmount <= 0 || tenureMonths <= 0) {
  alert("Please enter valid positive numbers for all fields.");
return;
}

// Get LI and Total Ins amounts
const liAmount = getBandValue(loanAmount, totalInsData, 'li');
const totalInsAmount = getBandValue(loanAmount, totalInsData, 'totalIns');

// Get Interest Rate
const annualRate = getInterestRate(loanAmount);

if (liAmount === null || totalInsAmount === null || annualRate === null) {
  alert("Loan amount is out of the specified range.");
return;
}

// Display the auto-filled values
document.getElementById('liAmount').textContent = `- ₹ ${liAmount.toFixed(2)}`;
document.getElementById('totalInsAmount').textContent = `- ₹ ${totalInsAmount.toFixed(2)}`;
document.getElementById('interestRate').value = annualRate.toFixed(2);

// Final Amount Calculation: Loan Amount + 3.93% + Total Ins
const finalAmount = loanAmount + (loanAmount * 0.0393) + totalInsAmount;
document.getElementById('finalAmount').textContent = `- ₹ ${finalAmount.toFixed(2)}`;

// Convert annual rate to monthly rate for EMI calculation
const monthlyRate = annualRate / 100 / 12;

// EMI Calculation
const emi = (finalAmount * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) / (Math.pow(1 + monthlyRate, tenureMonths) - 1);

// Total Amount with Interest Calculation
const totalAmount = emi * tenureMonths;

// Total Interest Amount Calculation
const totalInterest = totalAmount - finalAmount;

// Flat Interest Rate PA & PM
const flatRatePA = (totalInterest / finalAmount / (tenureMonths / 12)) * 100;
const flatRatePM = flatRatePA / 12;

// Yearly Interest Amount
const yearlyInterest = totalInterest / (tenureMonths / 12);

// Tenure in Years
const tenureYears = tenureMonths / 12;

// Display remaining results
document.getElementById('emi').textContent = `- ₹ ${emi.toFixed(2)}`;
document.getElementById('totalAmountWithInterest').textContent = `- ₹ ${totalAmount.toFixed(2)}`;
document.getElementById('totalInterestAmount').textContent = `- ₹ ${totalInterest.toFixed(2)}`;
document.getElementById('yearlyInterestAmount').textContent = `- ₹ ${yearlyInterest.toFixed(2)}`;
document.getElementById('tenureInYears').textContent = `- ${tenureYears.toFixed(1)}`;
document.getElementById('flatRatePA').textContent = `- ${flatRatePA.toFixed(2)} %`;
document.getElementById('flatRatePM').textContent = `- ${flatRatePM.toFixed(2)} %`;
}

// Add an event listener to the loan amount input to trigger the calculation on change
document.getElementById('loanAmount').addEventListener('input', () => {
const loanAmount = parseFloat(document.getElementById('loanAmount').value);
if (!isNaN(loanAmount) && loanAmount > 0) {
const annualRate = getInterestRate(loanAmount);
if (annualRate !== null) {
document.getElementById('interestRate').value = annualRate.toFixed(2);
} else {
document.getElementById('interestRate').value = '';
}
} else {
document.getElementById('interestRate').value = '';
}
});