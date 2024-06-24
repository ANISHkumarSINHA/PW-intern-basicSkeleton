document.addEventListener('DOMContentLoaded', async () => {
    const res = await fetch('/api/teachers', {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    });
    const teachers = await res.json();
    const teachersDiv = document.getElementById('teachers');
    teachers.forEach(teacher => {
        const div = document.createElement('div');
        div.innerHTML = `
            <p><strong>Name:</strong> ${teacher.name}</p>
            <p><strong>Department:</strong> ${teacher.department}</p>
            <p><strong>Subject:</strong> ${teacher.subject}</p>
            <hr>
        `;
        teachersDiv.appendChild(div);
    });

    document.getElementById('teacherForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const department = document.getElementById('department').value;
        const subject = document.getElementById('subject').value;
        const res = await fetch('/api/teachers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ name, department, subject })
        });
        if (res.ok) {
            alert('Teacher added successfully');
            window.location.reload();
        } else {
            const data = await res.json();
            alert(data.message);
        }
    });
});

