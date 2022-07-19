

function fnCalculateAge() {

    let birthday = document.getElementById('inputBirthday').value;
    let date_birthday = new Date(birthday);
    console.log(birthday);

    let differenceBetweenNowAndBirthday = (Date.now() - date_birthday.getTime());
    let age = new Date(differenceBetweenNowAndBirthday);

    // ???
    let ageOutput = Math.abs(age.getUTCFullYear() - 1970);
    console.log(ageOutput);



    document.getElementById('divAge').innerHTML = 'Your are ' + ageOutput + ' years old!';


}

