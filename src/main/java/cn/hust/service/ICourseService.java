package cn.hust.service;

import cn.hust.domain.Course;
import cn.hust.domain.StuCourse;

import java.util.List;

public interface ICourseService {

    public Course findCourseById(int id);

    public List<Course> findAllCourses();

    public void saveCourse(Course course);

    public void deleteCourse(int id);

    public void updateCourse(Course course);

}
