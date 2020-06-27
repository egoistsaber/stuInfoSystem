package cn.hust.service;

import cn.hust.domain.Course;

import java.util.List;

public interface ICourseService {

    public Course findCourseById(int id);

    public List<Course> findAllCourses();
}
