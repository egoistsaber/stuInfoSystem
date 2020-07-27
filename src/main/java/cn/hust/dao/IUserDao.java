package cn.hust.dao;

import cn.hust.domain.Permission;
import cn.hust.domain.User;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IUserDao {

    public User findByUsername(String username);

    public List<Permission> findPermissionByUsername(String username);
}
