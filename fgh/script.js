document.getElementById('submissionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Basic validation example
    const bio = document.getElementById('bio').value.trim();
    const stageName = document.getElementById('stageName').value.trim();
    const photo = document.getElementById('photo').files[0];
    const socialUsername = document.getElementById('socialUsername').value.trim();
    const projectTitle = document.getElementById('projectTitle').value.trim();
    const releaseDate = document.getElementById('releaseDate').value;
    const story = document.getElementById('story').value.trim();
    const projectLink = document.getElementById('projectLink').value.trim();
    const submittedBy = document.getElementById('submittedBy').value;
    const submitterName = document.getElementById('submitterName').value.trim();
    const submitterEmail = document.getElementById('submitterEmail').value.trim();

    if (!stageName) {
        alert('Stage Name is required.');
        return;
    }

    if (!photo) {
        alert('Please upload a photo.');
        return;
    }

    if (photo.size > 1024 * 1024 * 1024) { // 1GB size limit
        alert('Photo size must be less than or equal to 1GB.');
        return;
    }

    if (!projectTitle) {
        alert('Project Title is required.');
        return;
    }

    if (!releaseDate) {
        alert('Release Date is required.');
        return;
    }

    if (!submittedBy) {
        alert('Please select who is submitting the form.');
        return;
    }

    if (!submitterName) {
        alert('Submitter Name is required.');
        return;
    }

    if (!submitterEmail) {
        alert('Submitter Email is required.');
        return;
    }

    // Simple email format check
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(submitterEmail)) {
        alert('Please enter a valid email address.');
        return;
    }

    // If all validations pass
    alert('Form submitted successfully!');

    // Here you can add code to actually submit the form data to a server if needed
    // For now, just reset the form
    this.reset();
});
