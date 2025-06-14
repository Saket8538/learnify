// This file contains the JavaScript code for the web app. 
// It handles the interactive functionality, such as event listeners and dynamic content updates.

document.addEventListener('DOMContentLoaded', () => {
    const welcomeMessage = document.getElementById('welcome-message');
    welcomeMessage.textContent = 'Welcome to the Learning Platform!';

    const button = document.getElementById('learn-more-button');
    button.addEventListener('click', () => {
        alert('More learning resources will be available soon!');
    });

    const courseList = document.getElementById('course-list');
    courseList.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            e.target.classList.toggle('selected');
            alert(`You selected: ${e.target.textContent}`);
        }
    });

    // Navbar button functionality
    const homeBtn = document.getElementById('home-btn');
    const coursesBtn = document.getElementById('courses-btn');
    const aboutBtn = document.getElementById('about-btn');
    const courseSection = courseList.closest('section');
    const aboutSection = document.getElementById('about-section');
    const infoSection = document.getElementById('info-section');
    const aboutInfo = document.getElementById('about-info');
    const coursesInfo = document.getElementById('courses-info');

    function setActive(btn) {
        [homeBtn, coursesBtn, aboutBtn].forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    }

    function hideAllInfo() {
        infoSection.style.display = 'none';
        aboutInfo.style.display = 'none';
        coursesInfo.style.display = 'none';
    }

    homeBtn.addEventListener('click', () => {
        setActive(homeBtn);
        courseSection.style.display = '';
        aboutSection.style.display = 'none';
        hideAllInfo();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    coursesBtn.addEventListener('click', () => {
        setActive(coursesBtn);
        courseSection.style.display = '';
        aboutSection.style.display = 'none';
        hideAllInfo();
        infoSection.style.display = '';
        coursesInfo.style.display = '';
        infoSection.scrollIntoView({ behavior: 'smooth' });
    });

    aboutBtn.addEventListener('click', () => {
        setActive(aboutBtn);
        courseSection.style.display = 'none';
        aboutSection.style.display = '';
        hideAllInfo();
        infoSection.style.display = '';
        aboutInfo.style.display = '';
        infoSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Set Home as active by default
    setActive(homeBtn);
});