# 📂 Project Structure

```text
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


# 🏗️ System Architecture

```text
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
              │    REST API     │
              │   Spring Boot   │
              └────────┬────────┘
                       │
                       ▼
              ┌─────────────────┐
              │  SERVICE LAYER  │
              │  Business Logic │
              └────────┬────────┘
                       │
                       ▼
              ┌─────────────────┐
              │   REPOSITORY    │
              │ Spring Data JPA │
              └────────┬────────┘
                       │
                       ▼
              ┌─────────────────┐
              │      MySQL      │
              │     Database    │
              └─────────────────┘
```
├── 📄 mvnw.cmd
└── 📄 README.md
```
