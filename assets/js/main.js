

function fnCompareAge() {

    let age1 = document.getElementById('inputAge1').value;
    let age2 = document.getElementById('inputAge2').value;

    if (age1 > age2) {
        console.log(age1 + ' is older than ' + age2);
        document.getElementById('divComparisonOutput').innerHTML = age1 + ' is older than ' + age2;
    } else if (age1 < age2) {
        console.log(age1 + ' is younger than ' + age2);
        document.getElementById('divComparisonOutput').innerHTML = age1 + ' is younger than ' + age2;
    } else {
        console.log(age1 + ' = ' + age2);
        document.getElementById('divComparisonOutput').innerHTML = age1 + ' = ' + age2;
    }


}

