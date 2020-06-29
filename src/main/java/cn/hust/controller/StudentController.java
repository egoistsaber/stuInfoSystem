package cn.hust.controller;

import cn.hust.domain.Student;
import cn.hust.service.IStudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("")
    public void saveStudent(@RequestBody Student student){
        studentService.saveStudent(student);
    }

    @PostMapping("/{id}")
    public void deleteStudent(@PathVariable("id") int id) {
        studentService.deleteStudent(id);
    }

    @PostMapping("/update")
    public void updateStudent(@RequestBody Student student){
        System.out.println(student);
        studentService.updateStudent(student);
    }
}
