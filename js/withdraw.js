document.getElementById('button-withdraw').addEventListener('click' , function(event){

    // withdraw input 

    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    
    // clear input field 

    withdrawField.value = '';

    // validation 

    if( isNaN(newWithdrawAmount)){
        alert('Please Type A Number')
        return;
    }

    // withdraw box 

    const currentWithdrawField = document.getElementById('withdraw-amount');
    const oldWithdrawAmountString = currentWithdrawField.innerText;
    const oldWithdrawAmount = parseFloat(oldWithdrawAmountString);

    // total balance box 

    const balanceField = document.getElementById('balance-amount');
    const oldBalanceAmountString = balanceField.innerText;
    const oldBalanceAmount = parseFloat(oldBalanceAmountString);

    // validation  

    if ( newWithdrawAmount > oldBalanceAmount){
        alert('Baap Er Bank E Eto Taka Nai !!!');
        return;
    }

     // withdraw calculation 
    
     const currentWithdrawAmount = oldWithdrawAmount + newWithdrawAmount;
     currentWithdrawField.innerText = currentWithdrawAmount;
 

    // total balance calculation 

    const newBalance = oldBalanceAmount - newWithdrawAmount;
    balanceField.innerText = newBalance;

})