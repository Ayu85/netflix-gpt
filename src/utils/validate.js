import React from 'react'

const validate = (email, passowrd) => {
    var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (!email.includes("@gmail.com"))
        return "Invalid email"
    else if ( !regularExpression.test(passowrd))
        return "Invalid password"
    else
        return null;

}

export default validate
