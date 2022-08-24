let income = document.getElementById('incomeField'); 
let food = document.getElementById('foodField'); 
let cloths = document.getElementById('clothsField'); 
let rent = document.getElementById('rentField');
let expense = document.getElementById('expenseTotal');
let balance = document.getElementById('balanceNew');
let save = document.getElementById('savingField');
let savingAmount = document.getElementById('savingAmount');
let reminingBalance = document.getElementById('reminingBalance');

let calculate = document.getElementById('claculateBtn');
let calculateSave = document.getElementById('saveBtn');

calculate.addEventListener('click', function (){
  let incomenew = parseInt(income.value);
  let foodnew = parseInt(food.value);
  let clothsnew = parseInt(cloths.value);
  let rentnew = parseInt(rent.value);
  let incomeAll = incomenew - (foodnew + clothsnew + rentnew);
  expense.innerText = foodnew + clothsnew + rentnew;
  balance.innerText = incomeAll;
});

calculateSave.addEventListener('click', function(){
  let newBalance = balance.innerText * .2;
  savingAmount.innerText = newBalance;
  reminingBalance.innerText = balance.innerText - newBalance;
})
