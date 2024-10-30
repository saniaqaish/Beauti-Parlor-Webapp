document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Here you would typically send this data to a server
    // For this example, we'll just display a message
    document.getElementById("responseMessage").innerText = `Thank you, ${name}! Your message has been sent.`;

    // Reset the form
    this.reset();
});
