const API_URL = "http://localhost:8080/api/students";

document.addEventListener("DOMContentLoaded", loadStudents);


// ===============================
// SAVE STUDENT - CREATE / UPDATE
// ===============================

async function saveStudent() {

    // First validate the form
    if (!validateForm()) {
        return;
    }

    const id = document.getElementById("studentId").value;

    const student = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        department: document.getElementById("department").value.trim(),
        phone: document.getElementById("phone").value.trim(),
        year: parseInt(document.getElementById("year").value)
    };

    try {

        let response;

        if (id) {

            // UPDATE
            response = await fetch(`${API_URL}/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(student)
            });

        } else {

            // CREATE
            response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(student)
            });
        }

        if (response.ok) {

            alert(id
                ? "Student updated successfully!"
                : "Student added successfully!"
            );

            clearForm();
            loadStudents();

        } else {

            // Try to read backend error message
            let message = "Something went wrong!";

            try {
                const errorData = await response.json();

                if (errorData.message) {
                    message = errorData.message;
                }

            } catch (error) {
                console.log("No JSON error response.");
            }

            alert(message);

        }

    } catch (error) {

        console.error(error);

        alert("Cannot connect to Spring Boot server.");

    }
}


// ===============================
// LOAD ALL STUDENTS
// ===============================

async function loadStudents() {

    try {

        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Failed to load students");
        }

        const students = await response.json();

        displayStudents(students);

    } catch (error) {

        console.error(error);

        alert("Cannot load students.");

    }
}


// ===============================
// DISPLAY STUDENTS
// ===============================

function displayStudents(students) {

    const tableBody = document.getElementById("studentTableBody");

    tableBody.innerHTML = "";

    if (students.length === 0) {

        tableBody.innerHTML = `
            <tr>
                <td colspan="7" style="text-align:center;">
                    No students found
                </td>
            </tr>
        `;

        return;
    }

    students.forEach(student => {

        const row = `
            <tr>

                <td>${student.id}</td>

                <td>${student.name}</td>

                <td>${student.email}</td>

                <td>${student.department}</td>

                <td>${student.phone}</td>

                <td>${student.year}</td>

                <td>

                    <button
                        class="edit-btn"
                        onclick="editStudent(${student.id})">
                        Edit
                    </button>

                    <button
                        class="delete-btn"
                        onclick="deleteStudent(${student.id})">
                        Delete
                    </button>

                </td>

            </tr>
        `;

        tableBody.innerHTML += row;

    });
}


// ===============================
// EDIT STUDENT
// ===============================

async function editStudent(id) {

    try {

        const response = await fetch(`${API_URL}/${id}`);

        if (!response.ok) {
            throw new Error("Student not found");
        }

        const student = await response.json();

        document.getElementById("studentId").value = student.id;

        document.getElementById("name").value = student.name;

        document.getElementById("email").value = student.email;

        document.getElementById("department").value = student.department;

        document.getElementById("phone").value = student.phone;

        document.getElementById("year").value = student.year;

        // Clear previous validation messages
        clearErrors();

    } catch (error) {

        console.error(error);

        alert("Unable to get student details.");

    }
}


// ===============================
// DELETE STUDENT
// ===============================

async function deleteStudent(id) {

    if (!confirm("Are you sure you want to delete this student?")) {
        return;
    }

    try {

        const response = await fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        });

        if (response.ok) {

            alert("Student deleted successfully!");

            loadStudents();

        } else {

            alert("Student could not be deleted.");

        }

    } catch (error) {

        console.error(error);

        alert("Cannot connect to Spring Boot server.");

    }
}


// ===============================
// FORM VALIDATION
// ===============================

function validateForm() {

    // Clear old errors first
    clearErrors();

    let isValid = true;

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const department = document.getElementById("department").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const year = document.getElementById("year").value;


    // NAME VALIDATION

    if (name === "") {

        showError("nameError", "Name is required.");

        isValid = false;

    } else if (name.length < 2) {

        showError("nameError", "Name must contain at least 2 characters.");

        isValid = false;
    }


    // EMAIL VALIDATION

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {

        showError("emailError", "Email is required.");

        isValid = false;

    } else if (!emailPattern.test(email)) {

        showError("emailError", "Enter a valid email address.");

        isValid = false;
    }


    // DEPARTMENT VALIDATION

    if (department === "") {

        showError(
            "departmentError",
            "Department is required."
        );

        isValid = false;
    }


    // PHONE VALIDATION

    const phonePattern = /^[0-9]{10}$/;

    if (phone === "") {

        showError(
            "phoneError",
            "Phone number is required."
        );

        isValid = false;

    } else if (!phonePattern.test(phone)) {

        showError(
            "phoneError",
            "Phone number must contain exactly 10 digits."
        );

        isValid = false;
    }


    // YEAR VALIDATION

    if (year === "") {

        showError(
            "yearError",
            "Year is required."
        );

        isValid = false;

    } else if (year < 1 || year > 4) {

        showError(
            "yearError",
            "Year must be between 1 and 4."
        );

        isValid = false;
    }


    return isValid;
}


// ===============================
// SHOW VALIDATION ERROR
// ===============================

function showError(elementId, message) {

    document.getElementById(elementId).textContent = message;

}


// ===============================
// CLEAR VALIDATION ERRORS
// ===============================

function clearErrors() {

    document.getElementById("nameError").textContent = "";

    document.getElementById("emailError").textContent = "";

    document.getElementById("departmentError").textContent = "";

    document.getElementById("phoneError").textContent = "";

    document.getElementById("yearError").textContent = "";

}


// ===============================
// SEARCH STUDENTS
// ===============================

async function searchStudents() {

    const keyword =
        document.getElementById("searchInput").value
        .trim()
        .toLowerCase();


    // If search box is empty,
    // show all students again.

    if (keyword === "") {

        loadStudents();

        return;
    }


    try {

        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Failed to load students");
        }

        const students = await response.json();


        // Search by:
        // Name
        // Email
        // Department

        const filteredStudents = students.filter(student =>

            student.name.toLowerCase().includes(keyword) ||

            student.email.toLowerCase().includes(keyword) ||

            student.department.toLowerCase().includes(keyword)

        );


        displayStudents(filteredStudents);


    } catch (error) {

        console.error(error);

        alert("Unable to search students.");

    }
}


// ===============================
// CLEAR FORM
// ===============================

function clearForm() {

    document.getElementById("studentId").value = "";

    document.getElementById("name").value = "";

    document.getElementById("email").value = "";

    document.getElementById("department").value = "";

    document.getElementById("phone").value = "";

    document.getElementById("year").value = "";

    clearErrors();

}