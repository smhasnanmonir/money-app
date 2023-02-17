function getValue(inputId) {
  let expense = document.getElementById(inputId);
  let expenseValue = expense.value;
  return parseInt(expenseValue);
}

function totalExpense(input1, input2, input3) {
  let expense = input1 + input2 + input3;
  return expense;
}

document.getElementById("calc-btn").addEventListener("click", function () {
  let incomeInput = getValue("income-input");
  let foodInput = getValue("food-input");
  let rentInput = getValue("rent-input");
  let clothInput = getValue("cloths-input");
  let expenseShower = totalExpense(foodInput, rentInput, clothInput);
  let expenseSpan = document.getElementById("expense-span");
  expenseSpan.innerText = expenseShower + " Taka";
  if (incomeInput > expenseShower) {
    let currentBalance = incomeInput - expenseShower;
    let balanceShower = document.getElementById("balance-span");
    balanceShower.innerHTML = currentBalance + " Taka";
  } else {
    expenseSpan.innerText = "Expense can not be larger than income";
  }
});

// Percentage calculate
