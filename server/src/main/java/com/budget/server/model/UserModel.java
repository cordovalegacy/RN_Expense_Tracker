package com.budget.server.model;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

@Entity
@Table(name="users")
public class UserModel {

// !Define Schema
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    @Email(message="Please enter a valid email!")
    @NotBlank(message = "Email cannot be blank")
    private String email;

    @NotBlank(message = "Password is required!")
    @Size(min = 8, max = 160,  message="Password must be between 8 and 160 characters")
    private String password;

    @Transient
    private String confirmPassword;

    @NotBlank(message = "First name cannot be blank")
    @Size(min=1, max=60, message="First name must be between 1 and 60 characters")
    private String firstName;

    @NotBlank(message = "Last name cannot be blank")
    @Size(min=1, max=60, message="Last name must be between 1 and 60 characters")
    private String lastName;

    @Column(updatable=false)
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date createdAt;
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date updatedAt;

    private String token;

// !Define Schema

// !Define Constructors
    public UserModel() {

    }

    public UserModel(Long id) {
        this.id = id;
    }
    public UserModel(Long id, String email, String token, String firstName, String lastName, String password, String confirmPassword) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.token = token;
    }
// !Define Constructors

// !Define Getters/Setters
    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Long getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getConfirmPassword() {
        return confirmPassword;
    }

    public void setConfirmPassword(String confirmPassword) {
        this.confirmPassword = confirmPassword;
    }

    @PrePersist
    protected void onCreate(){
        this.createdAt = new Date();
    }
    @PreUpdate
    protected void onUpdate(){
        this.updatedAt = new Date();
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

}
// !Define Getters/Setters