package cn.hust.dao;

import cn.hust.domain.Role;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IRoleDao {

    @Select("select * from role r,role_user ru where r.id=ru.role_id and ru.user_id=#{userId}")
    @Results({
            @Result(id=true,column = "id",property = "id"),
            @Result(column = "role_name",property = "roleName"),
            @Result(column = "role_desc",property = "roleDesc")
    })
    public List<Role> findRoleByUserId(String userId);
}
