package cn.hust.service;

import cn.hust.dao.IRoleDao;
import cn.hust.dao.IUserDao;
import cn.hust.domain.Permission;
import cn.hust.domain.Role;
import cn.hust.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MyUserDetailsService implements UserDetailsService {

    @Autowired
    private IUserDao userDao;

    @Autowired
    private IRoleDao roleDao;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userDao.findByUsername(username);
        if (user == null) {
            return new User();
        }
        List<Role> roles = roleDao.findRoleByUserId(user.getId());
        user.setRoles(roles);
        return user;
    }
}
