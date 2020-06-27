package cn.hust.dao;

import cn.hust.domain.Student;
import org.apache.ibatis.annotations.Many;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.mapping.FetchType;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IStudentDao {

    @Select("SELECT s.* FROM student s,stu_course sc WHERE sc.`stu_id`=s.`id` AND sc.`course_id`=#{id}; ")
    @Results({
            @Result(column = "class_number",property = "classNumber")
    })
    public List<Student> findStudentsByCourseId(int id);

    @Select("select * from student where id = #{id}")
    @Results({
            @Result(column = "id",property = "id",id=true),
            @Result(column = "name",property = "name"),
            @Result(column = "gender",property = "gender"),
            @Result(column = "address",property = "address"),
            @Result(column = "class_number",property = "classNumber"),
            @Result(column = "id",property = "courses",
                    many = @Many(select = "cn.hust.dao.ICourseDao.findCoursesByStudentId",fetchType = FetchType.LAZY))
    })
    public Student findStudentById(int id);

    @Select("select * from student")
    @Results({
            @Result(column = "id",property = "id",id=true),
            @Result(column = "name",property = "name"),
            @Result(column = "gender",property = "gender"),
            @Result(column = "address",property = "address"),
            @Result(column = "class_number",property = "classNumber"),
            @Result(column = "id",property = "courses",
                    many = @Many(select = "cn.hust.dao.ICourseDao.findCoursesByStudentId",fetchType = FetchType.LAZY))
    })
    public List<Student> findAllStudents();
}
