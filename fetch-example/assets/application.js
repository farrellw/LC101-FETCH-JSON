function init() {
  fetch("https://jsonplaceholder.typicode.com/comments").then(function(
    response
  ) {
    response.json().then(function(json) {
      let div = document.getElementById("comments");
      for (let i = 0; i < json.length; i++) {
        div.innerHTML += `
            <div class="comment" id="ex-comment-${json[i].id}">
                <h1>${json[i].name}</h1>
                <h3>Email: <a href="mailto:${json[i].email}">${json[i].email}</a></h3>
                <p><strong>Comment:</strong> ${json[i].body}</p>
            </div>
          `;
      }
    });
    // Add Code for retrieving comments using fetch() from https://jsonplaceholder.typicode.com/
    // Then code code for adding the comment JSON values to the <div id="comments"> div using a for loop
  });
}

window.onload = init;
