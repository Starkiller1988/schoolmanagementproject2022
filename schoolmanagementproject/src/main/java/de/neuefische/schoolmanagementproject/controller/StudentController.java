package de.neuefische.schoolmanagementproject.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import de.neuefische.schoolmanagementproject.model.Student;
import de.neuefische.schoolmanagementproject.repository.StudentRepository;


@CrossOrigin
@RestController
public class StudentController {
    

@Autowired
private StudentRepository studentRepository;

@GetMapping("/list")
public List<Student> listStudents(){

    return studentRepository.findAll();
    
}

@PostMapping("/create")
public void createStudent(@RequestBody Student student){

    studentRepository.insert(student);
}

@PostMapping("/delete/{id}")
public void deleteStudent(@PathVariable String id){
studentRepository.deleteById(id);
}

@PutMapping("/edit/{id}")
public void editStudent(@PathVariable String id){
   
}










}
