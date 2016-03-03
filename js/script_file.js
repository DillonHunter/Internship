function displayCopyright()
/* A function used to display the copyright symbol and year wherever it is called.
*/
        {
            var currentYear = new Date();
            document.writeln("&copy;" + currentYear.getFullYear());         
        }
        
function loginSubmit()
        {
        /* This function is used upon submission of the login button, it has commented out code that makes it work like
        websites from the 90s. The modern one is left uncommented and goes through validation to ensure values are entered
        into the text boxes.
        */
          /*  var username = document.forms["login-form"]["username"].value;
            var password = document.forms["login-form"]["password"].value;
            if (username == null || username == "") {
                if (password == null || password == "") {
                    alert("Please input a username.");
                    alert("Please input a password");
                    return false;
                } else {
                    alert("Please input a username");
                    return false;
                }
            } else if (password == null || password == "") {
                alert("Please input a password");
                return false;
            }*/
            
            /*var username = document.forms["login-form"]["username"].value;
            var password = document.forms["login-form"]["password"].value;
            if (username == null || username == "") {
                if (password == null || password == "") {
                    alert("Please input a username. \nPlease input a password.");
                    return false;
                } else {
                    alert("Please input a username");
                    return false;
                }
            } else if (password == null || password == "") {
                alert("Please input a password");
                return false;
            }*/
            var username = document.forms["login-form"]["username"].value;
            var password = document.forms["login-form"]["password"].value;
            if (username == null || username == "") {
                if (password == null || password == "") {
                    document.getElementById("usernameError").innerHTML = "Please enter a username";
                    document.getElementById("passwordError").innerHTML = "Please enter a password";
                    return false;
                } else {
                    document.getElementById("passwordError").innerHTML = "";
                    document.getElementById("usernameError").innerHTML = "Please enter a username";
                    return false;
                }
            } else if (password == null || password == "") {
                document.getElementById("usernameError").innerHTML = "";
                document.getElementById("passwordError").innerHTML = "Please enter a password";
                return false;
            } else {
                document.getElementById("usernameError").innerHTML = "";
                document.getElementById("passwordError").innerHTML = "";
            }
            
            
            
        }

function calculateEarnings()
        {
        /* This function is used upon clicking the submit button on the earnings calculator. It runs through validation on each
        different field to ensure proper values are entered. It then calculates the final salary they receive and their total
        accumulated earnings throughout the period of their work.
        */
            var currentAge = document.forms["earnings-form"]["currentAge"].value;
            var retirementAge = document.forms["earnings-form"]["retirementAge"].value;
            var initialIncome = document.forms["earnings-form"]["initialAnnualIncome"].value;
            var dollarIncrease = document.forms["earnings-form"]["salaryIncreaseDollar"].value;
            var percentIncrease = document.forms["earnings-form"]["salaryIncreasePercent"].value;
            var lastAnnual;
            var accumulatedEarnings;
            var errorCheck = true;
            document.getElementById("earningsError").innerHTML = "";
            //document.getElementById("retirementAgeError").innerHTML = "";
            //document.getElementById("initialIncomeError").innerHTML = "";
            
            if (currentAge == null || currentAge == "") {
                document.getElementById("earningsError").innerHTML += "Please enter your current age.<br/>";   
                errorCheck = false;
            } else if (isNaN(currentAge)) {
                document.getElementById("earningsError").innerHTML += "Please enter a number for current age.<br/>";
                errorCheck = false;
            } else if (parseInt(currentAge) < 0) {
                document.getElementById("earningsError").innerHTML += "Please enter a positive current age.<br/>";
                errorCheck = false;                
            } else if (currentAge != parseInt(currentAge)) {
                document.getElementById("earningsError").innerHTML += "Current age must be a whole number.<br/>";
                errorCheck = false;  
            }
            
            if (retirementAge == null || retirementAge == "") {
                document.getElementById("earningsError").innerHTML += "Please enter your retirement age.<br/>";
                errorCheck = false;                
            } else if (isNaN(retirementAge)) {
                document.getElementById("earningsError").innerHTML += "Please enter a number for retirement age.<br/>";
                errorCheck = false;
            } else if (retirementAge < 0) {
                document.getElementById("earningsError").innerHTML += "Please enter a positive retirement age.<br/>";
                errorCheck = false;
            } else if (retirementAge != parseInt(retirementAge)) {
                document.getElementById("earningsError").innerHTML += "Retirement age must be a whole number.<br/>";
                errorCheck = false;  
            }        
            
                 
            if (initialIncome == null || initialIncome == "") {
                document.getElementById("earningsError").innerHTML += "Please enter your initial income.<br/>";     
                errorCheck = false;
            } else if (isNaN(initialIncome)) {
                document.getElementById("earningsError").innerHTML += "Please enter a number for your initial income.<br/>";
                errorCheck = false;
            } else if (parseInt(initialIncome) < 0) {
                document.getElementById("earningsError").innerHTML += "Please enter a positive initial income.<br/>";
                errorCheck = false;   
            }
            
            if (dollarIncrease == null || dollarIncrease == "") {
                if (percentIncrease == null || percentIncrease == "") {
                    document.getElementById("earningsError").innerHTML += "Please enter a salary increase.<br/>"; 
                    errorCheck = false;
                } else if (isNaN(percentIncrease)) {
                    document.getElementById("earningsError").innerHTML += "Please enter a number for salary increase.<br/>"; 
                    errorCheck = false;
                } else if (parseInt(percentIncrease) < 0) {
                    document.getElementById("earningsError").innerHTML += "Please enter positive salary increase.<br/>"; 
                    errorCheck = false;
                } else if (errorCheck = true) {
                    var yearsWorked = (retirementAge - currentAge);
                    increase = (percentIncrease / 100);
                    
                    lastAnnual = (initialIncome * Math.pow((1 + increase), (yearsWorked - 1)));
                    accumulatedEarnings = (initialIncome * (Math.pow((1 + increase), yearsWorked) - 1)/(increase));
                    
                    document.getElementById("lastSalary").value = "$" + lastAnnual.toFixed(2);
                    document.getElementById("accumulatedEarnings").value = "$" + accumulatedEarnings.toFixed(2);
                }
            } else if (isNaN(dollarIncrease)) {
                document.getElementById("earningsError").innerHTML += "Please enter a number for salary increase.<br/>";
                errorCheck = false;
            } else if (parseInt(dollarIncrease) < 0) {
                document.getElementById("earningsError").innerHTML += "Please enter positive salary increase.<br/>"; 
                errorCheck = false;
            } else if (errorCheck = true) {
                var yearsWorked = (retirementAge - currentAge);
                
                lastAnnual = (parseFloat(initialIncome) + (parseFloat(dollarIncrease) * (parseFloat(yearsWorked) - 1)));
                accumulatedEarnings = (initialIncome * yearsWorked + (yearsWorked * (yearsWorked - 1) * (dollarIncrease/2)));
                
                document.getElementById("lastSalary").value = "$" + lastAnnual.toFixed(2); //Adding .toFixed(2) breaks it, I'm not sure why
                document.getElementById("accumulatedEarnings").value = "$" + accumulatedEarnings.toFixed(2);
            }
            
            
        }
function switchSalary(obj) 
/*
    This function is used to switch the "enabled" text boxes for entry on the earnings form. This just changes the background color of the
    text box to make it appear to be enabled and disabled depending on which box was clicked.
*/
        {
            clicked = obj.id;
            unclicked = (obj.id == "salaryIncreasePercent") ? "salaryIncreaseDollar" : "salaryIncreasePercent";

            if (document.getElementById(clicked).style.backgroundColor = "#f2f2f2") {

                document.getElementById(clicked).style.backgroundColor = "#ffffff";
                document.getElementById(unclicked).value = "";
                document.getElementById(unclicked).style.backgroundColor = "#f2f2f2";
                
            }
    
        }
        
function clearPayment()
        {
            document.getElementById("loanAmount").value = "";
            document.getElementById("interestRate").value = "";
            document.getElementById("amortizationPeriod").value = "";
            document.getElementById("paymentError").innerHTML = "";
            document.getElementById("calculatedRepayment").style.display = "none";
            
        }
        
function displaySeasonIcon()
        {
            var date = new Date();
            var month = date.getMonth();
            
            if (month <= 2)
            {
                document.getElementById("pageTitle").innerHTML = "Dill" + '<img src="images/seasons/winter.png" height="18" width="18">' + "n Hunter's Loan Repayment Calculator";
            } else if (month <= 5)
            {
                document.getElementById("pageTitle").innerHTML = "Dill" + '<img src="images/seasons/spring.png" height="18" width="18">' + "n Hunter's Loan Repayment Calculator";
            } else if (month <= 8)
            {
                document.getElementById("pageTitle").innerHTML = "Dill" + '<img src="images/seasons/summer.png" height="18" width="18">' + "n Hunter's Loan Repayment Calculator";
            } else
            {
                document.getElementById("pageTitle").innerHTML = "Dill" + '<img src="images/seasons/fall.png" height="18" width="18">' + "n Hunter's Loan Repayment Calculator";
            }
        }