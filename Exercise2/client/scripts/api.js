const getUsers = async () => {
    const response = await fetch('http://localhost:4500/users');
    const users = await response.json();

    return users
}

const deleteUser = async (id) => {
    const response = await fetch(`http://localhost:4500/users/${id}`, {
        method: 'delete'
    })
    const users = await response.json()

    return users
}

const putUser = async (id, data) => {
    const response = await fetch(`http://localhost:4500/users/${id}`, {
        method: 'put',
        body: JSON.stringify({data})
    })
    const users = await response.json()

    return users;
}

const postUser = async (user) => {
    const response = await fetch(`http://localhost:4500/users`, {
        method: 'post',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(user)
    })

    const data = await response.json()

    return data
}