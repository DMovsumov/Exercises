const table = document.querySelector('#users_table')
const users = new Users();
const userView = new UserItemView();

!(async () => {
    const userData = await users.fetchUsers()

    await userData.map((item) => {
        const itemView = userView.renderItem(item)
        table.insertAdjacentElement('afterbegin', itemView)
    })
})()