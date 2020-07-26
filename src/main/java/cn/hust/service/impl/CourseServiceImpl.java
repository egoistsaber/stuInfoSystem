package cn.hust.service.impl;

import cn.hust.dao.ICourseDao;
import cn.hust.dao.IStuCourseDao;
import cn.hust.domain.Course;
import cn.hust.domain.StuCourse;
import cn.hust.dto.StudentGradeDTO;
import cn.hust.service.ICourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CourseServiceImpl implements ICourseService {

    @Autowired
    private ICourseDao courseDao;

    @Autowired
    private IStuCourseDao stuCourseDao;


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

    @Override
    public List<StudentGradeDTO> findStudentsByCourseId(int id) {
        List<StuCourse> stuCourses = stuCourseDao.findStudentsByCourseId(id);
        if(stuCourses==null)
            return null;
        List<StudentGradeDTO> list=new ArrayList<>();
        for(StuCourse ele:stuCourses){
            StudentGradeDTO temp=new StudentGradeDTO();
            temp.setGrade(ele.getGrade());
            temp.setStudent(ele.getStudent());
            list.add(temp);
        }
        return list;
    }
}
