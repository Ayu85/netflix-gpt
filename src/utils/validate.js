
const validate = (email, passowrd) => {
    let emailError = false;
    let passwordError = false;
    var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    // if (!email?.includes("@gmail.com"))
    //     emailError = true
    // if (!regularExpression.test(passowrd))
    //     passwordError = true
    if (!email?.includes("@gmail.com") || !regularExpression.test(passowrd))
        return true;

    return false;

}

export default validate
