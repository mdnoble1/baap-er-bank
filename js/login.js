document.getElementById('button-submit').addEventListener('click' , function(event){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    if( email === 'sontan@baap.com' && password === 'secret1234'){
        window.location.href = 'bank.html';
    }
    else if( email === 'wife@husband.com' && password === 'takadeo'){
        window.location.href = 'bank.html';
    }
    else {
        alert('Tui To Gorib Re !!!')
    }
})