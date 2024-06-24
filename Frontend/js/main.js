document.addEventListener('DOMContentLoaded', async () => {
    const res = await fetch('/api/appointments', {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    });
    const appointments = await res.json();
    const appointmentsDiv = document.getElementById('appointments');
    appointments.forEach(appointment => {
        const div = document.createElement('div');
        div.innerHTML = `
            <p><strong>Student:</strong> ${appointment.student.name}</p>
            <p><strong>Teacher:</strong> ${appointment.teacher.name}</p>
            <p><strong>Date:</strong> ${new Date(appointment.date).toLocaleString()}</p>
            <p><strong>Purpose:</strong> ${appointment.purpose}</p>
            <p><strong>Status:</strong> ${appointment.status}</p>
            <hr>
        `;
        appointmentsDiv.appendChild(div);
    });
});
