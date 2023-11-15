package com.budget.server.service;

import com.budget.server.model.UserModel;
import com.budget.server.repository.UserRepository;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    //With autowired we can skip writing the constructor here for userRepo
    @Autowired
    private UserRepository userRepository;

    public UserModel registerUser(UserModel user){
        Optional<UserModel> potentialUser = userRepository.findByEmail(user.getEmail());
        if(potentialUser.isPresent()){
            throw new RuntimeException("User with this email already exists");
        }
        else{
            String hashed = BCrypt.hashpw(user.getPassword(), BCrypt.gensalt());
            user.setPassword(hashed);
            return userRepository.save(user);
        }
    }

    //receiving userId
    public UserModel setUserForTransaction(UserModel user) {
        //grab the user if they exist and return to transaction service
        Optional<UserModel> existingUser = userRepository.findById(user.getId());
        if (existingUser.isPresent()) {
            return (existingUser.get());
        } else {
            throw new RuntimeException("User with this id does not exist");
        }
    }

    public UserModel loginUser(String email, String password){
        Optional<UserModel> doesUserExist = userRepository.findByEmail(email);
        if(doesUserExist.isPresent()){
            UserModel loggedInUser = doesUserExist.get();

            if(!BCrypt.checkpw(password, loggedInUser.getPassword())) {
                throw new RuntimeException("Your passwords do not match.");
            }
            else{
                return loggedInUser;
            }
        }
        else {
            throw new RuntimeException("No user was found with this email");
        }
    }

}
