package cn.hust.service.impl;

import cn.hust.dao.ICourseDao;
import cn.hust.domain.Course;
import cn.hust.service.ICourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CourseServiceImpl implements ICourseService {

    @Autowired
    private ICourseDao courseDao;

    public Course findById(int id){
        System.out.println("service层:findById方法");
        return courseDao.findById(id);
    }
}
