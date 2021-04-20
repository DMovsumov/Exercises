class UserItemView {
    constructor() {

    }

    renderItem(item) {
        const { name, phone } = item;
        const createElement = document.createElement('tr')

        createElement.innerHTML = `
            <th><input type="text" value="${name}" readonly title="Name"></th>
            <th><input type="text" value="${phone}" readonly title="Phone"></th>
            <th>
                <button>Редактировать</button>
                <button>Удалить</button>
            </th>
        `

        return createElement
    }
}