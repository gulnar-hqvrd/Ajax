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
        axios.delete(`${url}/${id}`).then(function(response){
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

    function update(catagory) {
        axios.put(url , catagory.id).then(function(response){
            console.log(response.data);
        })
        .catch(function(error){
                console.log(error);
        })
        // console.log('get');
    }
 
    return { add, remove, get, getall, update };
}


// http().getall()
// http().get(1)

// http().remove(78)
http().update({id : 9, name : "test" , description : "test"})
http().getall()
