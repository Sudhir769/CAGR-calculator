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