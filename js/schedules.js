document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-train');
    const scheduleTable = document.getElementById('train-schedule').getElementsByTagName('tbody')[0];

    searchInput.addEventListener('input', function() {
        const filter = this.value.toLowerCase();
        const rows = scheduleTable.getElementsByTagName('tr');
        
        Array.from(rows).forEach(row => {
            const cells = row.getElementsByTagName('td');
            const trainName = cells[1].textContent.toLowerCase();
            if (trainName.includes(filter)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });

    // Simulate fetching train schedules
    const fakeScheduleData = [
        { trainNumber: "123", trainName: "Express 123", departure: "10:00 AM", arrival: "12:00 PM", status: "On Time" },
        { trainNumber: "456", trainName: "Local 456", departure: "11:00 AM", arrival: "1:00 PM", status: "Delayed" }
    ];

    populateScheduleTable(fakeScheduleData);
});

function populateScheduleTable(data) {
    const scheduleTable = document.getElementById('train-schedule').getElementsByTagName('tbody')[0];
    scheduleTable.innerHTML = '';

    data.forEach(schedule => {
        const row = scheduleTable.insertRow();
        row.insertCell(0).textContent = schedule.trainNumber;
        row.insertCell(1).textContent = schedule.trainName;
        row.insertCell(2).textContent = schedule.departure;
        row.insertCell(3).textContent = schedule.arrival;
        row.insertCell(4).textContent = schedule.status;
    });
}
