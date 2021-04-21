!(async () => {
    window.addEventListener('load', async () => {
        const response = await fetch('http://localhost:4500/users');
        const users = await response.json();

        await renderTable(users);
        await form();
    })
})()

