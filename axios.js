const url = 'https://northwind.vercel.app/api/categories';
function http() {

    function add(catagory) {
        axios.post(url , catagory).then(function(response){
            console.log(response.data);
        })
        .catch(function(error){
                console.log(error);
        })
        // console.log('get');
    }

    function remove (id)  {
        axios.remove(`${url}/${id}`).then(function(response){
            console.log(response.data);
        })
        .catch(function(error){
                console.log(error);
        })
        // console.log('delete');
    }

    function get(id) {
        axios.get(`${url}/${id}`).then(function(response){
            console.log(response.data);
        })
        .catch(function(error){
                console.log(error);
        })
        // console.log('get');
    }

    function getall() {
        axios.get(url).then(function(response){
            console.log(response.data);
        })
        .catch(function(error){
                console.log(error);
        })
        // console.log('get');
    }

    function update() {
        console.log('update');
    }
 
    return { add, remove, get, getall, update };
}


// http().getall()
http().get(1)