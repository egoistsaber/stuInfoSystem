package cn.hust.test;

import cn.hust.dao.ICourseDao;
import cn.hust.dao.IStudentDao;
import cn.hust.domain.Course;
import cn.hust.domain.Student;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.List;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"classpath:applicationContext.xml"})
public class SpringTest {

    @Autowired
    private ICourseDao courseDao;

    @Autowired
    private IStudentDao studentDao;

    @Test
    public void testFindById() {
        List<Student> students1 = courseDao.findCourseById(2).getStudents();
        System.out.println(students1);
        List<Student> students = studentDao.findStudentsByCourseId(2);
        for (Student stu : students
        ) {
            System.out.println(stu);
        }
    }

    @Test
    public void testFindAllCourses() {
        List<Course> allCourses = courseDao.findAllCourses();
        for (Course course : allCourses
        ) {
            System.out.println(course);
        }
    }

    @Test
    public void testFindCoursesByStudentId() {
        List<Course> courses = courseDao.findCoursesByStudentId(1);
        for (Course course : courses
        ) {
            System.out.println(course);
        }
    }

    @Test
    public void testFindStudentById() {
        Student stu = studentDao.findStudentById(1);
        System.out.println(stu);
    }

    @Test
    public void testFindAllStudents() {
        List<Student> allStudents = studentDao.findAllStudents();
        for (Student stu:allStudents
             ) {
            System.out.println(stu);
        }
    }

    @Test
    public void testSaveCourse(){
        Course course=new Course();
        course.setName("c语言");
        course.setDuration(19);
        course.setTeacherName("王语嫣");
        courseDao.saveCourse(course);
        System.out.println(course.getId());
    }

    @Test
    public void testSaveStudent(){
        Student student=new Student();
        student.setAddress("山西平遥");
        student.setClassNumber("1903");
        student.setGender("f");
        student.setName("彤彤");
        studentDao.saveStudent(student);
        System.out.println(student.getId());
    }

    @Test
    public void testUpdateStudent(){
        Student student=studentDao.findStudentById(13);
        student.setName("tutu");
        studentDao.updateStudent(student);
    }
}
