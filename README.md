📂 Project Structure
STUDENT_MANAGEMEBT/
│
├── 📁 frontend/
│   ├── 📄 index.html
│   ├── 📄 script.js
│   └── 🎨 style.css
│
├── 📁 src/
│   ├── 📁 main/
│   │   ├── 📁 java/
│   │   │   └── 📁 com/example/
│   │   │       └── 📁 STUDENT_MANAGEMEBT/
│   │   │           ├── 📁 controller/
│   │   │           │   └── StudentController.java
│   │   │           │
│   │   │           ├── 📁 model/
│   │   │           │   └── Student.java
│   │   │           │
│   │   │           ├── 📁 repository/
│   │   │           │   └── StudentRepository.java
│   │   │           │
│   │   │           ├── 📁 service/
│   │   │           │   └── StudentService.java
│   │   │           │
│   │   │           └── StudentManagemebtApplication.java
│   │   │
│   │   └── 📁 resources/
│   │       └── application.properties
│   │
│   └── 📁 test/
│
├── 📄 pom.xml
├── 📄 .gitignore
├── 📄 mvnw
├── 📄 mvnw.cmd
└── 📄 README.md

System Architecture
                    👤 USER
                      │
                      ▼
              ┌─────────────────┐
              │    FRONTEND     │
              │ HTML + CSS + JS │
              └────────┬────────┘
                       │
                       │ Fetch API
                       ▼
              ┌─────────────────┐
              │   REST API      │
              │ Spring Boot     │
              └────────┬────────┘
                       │
                       ▼
              ┌─────────────────┐
              │ SERVICE LAYER   │
              │ Business Logic  │
              └────────┬────────┘
                       │
                       ▼
              ┌─────────────────┐
              │ REPOSITORY      │
              │ Spring Data JPA │
              └────────┬────────┘
                       │
                       ▼
              ┌─────────────────┐
              │     MySQL       │
              │    Database     │
              └─────────────────┘


📚 Project Information
| Category           | Details                   |
| ------------------ | ------------------------- |
| 🎓 Project         | Student Management System |
| 💻 Type            | CRUD Web Application      |
| 🎨 Frontend        | HTML, CSS, JavaScript     |
| ⚙️ Backend         | Java Spring Boot          |
| 🗄️ Database       | MySQL                     |
| 🌐 API             | REST API                  |
| 🧪 Testing         | Postman                   |
| 🔧 Version Control | Git                       |
| ☁️ Repository      | GitHub                    |


