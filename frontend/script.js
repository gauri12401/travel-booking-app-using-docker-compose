const form = document.getElementById('bookingForm');
const table = document.getElementById('bookingTable');

form.addEventListener('submit', function(e){

    e.preventDefault();

    const row = `
        <tr>
            <td>${document.getElementById('name').value}</td>
            <td>${document.getElementById('email').value}</td>
            <td>${document.getElementById('destination').value}</td>
            <td>${document.getElementById('people').value}</td>
            <td>${document.getElementById('date').value}</td>
        </tr>
    `;

    table.innerHTML += row;

    form.reset();
});
