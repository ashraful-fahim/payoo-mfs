document.getElementById('add-money-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const account = document.getElementById('account-number').value;
        const amount = getInputValueById('amount');
        const mainBalance = getInnerTextById('main-balance');
        const pin = getInputValueById('pin');
        const selectedBank = document.getElementById('all-bank').value;

        if (amount < 0) {
            alert('Please enter valid amount!');
            return;
        }

        if (account.length === 11) {
            if (pin === 1234) {
                const sum = amount + mainBalance;
                setElementText('main-balance', sum);

                const transactionContainer = document.getElementById('transaction-container');

                const div = document.createElement('div');
                div.classList.add("bg-green-400");
                div.innerHTML = `
                <h1 class="text-yellow-300">Credited money from ${selectedBank}</h1>
                <h3> Amount: ${amount}</h3>
                <p> A/C Number: ${account}</p>
                <p> New Balance: $${sum}</p>
                `
                transactionContainer.appendChild(div);


                // const p = document.createElement('p');
                // p.innerText = `
                // $${amount} is added from A/C No. ${account}.
                // -------------------------------------------
                // `

                // transactionContainer.appendChild(p);
            }
            else {
                alert('Wrong Password!!!')
            }
        }
        else {
            alert('Insert Valid Account Number!')
        }
    })