class Users {
    constructor() {
        this.data = []
    }

    async fetchUsers() {
        const response = await fetch('http://localhost:4500/users');
        this.data = await response.json();

        return this.data;
    }
}