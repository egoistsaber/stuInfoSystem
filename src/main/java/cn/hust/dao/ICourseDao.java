package cn.hust.dao;

import cn.hust.domain.Course;
import cn.hust.domain.Student;
import org.apache.ibatis.annotations.Many;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.mapping.FetchType;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ICourseDao {

    @Select("select * from course where id = #{id};")
    @Results(id="courseMap",
    value={
            @Result(column = "id",property = "id",id = true),
            @Result(column = "name",property = "name"),
            @Result(column = "duration",property = "duration"),
            @Result(column="teacher_name",property = "teacherName"),
            @Result(column = "id",property = "students",
                    many = @Many(select = "cn.hust.dao.IStudentDao.findStudentsByCourseId",fetchType = FetchType.LAZY))
    })
    Course findCourseById(int id);

    @Select("select * from course;")
    @Results({
            @Result(column = "id",property = "id",id = true),
            @Result(column = "name",property = "name"),
            @Result(column = "duration",property = "duration"),
            @Result(column="teacher_name",property = "teacherName"),
            @Result(column = "id",property = "students",
                    many = @Many(select = "cn.hust.dao.IStudentDao.findStudentsByCourseId",fetchType = FetchType.LAZY))
    })
    List<Course> findAllCourses();

    @Select("SELECT c.* FROM course c,stu_course sc WHERE c.`id`=sc.`course_id` AND sc.`stu_id`=#{id};")
    @Results({
            @Result(column = "teacher_name",property = "teacherName")
    })
    public List<Course> findCoursesByStudentId(int id);
}
