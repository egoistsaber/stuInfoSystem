package cn.hust.service.impl;

import cn.hust.dao.IStudentDao;
import cn.hust.domain.Student;
import cn.hust.service.IStudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImpl implements IStudentService {

    @Autowired
    private IStudentDao studentDao;


    @Override
    public Student findStudentById(int id) {
        return studentDao.findStudentById(id);
    }

    @Override
    public List<Student> findAllStudents() {
        return studentDao.findAllStudents();
    }
}
