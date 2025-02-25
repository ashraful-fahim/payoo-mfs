document.getElementById('add-money-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const amount = document.getElementById('amount').value;
        const convertedAmount = parseFloat(amount);

        const mainBalance = document.getElementById('main-balance').innerText;
        const convertedMainBalance = parseFloat(mainBalance);

        const pin = document.getElementById('pin').value;
        const convertedPin = parseInt(pin);

        if (convertedPin === 1234) {
            const sum = convertedAmount + convertedMainBalance;
            document.getElementById('main-balance').innerText = sum;
        }
        else {
            alert('Wrong Pin Code!')
        }
    })