package cn.hust.dao.impl;

import cn.hust.dao.ICourseDao;
import cn.hust.domain.Course;
import org.springframework.stereotype.Repository;

@Repository
public class CourseDaoImpl implements ICourseDao {
    @Override
    public Course findById() {
        System.out.println("dao层：findById方法");
        return null;
    }
}
