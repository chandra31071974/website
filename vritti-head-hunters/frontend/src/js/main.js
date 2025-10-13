// This file contains JavaScript code for handling frontend interactions, such as form submissions and dynamic content updates.

document.addEventListener('DOMContentLoaded', () => {
    // Handle form submission for contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());

            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                if (response.ok) {
                    alert('Your message has been sent successfully!');
                    contactForm.reset();
                } else {
                    alert('There was an error sending your message. Please try again.');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('There was an error sending your message. Please try again.');
            }
        });
    }

    // Dynamic content updates for job listings on careers page
    const jobListingsContainer = document.getElementById('job-listings');
    if (jobListingsContainer) {
        fetch('/api/jobs')
            .then(response => response.json())
            .then(jobs => {
                jobs.forEach(job => {
                    const jobElement = document.createElement('div');
                    jobElement.classList.add('job-listing');
                    jobElement.innerHTML = `
                        <h3>${job.title}</h3>
                        <p>${job.description}</p>
                        <button class="apply-button" data-id="${job.id}">Apply Now</button>
                    `;
                    jobListingsContainer.appendChild(jobElement);
                });

                // Add event listeners to apply buttons
                const applyButtons = document.querySelectorAll('.apply-button');
                applyButtons.forEach(button => {
                    button.addEventListener('click', () => {
                        const jobId = button.getAttribute('data-id');
                        // Handle job application logic here
                        alert(`You have applied for job ID: ${jobId}`);
                    });
                });
            })
            .catch(error => console.error('Error fetching job listings:', error));
    }
});