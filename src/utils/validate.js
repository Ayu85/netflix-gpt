
const validate = (email, passowrd) => {
    let emailError = '';
    let passwordError = '';
    var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (!email?.includes("@gmail.com"))
        emailError = "Invalid email"
    if (!regularExpression.test(passowrd))
        passwordError = "Invalid password"

    return { emailError, passwordError }

}

export default validate
