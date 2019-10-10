let promise = new Promise(function(resolve, reject) {
  // the function is executed automatically when the promise is constructed

  setTimeout(function() {
    resolve("Hello World");
  }, 1000);
});

promise
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log(error);
  });
