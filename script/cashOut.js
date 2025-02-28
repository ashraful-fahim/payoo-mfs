document.getElementById('cash-out-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const account = document.getElementById('cashout-account-number').value;

        const amount = getInputValueById('cashout-amount');

        const pin = getInputValueById('cash-out-pin');

        const mainBalance = getInnerTextById('main-balance');

        if (account.length === 11){
            if(pin === 1234){
                sum = mainBalance - amount;
                setElementText('main-balance',sum);   

                const transactionContainer = document.getElementById('transaction-container');
                
                const p = document.createElement('p');
                p.innerText = `
                $${amount} is cashed out from A/C No. ${account}.
                -------------------------------------------------
                `
                transactionContainer.appendChild(p);
            }
            else{
                alert('Wrong PIN!!!')
            }
        }
        else{
            alert('Please enter a valid account number!')
        }
    })