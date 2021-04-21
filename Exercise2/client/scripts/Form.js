const form = () => {
    const form = document.querySelector('form');
    const inputName = form.querySelector('.input_form_name')
    const inputPhone = form.querySelector('.input_form_phone')

    form.addEventListener('submit', async (e) => {
        e.preventDefault()
        const result = useValidation(inputName.value, inputPhone.value)

        if (result.error) {
            form.insertAdjacentHTML('afterend',`<span style="color: red">${result.text}<span/>`)
        } else {
            const user = {name: inputName.value, phone: inputPhone.value}

            const data = await postUser(user)
            await renderTable(data)
        }
    })
}