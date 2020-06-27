package cn.hust.controller;

import cn.hust.domain.Student;
import cn.hust.service.IStudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/students")
public class StudentController {

    @Autowired
    private IStudentService studentService;

    @GetMapping("/{id}")
    public Student findStudentById(@PathVariable("id") int id){
        return studentService.findStudentById(id);
    }

    @GetMapping("")
    public List<Student> findAllStudents(){
        return studentService.findAllStudents();
    }
}
