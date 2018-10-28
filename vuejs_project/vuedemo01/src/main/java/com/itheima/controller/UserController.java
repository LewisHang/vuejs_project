package com.itheima.controller;

import com.itheima.domain.User;
import com.itheima.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping("/findAll")
    public List<User> findAll(){
        List<User> userList = userService.findAll();
        return userList;
    }

    @RequestMapping("/findById")
    public User findById(Integer id){
        System.out.println("-------------------------------");
        User user = userService.findById(id);
        return user;
    }

    @RequestMapping("/updateUser")
    public void updateUser(@RequestBody User user){
        System.out.println(user);
        userService.updateUser(user);
    }

}
