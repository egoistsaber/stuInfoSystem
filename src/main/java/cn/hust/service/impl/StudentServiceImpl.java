package cn.hust.service.impl;

import cn.hust.dao.IStuCourseDao;
import cn.hust.dao.IStudentDao;
import cn.hust.domain.StuCourse;
import cn.hust.domain.Student;
import cn.hust.dto.CourseGradeDTO;
import cn.hust.dto.StudentGradeDTO;
import cn.hust.service.IStudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class StudentServiceImpl implements IStudentService {

    @Autowired
    private IStudentDao studentDao;

    @Autowired
    private IStuCourseDao stuCourseDao;

    @Override
    public Student findStudentById(int id) {
        return studentDao.findStudentById(id);
    }

    @Override
    public List<Student> findAllStudents() {
        return studentDao.findAllStudents();
    }

    @Override
    public void saveStudent(Student student) {
        studentDao.saveStudent(student);
    }

    @Override
    public void deleteStudent(int id) {
        studentDao.deleteStudent(id);
    }

    @Override
    public void updateStudent(Student student) {
        studentDao.updateStudent(student);
    }

    @Override
    public List<CourseGradeDTO> findStudentWithGrade(int id) {
        List<StuCourse> stuCourses = stuCourseDao.findCoursesByStudentId(id);
        if(stuCourses==null)
            return null;
        List<CourseGradeDTO> list=new ArrayList<>();
        for(StuCourse ele:stuCourses) {
            CourseGradeDTO temp=new CourseGradeDTO();
            temp.setCourse(ele.getCourse());
            temp.setGrade(ele.getGrade());
            list.add(temp);
        }
        return list;
    }
}
