document.addEventListener('DOMContentLoaded', function() {
    const resumeForm = document.getElementById('resumeForm');
    const generatePdfButton = document.getElementById('generatePdfButton');
    const educationContainer = document.getElementById('educationContainer');
    const addEducationButton = document.getElementById('addEducationButton');
    const experienceContainer = document.getElementById('experienceContainer');
    const addExperienceButton = document.getElementById('addExperienceButton');
    const projectContainer = document.getElementById('projectContainer');
    const addProjectButton = document.getElementById('addProjectButton');
    const skillsContainer = document.getElementById('skillsContainer');
    const addSkillButton = document.getElementById('addSkillButton');

    // Event listener for adding Education
    addEducationButton.addEventListener('click', function() {
        const educationTemplate = `
            <div class="education">
                <label>School/University Name:</label>
                <input type="text" class="educationName" name="educationName[]">
                <label>Degree:</label>
                <input type="text" class="degree" name="degree[]">
                <label>Majors:</label>
                <input type="text" class="majors" name="majors[]">
                <label>Period:</label>
                <input type="text" class="period" name="period[]">
                <label>Location:</label>
                <input type="text" class="educationLocation" name="educationLocation[]">
                <label>GPA:</label>
                <input type="text" class="gpa" name="gpa[]">
                <button type="button" class="removeEducationButton">Remove</button>
            </div>
        `;
        const educationWrapper = document.createElement('div');
        educationWrapper.classList.add('educationWrapper');
        educationWrapper.innerHTML = educationTemplate;

        const removeEducationButton = educationWrapper.querySelector('.removeEducationButton');
        removeEducationButton.addEventListener('click', function() {
            educationWrapper.remove();
        });

        educationContainer.appendChild(educationWrapper);
    });

    // Event listener for adding Experience
    addExperienceButton.addEventListener('click', function() {
        const experienceTemplate = `
            <div class="experience">
                <label>Company:</label>
                <input type="text" class="company" name="company[]">
                <label>Job Role:</label>
                <input type="text" class="jobrole" name="jobrole[]">
                <label>Period:</label>
                <input type="text" class="experiencePeriod" name="experiencePeriod[]">
                <label>Location:</label>
                <input type="text" class="experienceLocation" name="experienceLocation[]">
                <button type="button" class="removeExperienceButton">Remove</button>
            </div>
        `;
        const experienceWrapper = document.createElement('div');
        experienceWrapper.classList.add('experienceWrapper');
        experienceWrapper.innerHTML = experienceTemplate;

        const removeExperienceButton = experienceWrapper.querySelector('.removeExperienceButton');
        removeExperienceButton.addEventListener('click', function() {
            experienceWrapper.remove();
        });

        experienceContainer.appendChild(experienceWrapper);
    });

    // Event listener for adding Project
    addProjectButton.addEventListener('click', function() {
        const projectTemplate = `
            <div class="project">
                <label>Project Name:</label>
                <input type="text" class="projectName" name="projectName[]">
                <label>Project Description:</label>
                <textarea class="projectDescription" name="projectDescription[]"></textarea>
                <label>Technology:</label>
                <input type="text" class="technology" name="technology[]">
                <button type="button" class="removeProjectButton">Remove</button>
            </div>
        `;
        const projectWrapper = document.createElement('div');
        projectWrapper.classList.add('projectWrapper');
        projectWrapper.innerHTML = projectTemplate;

        const removeProjectButton = projectWrapper.querySelector('.removeProjectButton');
        removeProjectButton.addEventListener('click', function() {
            projectWrapper.remove();
        });

        projectContainer.appendChild(projectWrapper);
    });

    // Event listener for adding a skill
    addSkillButton.addEventListener('click', function() {
        const skillTemplate = `
            <div class="skill">
                <label>Skill Name:</label>
                <input type="text" class="skillName" name="skillName[]">
                <label>Level:</label>
                <select class="skillLevel" name="skillLevel[]">
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                </select>
                <button type="button" class="removeSkillButton">Remove</button>
            </div>
        `;
        const skillWrapper = document.createElement('div');
        skillWrapper.classList.add('skillWrapper');
        skillWrapper.innerHTML = skillTemplate;

        const removeSkillButton = skillWrapper.querySelector('.removeSkillButton');
        removeSkillButton.addEventListener('click', function() {
            skillWrapper.remove();
        });

        skillsContainer.appendChild(skillWrapper);
    });

    // Event listener for saving overall resume details
    resumeForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const headerData = collectHeaderData();
        const educationData = collectEducationData();
        const experienceData = collectExperienceData();
        const projectData = collectProjectData();
        const skillsData = collectSkillsData();

        const resume = {
            header: headerData,
            education: educationData,
            experience: experienceData,
            projects: projectData,
            skills: skillsData
        };

        saveResume('http://localhost:8080/api/resume', resume);
    });

    // Event listener for generating PDF
    generatePdfButton.addEventListener('click', function() {
        const filename = document.getElementById('name').value;
        generatePDF('http://localhost:8080/api/resumef/' + filename);
    });

    function collectHeaderData() {
        return {
            name: document.getElementById('name').value,
            address: document.getElementById('address').value,
            emailAddress: document.getElementById('emailAddress').value,
            phoneNumber: document.getElementById('phoneNumber').value,
            github: document.getElementById('github').value,
            linkedin: document.getElementById('linkedin').value,
            website: document.getElementById('website').value
        };
    }

    function collectEducationData() {
        const educationWrappers = document.querySelectorAll('.educationWrapper');
        const educationData = [];
        educationWrappers.forEach(wrapper => {
            const educationItem = {
                name: wrapper.querySelector('.educationName').value,
                degree: wrapper.querySelector('.degree').value,
                majors: wrapper.querySelector('.majors').value,
                period: wrapper.querySelector('.period').value,
                location: wrapper.querySelector('.educationLocation').value,
                gpa: wrapper.querySelector('.gpa').value
            };
            educationData.push(educationItem);
        });
        return educationData;
    }

    function collectExperienceData() {
        const experienceWrappers = document.querySelectorAll('.experienceWrapper');
        const experienceData = [];
        experienceWrappers.forEach(wrapper => {
            const experienceItem = {
                company: wrapper.querySelector('.company').value,
                jobrole: wrapper.querySelector('.jobrole').value,
                period: wrapper.querySelector('.experiencePeriod').value,
                location: wrapper.querySelector('.experienceLocation').value
            };
            experienceData.push(experienceItem);
        });
        return experienceData;
    }

    function collectProjectData() {
        const projectWrappers = document.querySelectorAll('.projectWrapper');
        const projectData = [];
        projectWrappers.forEach(wrapper => {
            const projectItem = {
                name: wrapper.querySelector('.projectName').value,
                description: wrapper.querySelector('.projectDescription').value,
                technology: wrapper.querySelector('.technology').value
            };
            projectData.push(projectItem);
        });
        return projectData;
    }

    function collectSkillsData() {
        const skillsMap = {};
        const skillWrappers = document.querySelectorAll('.skillWrapper');
        skillWrappers.forEach(wrapper => {
            const skillName = wrapper.querySelector('.skillName').value;
            const skillLevel = wrapper.querySelector('.skillLevel').value;
            skillsMap[skillName] = skillLevel;
        });
        return skillsMap;
    }

    function saveResume(url, resumeData) {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(resumeData),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text(); // Read the response as text
        })
        .then(data => {
            console.log('Response:', data);
            if (data.trim() === 'Success') { // Check for the specific text response
                alert('Resume saved successfully!');
            } else {
                // Optionally handle other responses if needed
                alert('Resume could not be saved');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            // Optionally show an error message to the user
            alert('An error occurred while saving the resume');
        });
    }
    

    function generatePDF(url) {
        fetch(url, {
            method: 'GET'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.blob();
        })
        .then(blob => {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = document.getElementById('name').value + ".pdf";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while generating PDF');
        });
    }
});
