function estimateTransactionFee(amountToSend) {
    // Calculate the raw transaction fee (1.5% of the amount)
    let transactionFee = amountToSend * 0.015;

    // Apply the minimum and maximum fee limits
    if (transactionFee < 10) {
        transactionFee = 10; // Minimum fee
    } else if (transactionFee > 70) {
        transactionFee = 70; // Maximum fee
    }

    // Calculate the total amount to be debited
    const totalAmount = amountToSend + transactionFee;

    // Print the results to the console
    console.log(`Amount to Send: KES ${amountToSend}`);
    console.log(`Transaction Fee: KES ${transactionFee}`);
    console.log(`Total Amount Debited: KES ${totalAmount}`);
}

// Prompt the user to enter the amount they wish to send
const firstUserInput = prompt("Enter the amount of money you wish to send:");
const amountToSend = parseFloat(firstUserInput);

// Validate the input and call the function
if (!isNaN(amountToSend) && amountToSend > 0) {
    estimateTransactionFee(amountToSend);
} else {
    console.log("Please enter a valid positive number.");
}