document.getElementById('cash-out-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const account = document.getElementById('cashout-account-number').value;
        const amount = getInputValueById('cashout-amount');
        const pin = getInputValueById('cash-out-pin');
        const mainBalance = getInnerTextById('main-balance');
        const selectedBank = document.getElementById('cashout-all-bank').value;

        if (amount > mainBalance) {
            alert('Insufficient funds!');
            return;
        }

        if (account.length === 11) {
            if (pin === 1234) {
                sum = mainBalance - amount;
                setElementText('main-balance', sum);

                const transactionContainer = document.getElementById('transaction-container');

                const div = document.createElement('div');
                div.classList.add('bg-red-400');
                div.innerHTML = `
                <h1 class="text-yellow-300">Debited money from ${selectedBank}</h1>
                <h3> Amount: ${amount}</h3>
                <p> A/C Number: ${account}</p>
                <p> Remaining Balance: $${sum}</p>
                `

                transactionContainer.appendChild(div);


                // const p = document.createElement('p');
                // p.innerText = `
                // $${amount} is cashed out from A/C No. ${account}.
                // -------------------------------------------------
                // `
                // transactionContainer.appendChild(p);
            }
            else {
                alert('Wrong PIN!!!')
            }
        }
        else {
            alert('Please enter a valid account number!')
        }
    })