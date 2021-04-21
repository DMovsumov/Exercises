!(async () => {
    window.addEventListener('load', async () => {
        const users = await getUsers();

        await renderTable(users);
        await form();
    })
})()

