document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const value = e.target.querySelector('.form-group > input').value;
    // Number.isInteger(value);
    // const valueNbr = Number(value);
    // // console.log(valueNbr);
    // if(valueNbr || valueNbr == 0) {
    //     valueToArray = valueNbr.toString().split('');
    //     console.log(value);
    //     // console.log(valueToArray.length);
    //     filterArray = valueToArray.filter(n => (n == 0 || n == 1));
    //     // console.log(filterArray.length);
    //     if(valueToArray.length === filterArray.length) {
    //         const decValue = parseInt(valueNbr, 2);
    //         console.log(parseInt(valueNbr, 2));
    //         document.querySelector('#results').value = decValue;
    //     }
    //     else {
    //         alert('Veuillez saisir un nombre en binaire (avec des 0 ou 1)');
    //         e.target.querySelector('.form-group > input').value = '';
    //         document.querySelector('#results').value = '';
    //     }
    // }
    // else {
    //     alert('Veuillez saisir un nombre en binaire (avec des 0 ou 1)');
    //     e.target.querySelector('.form-group > input').value = '';
    //     document.querySelector('#results').value = '';
    // }
    const regex = /^[0|1]{0,}$/
    const checkBinValue = regex.test(value);
    console.log(checkBinValue);
    if(checkBinValue) {
        const decimalValue = parseInt(value, 2);
        document.querySelector('#results').value = decimalValue;
    }
    else {
        alert('Veuillez saisir un nombre en binaire (avec des 0 ou 1)');
        e.target.querySelector('.form-group > input').value = '';
        document.querySelector('#results').value = '';
    }
});