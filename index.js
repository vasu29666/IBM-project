document.addEventListener('DOMContentLoaded', () => {
    const documentUpload = document.getElementById('document-upload');
    const documentList = document.getElementById('document-list');

    documentUpload.addEventListener('change', (e) => {
        for (let i = 0; i < e.target.files.length; i++) {
            const li = document.createElement('li');
            li.textContent = e.target.files[i].name;
            documentList.appendChild(li);
        }
    });

    const deadlineForm = document.getElementById('deadline-form');
    const deadlineList = document.getElementById('deadline-list');

    deadlineForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const caseName = document.getElementById('case-name').value;
        const deadlineDate = document.getElementById('deadline-date').value;
        const li = document.createElement('li');
        li.textContent = `${caseName} - ${deadlineDate}`;
        deadlineList.appendChild(li);
        deadlineForm.reset();
    });

    const messageForm = document.getElementById('message-form');
    const messageList = document.getElementById('message-list');

    messageForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const clientName = document.getElementById('client-name').value;
        const message = document.getElementById('message').value;
        const li = document.createElement('li');
        li.textContent = `To: ${clientName} - ${message}`;
        messageList.appendChild(li);
        messageForm.reset();
    });
});
