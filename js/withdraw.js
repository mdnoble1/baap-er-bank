document.getElementById('button-withdraw').addEventListener('click' , function(event){

    // withdraw input 

    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // withdraw box 

    const currentWithdrawField = document.getElementById('withdraw-amount');
    const oldWithdrawAmountString = currentWithdrawField.innerText;
    const oldWithdrawAmount = parseFloat(oldWithdrawAmountString);

    // withdraw calculation 
    
    const currentWithdrawAmount = oldWithdrawAmount + newWithdrawAmount;
    currentWithdrawField.innerText = currentWithdrawAmount;

    // total balance box 

    const balanceField = document.getElementById('balance-amount');
    const oldBalanceAmountString = balanceField.innerText;
    const oldBalanceAmount = parseFloat(oldBalanceAmountString);

    // total balance calculation 

    const newBalance = oldBalanceAmount - newWithdrawAmount;
    balanceField.innerText = newBalance;

     // clear input field 

     withdrawField.value = '';
})