 const form = document.querySelector("form");
    const nameInput = form.querySelector("input[type='text']");
    const emailInput = form.querySelector("input[type='email']");
    const messageInput = form.querySelector("textarea");

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        let name = nameInput.value.trim();
        let email = emailInput.value.trim();
        let message = messageInput.value.trim();

        // Simple email regex
        let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if(name === "") {
            alert("Please enter your name");
            return;
        }

        if(!email.match(emailPattern)) {
            alert("Please enter valid email");
            return;
        }

        if(message === "") {
            alert("Please enter your message");
            return;
        }

        alert("Message Sent Successfully");

        // Clear form after success
        form.reset();
    });
