package com.example.STUDENT_MANAGEMEBT.service;

import com.example.STUDENT_MANAGEMEBT.model.Student;
import com.example.STUDENT_MANAGEMEBT.repository.StudentRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {

    private final StudentRepository studentRepository;

    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    
    public Student saveStudent(Student student) {
        return studentRepository.save(student);
    }

    
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    
    public Optional<Student> getStudentById(Long id) {
        return studentRepository.findById(id);
    }

    
    public Student updateStudent(Long id, Student student) {
        Student existingStudent = studentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not found"));

        existingStudent.setName(student.getName());
        existingStudent.setEmail(student.getEmail());
        existingStudent.setDepartment(student.getDepartment());
        existingStudent.setPhone(student.getPhone());
        existingStudent.setYear(student.getYear());

        return studentRepository.save(existingStudent);
    }

    
    public void deleteStudent(Long id) {
        studentRepository.deleteById(id);
    }
}