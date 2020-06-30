package cn.hust.service.impl;

import cn.hust.dao.ICourseDao;
import cn.hust.domain.Course;
import cn.hust.service.ICourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseServiceImpl implements ICourseService {

    @Autowired
    private ICourseDao courseDao;

    public Course findCourseById(int id){
        System.out.println("service层:findById方法");
        return courseDao.findCourseById(id);
    }

    @Override
    public List<Course> findAllCourses() {
        return courseDao.findAllCourses();
    }

    @Override
    public void saveCourse(Course course) {
        courseDao.saveCourse(course);
    }

    @Override
    public void deleteCourse(int id) {
        courseDao.deleteCourse(id);
    }

    @Override
    public void updateCourse(Course course) {
        courseDao.updateCourse(course);
    }
}
