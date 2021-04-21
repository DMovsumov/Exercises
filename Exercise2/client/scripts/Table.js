const renderTable = async (users) => {
    const table = document.querySelector('#users_table')
    /** Очистка таблицы при обновлении */
    table.innerHTML = ''

    users.reverse().forEach(user => {
        const itemView = renderItem(user)
        table.insertAdjacentHTML('afterbegin', itemView)
    })

    await deleteUser()
    await editUser()
}

const editUser = () => {
    const editBtn = document.querySelectorAll('.edit_btn')

    editBtn.forEach(btn => {
        const tr = btn.parentElement.parentElement
        const inputName = tr.querySelector('.input_name')
        const inputPhone = tr.querySelector('.input_phone')

        btn.addEventListener('click', async (e) => {
            e.preventDefault()
            inputName.removeAttribute('readonly')
            inputPhone.removeAttribute('readonly')
            console.log(inputName, inputPhone)
        })
    })
}

const deleteUser = () => {
    const deleteBtn = document.querySelectorAll('.delete_btn')

    deleteBtn.forEach(btn => {
        const tr = btn.parentElement.parentElement
        const id = tr.id
        btn.addEventListener('click', async (e) => {
            e.preventDefault()

            const response = await fetch(`http://localhost:4500/users/${id}`, {
                method: 'delete'
            })

            const data = await response.json()
            await renderTable(data)
        })
    })
}

const renderItem = (user) => {
    const {id, name, phone} = user
    return `
        <tr id="${id}">
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