package com.budget.server.controller;
import com.budget.server.model.UserModel;
import com.budget.server.repository.UserRepository;
import com.budget.server.service.UserService;
import com.budget.server.util.JwtGenerationUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private JwtGenerationUtil jwtGenerationUtil;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody UserModel user){
        if (!user.getPassword().equals(user.getConfirmPassword())) {
            throw new RuntimeException("Passwords do not match");
        }
        user.setConfirmPassword(null);
        UserModel registeredUser = userService.registerUser(user);
        String token = jwtGenerationUtil.generateToken(registeredUser.getEmail());
        registeredUser.setToken(token);
        registeredUser.setPassword(null);
        return ResponseEntity.ok(registeredUser);
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody UserModel userLoginRequest){
        UserModel user = userService.loginUser(userLoginRequest.getEmail(), userLoginRequest.getPassword());
        if(user != null) {
            String token = jwtGenerationUtil.generateToken(user.getEmail());
            user.setToken(token);
            user.setPassword(null);
            return ResponseEntity.ok(user);
        }else{
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password, please try again.");
        }
    }

    @PostMapping("/verifyUser")
    public ResponseEntity<?> verifyUser(@RequestHeader("Authorization") String token) {
        try {
            // Extract the token from the Authorization header
            String extractedToken = token.replace("Bearer ", "");

            // Validate the token
            if (jwtGenerationUtil.validateToken(extractedToken)) {
                // Token is valid, return user information or a success response
                Optional<UserModel> user = userRepository.findByEmail(jwtGenerationUtil.extractEmail(extractedToken));
                return ResponseEntity.ok(user);
            } else {
                // Token is invalid, return an unauthorized response
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid token");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error verifying user");
        }
    }

}
