<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Net Salary Calculator</title>
    <script>
        // Function to calculate payee tax
        function calculatePayeeTax(grossSalary) {
            // Example tax brackets and rates (simplified for illustration)
            if (grossSalary <= 24000) {
                return grossSalary * 0.1; // 10% tax rate
            } else if (grossSalary <= 48000) {
                return grossSalary * 0.15; // 15% tax rate
            } else {
                return grossSalary * 0.2; // 20% tax rate
            }
        }

        // Function to calculate NHIF deductions
        function calculateNHIF(grossSalary) {
            // Example NHIF rates (simplified)
            if (grossSalary <= 5999) {
                return 150;
            } else if (grossSalary <= 7999) {
                return 300;
            } else if (grossSalary <= 11999) {
                return 400;
            } else if (grossSalary <= 14999) {
                return 500;
            } else if (grossSalary <= 19999) {
                return 600;
            } else {
                return 750;
            }
        }

        // Function to calculate NSSF deductions
        function calculateNSSF(grossSalary) {
            // Example NSSF deduction (simplified)
            const nssfRate = 0.06; // 6% contribution
            return grossSalary * nssfRate;
        }

        // Main function to calculate net salary
        function calculateSalary() {
            // Get input values
            const basicSalary = parseFloat(document.getElementById("basicSalary").value);
            const benefits = parseFloat(document.getElementById("benefits").value);
            
            if (isNaN(basicSalary) || isNaN(benefits)) {
                alert("Please enter valid numbers for basic salary and benefits.");
                return;
            }

            // Calculate gross salary
            const grossSalary = basicSalary + benefits;

            // Calculate payee (tax)
            const payeeTax = calculatePayeeTax(grossSalary);

            // Calculate NHIF deductions
            const nhif = calculateNHIF(grossSalary);

            // Calculate NSSF deductions
            const nssf = calculateNSSF(grossSalary);

            // Calculate net salary
            const netSalary = grossSalary - payeeTax - nhif - nssf;

            // Display results
            document.getElementById("grossSalary").textContent = grossSalary.toFixed(2);
            document.getElementById("payeeTax").textContent = payeeTax.toFixed(2);
            document.getElementById("nhif").textContent = nhif.toFixed(2);
            document.getElementById("nssf").textContent = nssf.toFixed(2);
            document.getElementById("netSalary").textContent = netSalary.toFixed(2);
        }
    </script>
</head>
<body>
    <h1>Net Salary Calculator</h1>

    <label for="basicSalary">Basic Salary:</label>
    <input type="number" id="basicSalary" placeholder="Enter Basic Salary" required><br><br>

    <label for="benefits">Benefits:</label>
    <input type="number" id="benefits" placeholder="Enter Benefits" required><br><br>

    <button onclick="calculateSalary()">Calculate Salary</button>

    <h2>Salary Breakdown</h2>
    <p><strong>Gross Salary:</strong> KSh <span id="grossSalary">0.00</span></p>
    <p><strong>Payee Tax:</strong> KSh <span id="payeeTax">0.00</span></p>
    <p><strong>NHIF Deduction:</strong> KSh <span id="nhif">0.00</span></p>
    <p><strong>NSSF Deduction:</strong> KSh <span id="nssf">0.00</span></p>
    <p><strong>Net Salary:</strong> KSh <span id="netSalary">0.00</span></p>

</body>
</html>
