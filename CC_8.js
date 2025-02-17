// Task 1 Employee Salary Calculation
function calculateSalary(baseSalary, bonus, taxRate){
    const netSalary = ( baseSalary + bonus) - (baseSalary * taxRate);
    console.log(`Net Salary: $${netSalary.toFixed(2)}`)
}; // create a function that computes the net salary and logs it into the console
calculateSalary(5000, 500, 0.1); // Net Salary: $5000.00
calculateSalary(7000, 1000, 0.15); // Net Salary: $6950.00

