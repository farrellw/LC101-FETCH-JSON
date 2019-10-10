function init() {
  //  Get from the API "https://jsonplaceholder.typicode.com/comments"
  console.log("Hello World");
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      let commentsTag = document.getElementById("comments-list");

      for (let i = 0; i < json.length; i++) {
        let comment = json[i].body;
        let commentTag = `<li>${comment}</li>`;
        commentsTag.innerHTML += commentTag;
      }
    });
}

window.onload = init;
