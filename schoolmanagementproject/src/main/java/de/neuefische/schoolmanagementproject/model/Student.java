package de.neuefische.schoolmanagementproject.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "students")
public class Student {
    

    @Id
private String id;

private String firstName;

private String lastName;

private String age;

private String bootcamp;

private String teacher;

public String getId() {
    return id;
}

public void setId(String id) {
    this.id = id;
}

public String getFirstName() {
    return firstName;
}

public void setFirstName(String firstName) {
    this.firstName = firstName;
}

public String getLastName() {
    return lastName;
}

public void setLastName(String lastName) {
    this.lastName = lastName;
}

public String getAge() {
    return age;
}

public void setAge(String age) {
    this.age = age;
}

public String getTeacher() {
    return teacher;
}

public void setTeacher(String teacher) {
    this.teacher = teacher;
}

public String getBootcamp() {
    return bootcamp;
}

public void setBootcamp(String bootcamp) {
    this.bootcamp = bootcamp;
}

public Student(String id, String firstName, String lastName, String age, String bootcamp, String teacher) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.bootcamp = bootcamp;
    this.teacher = teacher;
}





}
