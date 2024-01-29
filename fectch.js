function http() {

    function add(category) {
        console.log('add');
    }

    function remove(id) {
        console.log('delete');
    }

    function get(id) {
        console.log('get');
    }

    function getall() {
        console.log('get');
    }

    function update() {
        console.log('update');
    }
 
    return { add, remove, get, getall, update };
}