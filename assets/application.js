console.log("Hello World");
window.addEventListener("load", function (windowLoadEvent) {
    console.log(windowLoadEvent);
    let form = document.getElementById("submissionForm");
    form.addEventListener("submit", async function (formSubmitEvent) {
        formSubmitEvent.preventDefault();
        let formData = new FormData(form)
        try {
            const response = await fetch('https://rocky-fortress-42375.herokuapp.com/student', {
                method: 'POST', // or 'PUT'
                body: formData, // data can be `string` or {object}!
                headers: {
                    'Content-Type': 'application/json'
                }
            });;

            const json = await response.json();
            console.log('Success:', JSON.stringify(json));
        } catch (error) {
            console.error(error);
        }
        console.log(formSubmitEvent);
    })
})