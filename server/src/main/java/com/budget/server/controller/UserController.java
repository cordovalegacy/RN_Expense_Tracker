package com.budget.server.controller;

import com.budget.server.model.UserModel;
import com.budget.server.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody UserModel user){
        UserModel registeredUser = userService.registerUser(user);
        return ResponseEntity.ok(registeredUser);
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody UserModel userLoginRequest){
        UserModel user = userService.loginUser(userLoginRequest.getEmail(), userLoginRequest.getPassword());
        if(user != null) {
//            String token = //generate JWT
            return ResponseEntity.ok(new UserModel(user.getId(), user.getEmail(), user.token, user.getFirstName(), user.getLastName()));
        }else{
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password, please try again.");
        }
    }

}
