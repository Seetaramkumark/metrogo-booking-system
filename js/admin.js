document.addEventListener('DOMContentLoaded', () => {
    // Simulate fetching dashboard data
    const fakeDashboardData = {
        totalBookings: 123,
        totalUsers: 456
    };
    document.getElementById('total-bookings').textContent = fakeDashboardData.totalBookings;
    document.getElementById('total-users').textContent = fakeDashboardData.totalUsers;

    // Simulate fetching train management data
    const fakeTrainData = [
        { trainNumber: "123", trainName: "Express 123", departure: "10:00 AM", arrival: "12:00 PM" },
        { trainNumber: "456", trainName: "Local 456", departure: "11:00 AM", arrival: "1:00 PM" }
    ];
    populateTrainTable(fakeTrainData);

    // Simulate fetching user management data
    const fakeUserData = [
        { userId: "U123", username: "john_doe", email: "john@example.com", status: "Active" },
        { userId: "U456", username: "jane_doe", email: "jane@example.com", status: "Inactive" }
    ];
    populateUserTable(fakeUserData);

    // Simulate generating report data
    generateBookingReport();
});

document.getElementById('add-train-btn').addEventListener('click', () => {
    // Simulate adding a train
    alert('Add Train button clicked');
});

function populateTrainTable(data) {
    const trainTable = document.querySelector('.manage-trains table tbody');
    trainTable.innerHTML = '';

    data.forEach(train => {
        const row = trainTable.insertRow();
        row.insertCell(0).textContent = train.trainNumber;
        row.insertCell(1).textContent = train.trainName;
        row.insertCell(2).textContent = train.departure;
        row.insertCell(3).textContent = train.arrival;
        const actionsCell = row.insertCell(4);
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        actionsCell.appendChild(editBtn);
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        actionsCell.appendChild(deleteBtn);
    });
}

function populateUserTable(data) {
    const userTable = document.querySelector('.user-management table tbody');
    userTable.innerHTML = '';

    data.forEach(user => {
        const row = userTable.insertRow();
        row.insertCell(0).textContent = user.userId;
        row.insertCell(1).textContent = user.username;
        row.insertCell(2).textContent = user.email;
        row.insertCell(3).textContent = user.status;
        const actionsCell = row.insertCell(4);
        const deactivateBtn = document.createElement('button');
        deactivateBtn.textContent = 'Deactivate';
        actionsCell.appendChild(deactivateBtn);
        const activateBtn = document.createElement('button');
        activateBtn.textContent = 'Activate';
        actionsCell.appendChild(activateBtn);
    });
}

function generateBookingReport() {
    const ctx = document.getElementById('booking-report').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Bookings',
                data: [12, 19, 3, 5, 2, 3, 9],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
