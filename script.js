function calculateCAGR() {
  const initialValue = parseFloat(
    document.getElementById("initialValue").value
  );
  const finalValue = parseFloat(document.getElementById("finalValue").value);
  const years = parseInt(document.getElementById("years").value);

  if (initialValue <= 0 || finalValue <= 0 || years <= 0) {
    document.getElementById("result").innerText = "Please enter valid values.";
  } else {
    const cagr = (Math.pow(finalValue / initialValue, 1 / years) - 1) * 100;
    document.getElementById(
      "result"
    ).innerText = `The Compound Annual Growth Rate (CAGR) is ${cagr.toFixed(
      2
    )}%.`;
  }
}

function calculateFutureValue() {
  const futureInitialValue = parseFloat(
    document.getElementById("futureInitialValue").value
  );
  const expectedCAGR =
    parseFloat(document.getElementById("expectedCAGR").value) / 100;
  const futureYears = parseInt(document.getElementById("futureYears").value);

  if (futureInitialValue <= 0 || expectedCAGR <= 0 || futureYears <= 0) {
    document.getElementById("futureResult").innerText =
      "Please enter valid values.";
  } else {
    const futureValue =
      futureInitialValue * Math.pow(1 + expectedCAGR, futureYears);
    document.getElementById(
      "futureResult"
    ).innerText = `The future value will be ${futureValue.toFixed(
      2
    )} after ${futureYears} years.`;
  }
}

function showTab(tabName) {
  const tabs = document.getElementsByClassName("tab-content");
  for (let tab of tabs) {
    tab.style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}

function calculateYearsToDouble() {
  const doubleCAGR =
    parseFloat(document.getElementById("doubleCAGR").value) / 100;

  if (doubleCAGR <= 0) {
    document.getElementById("doubleResult").innerText =
      "Please enter a valid expected CAGR.";
  } else {
    const yearsToDouble = Math.log(2) / Math.log(1 + doubleCAGR);
    document.getElementById(
      "doubleResult"
    ).innerText = `It will take approximately ${yearsToDouble.toFixed(
      2
    )} years to double the initial amount.`;
  }
}

function calculatePercentageChange() {
  const initialValueChange = parseFloat(
    document.getElementById("initialValueChange").value
  );
  const finalValueChange = parseFloat(
    document.getElementById("finalValueChange").value
  );

  if (initialValueChange <= 0 || finalValueChange <= 0) {
    document.getElementById("percentageChangeResult").innerText =
      "Please enter valid values.";
  } else {
    const percentageChange =
      ((finalValueChange - initialValueChange) / initialValueChange) * 100;
    const resultElement = document.getElementById("percentageChangeResult");
    resultElement.innerText = `Percentage Change: ${percentageChange.toFixed(
      2
    )}% (${finalValueChange - initialValueChange})`;

    if (percentageChange > 0) {
      resultElement.style.color = "green";
    } else if (percentageChange < 0) {
      resultElement.style.color = "red";
    }
  }
}

//Basic Calculator

window.onload = function () {
  showTab("cagr"); // Show the CAGR tab when the page loads
};

function showTab(tabName) {
  const tabs = document.getElementsByClassName("tab-content"); // Get all tab content
  // Hide all tabs
  for (let tab of tabs) {
    console.log(tab);
    
    tab.style.display = "none";

  }
  // Show the selected tab
  document.getElementById(tabName).style.display = "block";
}

function appendToCalc(value) {
  const input = document.getElementById("calcInput");
  input.value += value;
}

function calculateResult() {
  const input = document.getElementById("calcInput");
  try {
    input.value = eval(input.value) || "";
  } catch (e) {
    input.value = "Error";
  }
}

function clearCalc() {
  const input = document.getElementById("calcInput");
  input.value = "";
}