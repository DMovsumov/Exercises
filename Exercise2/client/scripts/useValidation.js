const useValidation = (name, phone) => {
    const regexpPhone = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g

    const checkPhone = phone ? phone.match(regexpPhone) : []

    if (name.length < 2) {
        return {
            error: true,
            text: 'Имя не может быть пустым или состоять из одной буквы!'
        }
    }

    if (!phone.length) {
        return {
            error: true,
            text: 'Телефон не может быть пустым!'
        }
    }

    if (!checkPhone) {
        return {
            error: true,
            text: 'Телефон введен неверно!'
        }
    }


    return {
        error: false
    }
}