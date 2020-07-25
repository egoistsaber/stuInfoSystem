package cn.hust.dto;

import cn.hust.domain.Course;

public class CourseGradeDTO {
    private Course course;
    private Integer grade;

    public Course getCourse() {
        return course;
    }

    public void setCourse(Course course) {
        this.course = course;
    }

    public Integer getGrade() {
        return grade;
    }

    public void setGrade(Integer grade) {
        this.grade = grade;
    }

    @Override
    public String toString() {
        return "CourseGradeDTO{" +
                "course=" + course +
                ", grade=" + grade +
                '}';
    }
}
