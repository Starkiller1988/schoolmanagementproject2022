package de.neuefische.schoolmanagementproject.repository;


import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import de.neuefische.schoolmanagementproject.model.Student;

@Repository
public interface StudentRepository extends MongoRepository<Student, String> {

    void updateStudentById(String id, Student student);




}
