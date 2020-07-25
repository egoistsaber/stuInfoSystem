package cn.hust.dao;

import cn.hust.domain.StuCourse;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IStuCourseDao {

    public List<StuCourse> findCoursesByStudentId(Integer stuId);
}
