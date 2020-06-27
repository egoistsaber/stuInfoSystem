package cn.hust.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.io.Serializable;

@JsonIgnoreProperties(value = "handler")
public class StuCourse implements Serializable {
    private Integer id;
    private Integer stuId;
    private Integer courseId;
    private Integer grade;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getStuId() {
        return stuId;
    }

    public void setStuId(Integer stuId) {
        this.stuId = stuId;
    }

    public Integer getCourseId() {
        return courseId;
    }

    public void setCourseId(Integer courseId) {
        this.courseId = courseId;
    }

    public Integer getGrade() {
        return grade;
    }

    public void setGrade(Integer grade) {
        this.grade = grade;
    }

    @Override
    public String toString() {
        return "StuCourse{" +
                "id=" + id +
                ", stuId=" + stuId +
                ", courseId=" + courseId +
                ", grade=" + grade +
                '}';
    }
}
