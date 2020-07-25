package cn.hust.dao;

import cn.hust.domain.StuCourse;
import cn.hust.domain.Student;
import org.apache.ibatis.annotations.*;
import org.apache.ibatis.mapping.FetchType;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IStudentDao {

    @Select("SELECT s.* FROM student s,stu_course sc WHERE sc.`stu_id`=s.`id` AND sc.`course_id`=#{id}; ")
    @Results({
            @Result(column = "class_number", property = "classNumber")
    })
    public List<Student> findStudentsByCourseId(int id);

    @Select("select * from student where id = #{id}")
    @Results({
            @Result(column = "id", property = "id", id = true),
            @Result(column = "name", property = "name"),
            @Result(column = "gender", property = "gender"),
            @Result(column = "address", property = "address"),
            @Result(column = "class_number", property = "classNumber"),
            @Result(column = "id", property = "courses",
                    many = @Many(select = "cn.hust.dao.ICourseDao.findCoursesByStudentId", fetchType = FetchType.LAZY))
    })
    public Student findStudentById(int id);

    @Select("select * from student")
    @Results({
            @Result(column = "id", property = "id", id = true),
            @Result(column = "name", property = "name"),
            @Result(column = "gender", property = "gender"),
            @Result(column = "address", property = "address"),
            @Result(column = "class_number", property = "classNumber"),
            @Result(column = "id", property = "courses",
                    many = @Many(select = "cn.hust.dao.ICourseDao.findCoursesByStudentId", fetchType = FetchType.LAZY))
    })
    public List<Student> findAllStudents();


    @Insert("insert into student(name,gender,address,class_number) values(#{name},#{gender},#{address},#{classNumber});")
    @Options(useGeneratedKeys = true, keyProperty = "id", keyColumn = "id")
    public void saveStudent(Student student);

    @Delete("delete from student where id = #{id}")
    public void deleteStudent(Integer id);

    @Update("update student set name=#{name},gender=#{gender},address=#{address},class_number=#{classNumber} where id=#{id};")
    public void updateStudent(Student student);

    @Select("SELECT * FROM stu_course sc WHERE sc.stu_id=#{stuId} AND sc.course_id=#{courseId};")
    @Results({
            @Result(column = "id", property = "id", id = true),
            @Result(column = "grade",property = "grade"),
            @Result(column = "stu_id", property = "student",
                    one = @One(select = "cn.hust.dao.IStudentDao.findStudentById", fetchType = FetchType.LAZY)),
            @Result(column = "course_id", property = "course",
                    one = @One(select = "cn.hust.dao.ICourseDao.findCourseById", fetchType = FetchType.LAZY))
    })
    public StuCourse findStudentCourse(@Param("stuId") Integer stuId,@Param("courseId") Integer courseId);


}
