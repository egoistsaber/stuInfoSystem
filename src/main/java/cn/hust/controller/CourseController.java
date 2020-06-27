package cn.hust.controller;

import cn.hust.domain.Course;
import cn.hust.service.ICourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/courses")
public class CourseController {

    @Autowired
    private ICourseService courseService;

    @GetMapping("/{id}")
    public Course findById(@PathVariable("id") int id){
        System.out.println("controller层：findById方法得到执行");
        return courseService.findCourseById(id);
    }

    @GetMapping("")
    public List<Course> findAllCourses(){
        return courseService.findAllCourses();
    }
}
