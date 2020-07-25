package cn.hust.dto;

import cn.hust.domain.Course;
import cn.hust.domain.Student;
import cn.hust.dto.CourseGradeDTO;

import java.util.List;

public class StudentWithGradeDTO {
    private Student student;
    private List<CourseGradeDTO> courses;

    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }

    public List<CourseGradeDTO> getCourses() {
        return courses;
    }

    public void setCourses(List<CourseGradeDTO> courses) {
        this.courses = courses;
    }

    @Override
    public String toString() {
        return "StudentWithGradeDTO{" +
                "student=" + student +
                ", courses=" + courses +
                '}';
    }
}
