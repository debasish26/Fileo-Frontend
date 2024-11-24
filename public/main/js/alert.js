const alertOverlay = document.getElementById('alertOverlay');
        const alertTitle = document.getElementById('alertTitle');
        const alertMessage = document.getElementById('alertMessage');
        const closeAlertBtn = document.getElementById('closeAlert');

        function showAlert(title, message) {
            alertTitle.textContent = title;
            alertMessage.textContent = message;
            alertOverlay.classList.add('show');
        }

        function closeAlert() {
            alertOverlay.classList.remove('show');
        }

        closeAlertBtn.addEventListener('click', closeAlert);

        alertOverlay.addEventListener('click', (e) => {
            if (e.target === alertOverlay) closeAlert();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && alertOverlay.classList.contains('show')) closeAlert();
        });
