const FormatedCardNumber = (value) => {
    return value.padEnd(16, '0')
                .replace(/(\d{4})/g,'$1 ')  
                .trim()
}

export default FormatedCardNumber