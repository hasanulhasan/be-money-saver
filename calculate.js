let income = document.getElementById('incomeField'); 
let food = document.getElementById('foodField'); 
let cloths = document.getElementById('clothsField'); 
let rent = document.getElementById('rentField');
let expense = document.getElementById('expenseTotal');
let balance = document.getElementById('balanceNew');

let calculate = document.getElementById('claculateBtn');

calculate.addEventListener('click', function (){

  let incomenew = parseInt(income.value);
  let foodnew = parseInt(food.value);
  let clothsnew = parseInt(cloths.value);
  let rentnew = parseInt(rent.value);
  let incomeAll = incomenew - (foodnew + clothsnew + rentnew);
  expense.innerText = foodnew + clothsnew + rentnew;
  balance.innerText = incomeAll;

})