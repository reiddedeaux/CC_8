// Task 1 Employee Salary Calculation
function calculateSalary(baseSalary, bonus, taxRate){
    const netSalary = ( baseSalary + bonus) - (baseSalary * taxRate);
    console.log(`Net Salary: $${netSalary.toFixed(2)}`)
}; // create a function that computes the net salary and logs it into the console
calculateSalary(5000, 500, 0.1); // Net Salary: $5000.00
calculateSalary(7000, 1000, 0.15); // Net Salary: $6950.00

// Task 2 Product Price After Dsicount
const calculateDiscount = function(price, disocuntRate){
    const finalPrice = price - (price * disocuntRate);
    console.log(`Final Price: $${finalPrice.toFixed(2)}`)
} // Created a function to determine the final price and logges it into the console
calculateDiscount(100, 0.2); // Final Price: $80.00
calculateDiscount(250, 0.15); // Final Price: $212.50
