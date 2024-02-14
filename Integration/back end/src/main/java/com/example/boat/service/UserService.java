package com.example.boat.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.boat.dto.response.UserDetailsResponse;
import com.example.boat.entity.User;
import com.example.boat.enumerated.Role;
import com.example.boat.repository.UserRepo;

@Service
public class UserService {
    @Autowired
    UserRepo userRepo;

    public void addUser(User user){
        userRepo.save(user);
    }

    public List<User> getUser(){
        return userRepo.findByRole(Role.USER);
    }

    public UserDetailsResponse getUserById(String id){
        User user=userRepo.findById(id).get();
        UserDetailsResponse userDetailsResponse=new UserDetailsResponse();
        userDetailsResponse.setUserId(user.getId());
        userDetailsResponse.setEmailId(user.getEmail());
        userDetailsResponse.setUsername(user.getName());
        userDetailsResponse.setPhonenumber(user.getPhonenumber());
        userDetailsResponse.setAddress(user.getAddress());
        userDetailsResponse.setImage(user.getImage());
        return userDetailsResponse;
    }

    public void deleteUserById(String id){
        userRepo.deleteById(id);
    }

    public void updateUser(UserDetailsResponse user, String id){
        User u=userRepo.findById(id).get();
        if(user.getUsername()!=null)
            u.setName(user.getUsername());
        if(user.getPhonenumber()!=null)
            u.setPhonenumber(user.getPhonenumber());
        if(user.getAddress()!=null)
            u.setAddress(user.getAddress());
        if(user.getEmailId()!=null)
            u.setEmail(user.getEmailId());
        if(user.getImage()!=null)
            u.setImage(user.getImage());
        userRepo.save(u);
    }
}