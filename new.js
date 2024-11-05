document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("calculate button");
    const container = document.getElementById("result");

    button.addEventListener("click", function () {
        const initialInvestment = 
            parseFloat(document.getElementById("investment").value);
        const interestRate = 
            parseFloat(document.getElementById("interest rate").value) / 100;
        const investmentYears =
            parseInt(document.getElementById("investment years").value);
        let totalAmount = initialInvestment;

        for (let i = 1; i <= investmentYears; i++) {
            totalAmount*= (1 + interestRate);
        }

        container.innerHTML = 
        `After ${investmentYears} years, your investment`+
        ` will be worth $${totalAmount.toFixed(2)}.`;
    });
});