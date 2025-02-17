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

// Task 3 Service Fee Calculation
const calculateServiceFee = (amount, serviceType) => {
    let feeRate = 0;
    if (serviceType === "Premium") feeRate = 0.15;
    else if (serviceType === "Standard") feeRate = .10;
    else if (serviceType === "Basic") feeRate = .05;
    const fee = amount * feeRate;
    console.log(`Service Fee: $${fee.toFixed(2)}`)
}; // Created an arrow function that applies a fee
calculateServiceFee(200, "Premium"); // Service Fee: $30.00
calculateServiceFee(500, "Standard"); // Service Fee: $50.00

// Task 4 Car Rental Cost Calculation
function calculateRentalCost(days, cartype, insurance = false) {
    let dailyRate = 0;
    if (cartype === "Economy") dailyRate = 40;
    else if(cartype === "Standard") dailyRate = 60;
    else if(cartype === "Luxury") dailyRate = 100;
    let totalCost = days * dailyRate;
    if (insurance){
        totalCost += days * 20;
    }
    console.log(`Total Rental Cost : $${totalCost}`)
}; // Created a function that calculate car rental cost at 3 different levels
calculateRentalCost(3, "Economy", true); // Total Rental Cost: $180
calculateRentalCost(5, "Luxury", false); // Total Rental Cost: $500

// Task 5 Loan Payment Calculation
