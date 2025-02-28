handleToggle('cash-out', 'none');
handleToggle('transaction', 'none');

document.getElementById('add-money-box')
    .addEventListener('click', function () {
        handleToggle('add-money', 'block');
        handleToggle('cash-out', 'none');
        handleToggle('transaction', 'none');
    })


document.getElementById('cash-out-box')
    .addEventListener('click', function () {
        handleToggle('add-money', 'none');
        handleToggle('cash-out', 'block');
        handleToggle('transaction', 'none');
    })


document.getElementById('transaction-box')
    .addEventListener('click', function () {
        handleToggle('add-money','none');
        handleToggle('cash-out', 'none');
        handleToggle('transaction','block');
    })