package cn.hust.dao;

import cn.hust.domain.Course;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

@Repository
public interface ICourseDao {

    @Select("select * from course where id = #{id}")
    @Results(id="courseMap",
    value={
            @Result(column="teacher_name",property = "teacherName")
    })
    Course findById(int id);
}
