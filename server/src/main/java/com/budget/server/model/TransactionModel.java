package com.budget.server.model;
import com.budget.server.service.UserService;
import jakarta.persistence.*;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;


@Entity
@Table(name = "transactions")
public class TransactionModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String type; //income or bill

    @NotBlank(message = "Name of record must not be blank")
    @Size(min = 1, max = 50)
    private String name;

    private Double amount;

    private String description;

    @DateTimeFormat(pattern = "MM/dd/yyyy")
    private Date dueDate;

    @Column(updatable=false)
    @DateTimeFormat(pattern="MM/dd/yyyy")
    private Date createdAt;
    @DateTimeFormat(pattern="MM/dd/yyyy")
    private Date updatedAt;

    @Transient
    private UserService userService;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserModel user;

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public Date getDueDate() {
        return dueDate;
    }

    public void setDueDate(Date dueDate) {
        this.dueDate = dueDate;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @PrePersist
    protected void onCreate(){
        this.createdAt = new Date();
    }
    @PreUpdate
    protected void onUpdate(){
        this.updatedAt = new Date();
    }

    public UserModel getUser() {
        return user;
    }

    public UserModel setUser(UserModel user) {
        this.user = user;
        UserModel loggedInUser = userService.loginUser(user.getEmail(), user.getPassword());
        System.out.println(loggedInUser);
        return loggedInUser;
    }
}
