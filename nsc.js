// Constants for tax brackets and rates from KRA and NHIF, NSSF rates
// You can update these constants based on the current rates from the provided links

// Tax brackets and rates for PAYE calculation
const taxBrackets = [
  { min: 24000, max: Infinity, rate: 0.1 },
  { min: 32333, max: Infinity, rate: 0.15 },
  { min: 40333, max: Infinity, rate: 0.2 },
  { min: 48333, max: Infinity, rate: 0.25 },
  { min: 57333, max: Infinity, rate: 0.3 },
  { min: 68833, max: Infinity, rate: 0.32 },
];

// NHIF rates based on gross salary
const nhifRates = [
  { min: 0, max: 5999, amount: 150 },
  { min: 6000, max: 7999, amount: 300 },
  { min: 8000, max: 11999, amount: 400 },
  { min: 12000, max: 14999, amount: 500 },
  { min: 15000, max: 19999, amount: 600 },
  { min: 20000, max: 24999, amount: 750 },
  { min: 25000, max: 29999, amount: 850 },
  { min: 30000, max: 34999, amount: 900 },
  { min: 35000, max: 39999, amount: 1000 },
  { min: 40000, max: 44999, amount: 1100 },
  { min: 45000, max: 49999, amount: 1200 },
  { min: 50000, max: 59999, amount: 1300 },
  { min: 60000, max: 69999, amount: 1400 },
  { min: 70000, max: 79999, amount: 1500 },
  { min: 80000, max: 89999, amount: 1600 },
];

// Function to calculate PAYE (tax) based on salary
function calculatePAYE(salary) {
  let tax = 0;
  for (let bracket of taxBrackets) {
    if (salary > bracket.min) {
      tax += (Math.min(salary, bracket.max) - bracket.min) * bracket.rate;
    }
    if (salary <= bracket.max) {
      break;
    }
  }
  return tax;
}

// Function to calculate NHIF deduction based on gross salary
function calculateNHIF(salary) {
  for (let rate of nhifRates) {
    if (salary <= rate.max) {
      return rate.amount;
    }
  }
  return 0; // Default case
}

// Function to calculate NSSF deduction (assuming a fixed rate, adjust as necessary)
function calculateNSSF(salary) {
  const nssfRate = 0.06; // 6% NSSF contribution rate
  return salary * nssfRate;
}

// Main function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
  let grossSalary = basicSalary + benefits;
  let paye = calculatePAYE(grossSalary);
  let nhif = calculateNHIF(grossSalary);
  let nssf = calculateNSSF(grossSalary);
  let netSalary = grossSalary - paye - nhif - nssf;

  return {
    grossSalary: grossSalary,
    paye: paye,
    nhif: nhif,
    nssf: nssf,
    netSalary: netSalary,
  };
}

// Example usage:
const basicSalary = 60000; // Example basic salary
const benefits = 10000; // Example benefits

const salaryDetails = calculateNetSalary(basicSalary, benefits);

console.log("Gross Salary:", salaryDetails.grossSalary);
console.log("PAYE (Tax):", salaryDetails.paye);
console.log("NHIF Deduction:", salaryDetails.nhif);
console.log("NSSF Deduction:", salaryDetails.nssf);
console.log("Net Salary:", salaryDetails.netSalary);
