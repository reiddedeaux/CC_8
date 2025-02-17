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
function calculateLoanPayment(principal, rate, time){
    const totalPayment = principal +(principal * rate * time);
    console.log(`Total Payment: $${totalPayment.toFixed(2)}`);
}; // Created a function that returns a loan payment
calculateLoanPayment(1000, 0.05, 2); // Total Payment: $1100,00
calculateLoanPayment(5000, 0.07, 3); // Total Payment: $6050.00
 // Task 6 Identify Large Transaction
let transactions = [200, 1500, 3200, 800, 2500]; // Declared an array with 5 different values
function filterLargeTransactions(transactions, filterFunction){
    const result = transactions.filter(filterFunction);
    console.log("Large Transactions:", result);
}; // Created a higher-order function to find transations over $1000
filterLargeTransactions(transactions, amount => amount > 1000)// Large Transactions: 1500, 3200, 2500
// Task 7 Shopping Cart Tracker
function createCartTracker(){
    let total = 0;
    return function(amount){
        total =+ amount;
        console.log(`Total Cart Value: $${total}`);
    };
}; // Created a function that can add items to a cart and maintain a running total
let cart = createCartTracker();
cart(20); // Total Cart Value: $20
cart(35); // Total Cart Value: $35

// Task 8 Savings Growth Projection
function calculateSavings(years, amount){
    if (years >= 10) return `Projected Savings: $${amount.toFixed(2)}`;
    return calculateSavings(years + 1, amount * 1.05);
}
console.log(calculateSavings(8, 1000)); // Projected Savings: $1102.50
console.log(calculateSavings(5, 5000)); // Projected Savings: $6381.41


