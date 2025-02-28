document.getElementById('add-money-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const account = document.getElementById('account-number').value;
        const amount = getInputValueById('amount');
        const mainBalance = getInnerTextById('main-balance');
        const pin = getInputValueById('pin');
        
        if (account.length === 11){
            if (pin === 1234){
                const sum = amount + mainBalance;
                setElementText('main-balance',sum);

                const transactionContainer = document.getElementById('transaction-container');

                const p = document.createElement('p');
                p.innerText = `
                $${amount} is added from A/C No. ${account}.
                -------------------------------------------
                `

                transactionContainer.appendChild(p);
            }
            else{
                alert('Wrong Password!!!')
            }
        }
        else{
            alert('Insert Valid Account Number!')
        }
    })