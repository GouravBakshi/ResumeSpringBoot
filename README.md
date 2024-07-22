# ResumeSpringBoot
# Resume Builder Project

This project is a Resume Builder application that allows users to create and save their resumes digitally. It includes both frontend and backend components to manage and generate resumes.

## Frontend

The frontend of the Resume Builder project is responsible for providing a user-friendly interface where users can input their resume details, add education, experience, projects, and skills dynamically, and then save or generate a PDF of their resume.

### Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Fetch API for communication with the backend

### Features

- **Dynamic Form**: Allows users to input their personal details, education, experience, projects, and skills using dynamically added input fields.
- **Additions**: Buttons to dynamically add new sections for education, experience, projects, and skills.
- **PDF Generation**: Users can generate a PDF version of their resume based on the entered details.
- **Responsive Design**: The interface is designed to be responsive, ensuring usability across different devices.

### Setup Instructions

1. Clone the repository: `git clone <repository_url>`
2. Navigate to the frontend directory: `cd frontend`
3. Open `index.html` in your web browser to use the application.

## Backend

The backend of the Resume Builder project handles storing resume data and generating PDFs based on the stored data. It provides APIs for saving resumes and generating PDFs dynamically using Spring Boot and iTextPDF.

### Technologies Used

- Java
- Spring Boot
- iTextPDF for PDF generation

### Features

- **RESTful API**: Provides endpoints for saving resume data (`POST /api/resume`) and generating PDFs (`GET /api/resumef/:filename`).
- **PDF Generation**: Dynamically generates PDF files based on stored resume data using iTextPDF library.

### Setup Instructions

1. Clone the repository: `git clone <repository_url>`
2. Navigate to the backend directory: `cd backend`
3. Open the project in your preferred IDE (e.g., IntelliJ IDEA, Eclipse).
4. Configure your MongoDB connection details in `application.properties`.
5. Start the Spring Boot application.
6. The backend server will run on `http://localhost:8080`.

### API Endpoints

- **POST `/api/resume`**: Saves resume data to the database.
- **GET `/api/resumef/:filename`**: Generates and downloads a PDF of the resume based on the filename.

### PDF Generation with iTextPDF

The PDF generation in this project is handled by iTextPDF library, which is widely used for creating and manipulating PDF documents in Java.

### ScreenShots
- Form Screenshot
  
![image](https://github.com/user-attachments/assets/927d5c0e-0ea6-425d-b7af-842f4ca52580)

- Generate pdf

![image](https://github.com/user-attachments/assets/a5670a2f-8bc8-429c-9ebe-ed39cb343c41)


### Example:- 

[John Doe.pdf](https://github.com/user-attachments/files/16324407/John.Doe.pdf)
