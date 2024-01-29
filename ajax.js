$(() => {

    $(document).ajaxStart(() => {
        $("#loading").show();
    });
    
    $(document).ajaxStop(() => {
        $("#loading").hide();
    });


    const url = 'https://northwind.vercel.app/api/categories';

    function http() {
        function add(data) {
            $.ajax({
                url: `${url}`,  // += id
                type: 'POST', //GET, POST, PUT
                contentType: 'application/json',
                // data: data,
                data: JSON.stringify(data),
                // data: data,
                success: function (data) {
                    console.log(data);
                },
                error: function (err) {
                    console.log(err);
                },
            });
        }

        function remove(id) {
            $.ajax({
                url: `${url}/${id}`,
                type: 'DELETE',
                success: function (data) {
                    console.log(data);
                },
                error: function (err) {
                    console.log(err);
                },
            });
        }

        function get(id) {
            $.ajax({
                url: `${url}/${id}`,
                type: 'GET',
                success: function (data) {
                    console.log(data);
                },
                error: function (err) {
                    console.log(err);
                },
            });
        }

        function getall() {
            $.ajax({
                url: `${url}`,
                type: 'GET',
                success: function (data) {
                    console.log(data);
                },
                error: function (err) {
                    console.log(err);
                },
            });
        }

        // function update(id, data) {
        function update(data) {
            $.ajax({
                // url: `${url}/${id}`,
                url: `${url}/${data.id}`,
                type: 'PUT',
                contentType: 'application/json',
                data: JSON.stringify(data),
                success: function (data) {
                    console.log(data);
                },
                error: function (err) {
                    console.log(err);
                },
            });
        }

        return { add, remove, get, getall, update };
    }



    // let todo = {
    //     "name": "Ajax Example",
    //     "isCompleted": false,
    //     "icon": "ajax.png"
    // };


    // http().add(todo);

    let category = {
        id: 2,
        name: "Beverages c",
        description: "Soft drinks1111"
    }

    // http().add(category);
    // http().get(1);
    // http().remove(1);
    http().getall();
    // http().update(2, category);
    http().update(category);
});
