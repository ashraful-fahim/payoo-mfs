document.getElementById('cash-out-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const amount = document.getElementById('cashout-amount').value;
        const convertedAmount = parseFloat(amount);

        const pin = document.getElementById('cash-out-pin').value;
        const convertedPin = parseInt(pin);

        const mainBalance = document.getElementById('main-balance').innerText;
        const convertedMainBalance = parseFloat('mainBalance');

        // console.log(typeof convertedPin);

        if (convertedPin === 1234){
            sum = mainBalance - convertedAmount;
            document.getElementById('main-balance').innerText = sum;
        }
        else{
            alert('Wrong PIN!!!');
        }
    })