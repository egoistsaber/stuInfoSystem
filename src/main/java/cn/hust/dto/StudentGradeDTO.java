package cn.hust.dto;

import cn.hust.domain.Student;

public class StudentGradeDTO {

    private Student student;

    private Integer grade;

    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }

    public Integer getGrade() {
        return grade;
    }

    public void setGrade(Integer grade) {
        this.grade = grade;
    }

    @Override
    public String toString() {
        return "StudentGradeDTO{" +
                "student=" + student +
                ", grade=" + grade +
                '}';
    }
}
