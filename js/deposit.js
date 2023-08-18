document.getElementById('button-deposit').addEventListener('click' , function(event){

    // deposit input 

    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    
    // clear input field 

    depositField.value = '';

    // validation 

    if( isNaN(newDepositAmount)){
        alert('Please Type A Number')
        return;
    }

    // deposit box 

    const currentDepositField = document.getElementById('deposit-amount');
    const oldDepositAmountString = currentDepositField.innerText;
    const oldDepositAmount = parseFloat(oldDepositAmountString);

    // deposit calculation 
    
    const currentDepositAmount = oldDepositAmount + newDepositAmount;
    currentDepositField.innerText = currentDepositAmount;

    // total balance box 

    const balanceField = document.getElementById('balance-amount');
    const oldBalanceAmountString = balanceField.innerText;
    const oldBalanceAmount = parseFloat(oldBalanceAmountString);

    // total balance calculation 

    const newBalance = oldBalanceAmount + newDepositAmount;
    balanceField.innerText = newBalance;

})