function getValue(inputId) {
  let expense = document.getElementById(inputId);
  let expenseValue = expense.value;
  return parseInt(expenseValue);
}

function totalExpense(input1, input2, input3) {
  let expense = input1 + input2 + input3;
  return expense;
}

function expenseShower() {
  let foodInput = getValue("food-input");
  let rentInput = getValue("rent-input");
  let clothInput = getValue("cloths-input");
  let expenseShower1 = totalExpense(foodInput, rentInput, clothInput);
  return expenseShower1;
}

document.getElementById("calc-btn").addEventListener("click", function () {
  let incomeInput = getValue("income-input");
  let expenseSpan = document.getElementById("expense-span");
  expenseSpan.innerText = expenseShower() + " Taka";
  let currentBalance = incomeInput - expenseShower();
  if (incomeInput > expenseShower()) {
    let balanceShower = document.getElementById("balance-span");
    balanceShower.innerHTML = currentBalance + " Taka";
  } else {
    expenseSpan.innerText = "Expense is too high";
  }
});

// Percentage calculate
document.getElementById("save-btn").addEventListener("click", function () {});
