const table = document.querySelector('#users_table')

const renderTable = async (users) => {
    /** Очистка таблицы при обновлении */
    table.innerHTML = ''

    users.reverse().forEach(user => {
        const itemView = renderItem(user)
        table.insertAdjacentHTML('afterbegin', itemView)
    })

    await deleteBlockUser()
    await editUser()
}

const editUser = () => {
    /** Получаем строки юзеров */
    const userBlocks = document.querySelectorAll('.user_block')

    /** Перебираем и взаимодействуем */
    userBlocks.forEach(block => {
        const ediBtn = block.querySelector('.edit_btn')
        const inputName = block.querySelector('.input_name')
        const inputPhone = block.querySelector('.input_phone')
        const id = block.id

        ediBtn.addEventListener('click', async (e) => {
            e.preventDefault()

            if (e.target.classList.contains('save_btn')) {

                const result = useValidation(inputName.value, inputPhone.value)

                if (result.error) {
                    showError(block, result.text)
                } else {
                    e.target.classList.remove('save_btn')
                    e.target.textContent = 'Редактировать'
                    const users = await putUser(id, {name: inputName.value, phone: inputPhone.value})
                    await renderTable(users)
                }

            } else {
                inputName.removeAttribute('readonly')
                inputPhone.removeAttribute('readonly')
                e.target.classList.add('save_btn')
                e.target.textContent = 'Сохранить'
            }
        })
    })
}

const deleteBlockUser = () => {
    const deleteBtn = document.querySelectorAll('.delete_btn')

    deleteBtn.forEach(btn => {
        const tr = btn.parentElement.parentElement
        const id = tr.id
        btn.addEventListener('click', async (e) => {
            e.preventDefault()

            const data = await deleteUser(id);
            await renderTable(data)
        })
    })
}

const renderItem = (user) => {
    const {id, name, phone} = user
    return `
        <tr id="${id}" class="user_block">
            <th>
                <input type="text" value="${name}" class="input_name" readonly title="Name">
            </th>
            <th>
                <input type="tel" value="${phone}" class="input_phone" readonly title="Phone">
            </th>
            <th>
                <button class="edit_btn">Редактировать</button>
                <button class="delete_btn">Удалить</button>
            </th>
        </tr>
    `
}

const showError = (place, text) => {
    return place.insertAdjacentHTML('afterend', `<span style="color: red" class="text_error">${text}<span/>`)
}
