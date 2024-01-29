const url = 'https://northwind.vercel.app/api/categories';

function http() {
    function add(category) {
        fetch(`${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(category)
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
    }

    function remove(id) {
        fetch(`${url}/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
    }

    function get(id) {
        fetch(`${url}/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
    }

    function getall() {
        fetch(`${url}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
    }

    function update(category) {
        fetch(`${url}/${category.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(category)
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
    }

    return { add, remove, get, getall, update };
}

http().add({ name: 'fetch category', description: 'fetch description' });
// http().update({ id: 13, name: 'fetch category', description: 'fetch description' });
// http().get(13);
for (let i = 1; i < 90; i++) {
    // http().remove(i);
}

http().getall();