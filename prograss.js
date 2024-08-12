      // Function to calculate the remaining days and update progress
      function updateProgress(dueDate, completionDate) {
        const now = new Date();
        const due = new Date(dueDate);
        const completion = new Date(completionDate);

        const totalDays = (due - completion) / (1000 * 60 * 60 * 24);
        const daysRemaining = Math.max(0, (due - now) / (1000 * 60 * 60 * 24));
        const completionPercentage = ((totalDays - daysRemaining) / totalDays) * 100;

        return completionPercentage;
     }

     // Update progress for each task
     const tasks = document.querySelectorAll('.task');
     tasks.forEach(task => {
        const dueDate = task.querySelector('p').textContent.split(': ')[1];
        const completionDate = task.querySelector('.task-info p:first-child').textContent.split(': ')[1];
        const progressBar = task.querySelector('.progress');
        const renewLink = task.querySelector('.renew-link');

        const completionPercentage = updateProgress(dueDate, completionDate);
        progressBar.style.width = completionPercentage + '%';
        task.querySelector('.task-info p:last-child').textContent = completionPercentage.toFixed(0) + '% done';

        if (completionPercentage >= 99) {
           progressBar.style.backgroundColor = 'green';
           renewLink.style.display = 'block';
        }
     });