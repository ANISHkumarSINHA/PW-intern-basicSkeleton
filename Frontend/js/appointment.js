document.addEventListener('DOMContentLoaded', async () => {
    const res = await fetch('/api/teachers', {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    });
    const teachers = await res.json();
    const teacherSelect = document.getElementById('teacher');
    teachers.forEach(teacher => {
        const option = document.createElement('option');
        option.value = teacher._id;
        option.textContent = teacher.name;
        teacherSelect.appendChild(option);
    });

    document.getElementById('appointmentForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const teacher = document.getElementById('teacher').value;
        const date = document.getElementById('date').value;
        const purpose = document.getElementById('purpose').value;
        const res = await fetch('/api/appointments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ teacher, date, purpose })
        });
        if (res.ok) {
            alert('Appointment booked successfully');
            window.location.reload();
        } else {
            const data = await res.json();
            alert(data.message);
        }
    });
});

