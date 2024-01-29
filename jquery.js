const url = "https://northwind.vercel.app/api/categories";
function http() {
  function add(category) {
    // console.log('add');
    $.post(url, category)
      .done(function (response) {
        console.log("EKlem basarili", response);
      })
      .fail(function (err) {
        console.log(err);
      });
  }

  function get(id) {
    // console.log('get');
    $.get(`${url}/${id}`)
      .done(function (response) {
        console.log(response);
      })
      .fail(function (err) {
        console.log(err);
      });
  }

  function getall() {
    // console.log('get');
    $.get(`${url}`)
      .done(function (response) {
        console.log(response);
      })
      .fail(function (err) {
        console.log(err);
      });
  }

  return { add, get, getall };
}

http().getall()
http().add({ name: 'Post category', description: 'POST description' });
http().get(1)