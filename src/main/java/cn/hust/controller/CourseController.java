package cn.hust.controller;

import cn.hust.domain.Course;
import cn.hust.service.ICourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/course")
public class CourseController {

    @Autowired
    private ICourseService courseService;

    @RequestMapping("/{id}")
    public @ResponseBody Course findById(@PathVariable("id") int id){
        System.out.println("controller层：findById方法得到执行");
        return courseService.findById(id);
    }
}
