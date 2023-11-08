package com.budget.server.service;

import com.budget.server.model.UserModel;
import com.budget.server.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public UserModel registerUser(UserModel user){
        return userRepository.save(user);
    }

    public UserModel loginUser(String email, String password){
        //implement login logic and validations
        return userRepository.findByEmail(email).orElse(null);
    }

}
