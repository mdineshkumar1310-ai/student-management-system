package com.example.STUDENT_MANAGEMEBT.repository;

import com.example.STUDENT_MANAGEMEBT.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {

}