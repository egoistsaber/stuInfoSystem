package cn.hust.service;

import cn.hust.domain.Student;

import java.util.List;

public interface IStudentService {

    public Student findStudentById(int id);

    public List<Student> findAllStudents();

    public void saveStudent(Student student);

    public void deleteStudent(int id);

    public void updateStudent(Student student);
}
