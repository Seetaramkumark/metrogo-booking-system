document.getElementById('profile-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simulate updating profile
    console.log('Profile updated:', { username, email, password });
    alert('Profile updated successfully');
});

document.getElementById('wallet-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const amount = document.getElementById('amount').value;

    // Simulate adding funds
    console.log('Funds added:', { amount });
    alert(`Successfully added ${amount} to your wallet`);
});

document.addEventListener('DOMContentLoaded', () => {
    // Simulate fetching booking history
    const fakeBookingHistory = [
        { bookingId: "B123", train: "Express 123", date: "2024-06-30", class: "First Class", seats: 2 },
        { bookingId: "B456", train: "Local 456", date: "2024-07-01", class: "General", seats: 1 }
    ];

    populateBookingHistory(fakeBookingHistory);
});

function populateBookingHistory(data) {
    const historyTable = document.querySelector('.booking-history table tbody');
    historyTable.innerHTML = '';

    data.forEach(booking => {
        const row = historyTable.insertRow();
        row.insertCell(0).textContent = booking.bookingId;
        row.insertCell(1).textContent = booking.train;
        row.insertCell(2).textContent = booking.date;
        row.insertCell(3).textContent = booking.class;
        row.insertCell(4).textContent = booking.seats;
        const actionsCell = row.insertCell(5);
        const downloadBtn = document.createElement('button');
        downloadBtn.textContent = 'Download';
        downloadBtn.addEventListener('click', () => downloadTicket(booking));
        actionsCell.appendChild(downloadBtn);
        const cancelBtn = document.createElement('button');
        cancelBtn.textContent = 'Cancel';
        cancelBtn.addEventListener('click', () => cancelBooking(booking.bookingId));
        actionsCell.appendChild(cancelBtn);
    });
}

function downloadTicket(booking) {
    console.log('Downloading ticket:', booking);
    alert(`Downloading ticket for ${booking.train}`);
}

function cancelBooking(bookingId) {
    console.log('Cancelling booking:', bookingId);
    alert(`Booking ${bookingId} cancelled`);
}
