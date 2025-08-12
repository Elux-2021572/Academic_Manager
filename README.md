# 🎓 Academic Manager

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node.js](https://img.shields.io/badge/Node.js-v16+-green.svg)
![JavaScript](https://img.shields.io/badge/JavaScript-100%25-yellow.svg)

A comprehensive academic management system designed to streamline educational administration. This platform offers tools for managing student records, course registration, grade tracking, academic scheduling, and faculty management.

## ✨ Features

- **User Authentication**: Role-based access for administrators, teachers, and students
- **Student Management**: Registration, profiles, academic history, and attendance tracking
- **Course Administration**: Create, edit, and manage courses and their content
- **Grade Management**: Record, calculate, and report student grades and performance
- **Schedule Management**: Create and manage class schedules and academic calendars
- **Faculty Management**: Track teacher information, assignments, and workload
- **Report Generation**: Generate academic reports, transcripts, and statistics
- **Communication Tools**: Messaging system between administrators, teachers, and students
- **Resource Management**: Track educational resources, classrooms, and equipment
- **Responsive Interface**: Accessible from any device with internet connection

## 🛠️ Technologies Used

- **Node.js**: Server-side JavaScript runtime
- **Express**: Web application framework
- **MongoDB/Mongoose**: Database and ODM for data storage
- **JWT**: Authentication and authorization
- **RESTful API**: Structured backend endpoints
- **React/Vue/Angular**: Frontend framework (if applicable)
- **WebSockets**: Real-time updates and notifications

## 🚀 Installation and Setup

### 1. Clone the repository
```bash
git clone https://github.com/Elux-2021572/Gestor_Academico.git
cd Gestor_Academico
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
Create a `.env` file in the root directory with the following content:
```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/academic_manager
JWT_SECRET=your_super_secure_secret
EMAIL_SERVICE=your_email_service
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
```

> **Note:** Change the values according to your configuration.

### 4. Run the server
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

## 📌 Available Endpoints

### Authentication
- **Login:** `POST /api/auth/login`
- **Register:** `POST /api/auth/register`
- **Reset Password:** `POST /api/auth/reset-password`

### Students
- **Get All Students:** `GET /api/students`
- **Get Student by ID:** `GET /api/students/:id`
- **Create Student:** `POST /api/students`
- **Update Student:** `PUT /api/students/:id`
- **Delete Student:** `DELETE /api/students/:id`
- **Get Student Grades:** `GET /api/students/:id/grades`

### Courses
- **Get All Courses:** `GET /api/courses`
- **Get Course by ID:** `GET /api/courses/:id`
- **Create Course:** `POST /api/courses`
- **Update Course:** `PUT /api/courses/:id`
- **Delete Course:** `DELETE /api/courses/:id`
- **Get Course Students:** `GET /api/courses/:id/students`

### Grades
- **Get All Grades:** `GET /api/grades`
- **Submit Grade:** `POST /api/grades`
- **Update Grade:** `PUT /api/grades/:id`
- **Delete Grade:** `DELETE /api/grades/:id`

### Teachers
- **Get All Teachers:** `GET /api/teachers`
- **Get Teacher by ID:** `GET /api/teachers/:id`
- **Create Teacher:** `POST /api/teachers`
- **Update Teacher:** `PUT /api/teachers/:id`
- **Delete Teacher:** `DELETE /api/teachers/:id`
- **Get Teacher Courses:** `GET /api/teachers/:id/courses`

## 🔑 Authentication and Authorization

Protected routes require a JWT token in the request headers:
```json
{
  "Authorization": "Bearer <your_token_here>"
}
```

User roles and permissions:
- **Admin**: Full access to all features
- **Teacher**: Access to assigned courses, students, and grades
- **Student**: Access to personal information, courses, and grades

## 📖 Usage Examples

### Student Registration
```javascript
fetch('http://localhost:3000/api/students', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer your_admin_token_here'
  },
  body: JSON.stringify({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    studentId: 'S12345',
    dateOfBirth: '2000-01-01',
    enrollmentDate: '2022-09-01'
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
```

### Submitting Grades
```javascript
fetch('http://localhost:3000/api/grades', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer your_teacher_token_here'
  },
  body: JSON.stringify({
    studentId: 'student_id_here',
    courseId: 'course_id_here',
    grade: 85,
    semester: 'Fall 2023',
    comments: 'Excellent work on the final project'
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

- **Elux-2021572** - [GitHub Profile](https://github.com/Elux-2021572)

---

Made with ❤️ by Elux-2021572
