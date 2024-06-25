document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const source = document.getElementById('source').value;
    const destination = document.getElementById('destination').value;
    const journeyDate = document.getElementById('journey-date').value;
    const travelClass = document.getElementById('class').value;
    const seats = document.getElementById('seats').value;

    // Simulate API call
    const fakeApiResponse = {
        train: "Express 123",
        date: journeyDate,
        class: travelClass,
        seats: seats,
        totalPrice: seats * 100 // Simulated price
    };

    displayTicketSummary(fakeApiResponse);
});

function displayTicketSummary(data) {
    const summaryDiv = document.getElementById('ticket-summary');
    summaryDiv.innerHTML = `
        <h3>Ticket Summary</h3>
        <p>Train: ${data.train}</p>
        <p>Date: ${data.date}</p>
        <p>Class: ${data.class}</p>
        <p>Seats: ${data.seats}</p>
        <p>Total Price: ${data.totalPrice}</p>
    `;
}
