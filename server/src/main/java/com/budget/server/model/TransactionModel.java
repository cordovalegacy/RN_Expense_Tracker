package com.budget.server.model;
import com.budget.server.service.UserService;
import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "transactions")
public class TransactionModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String type; //income or bill

    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    private Double amount;

    private Date dueDate;

    @Transient
    private UserService userService;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserModel user;

    public Long getId() {
        return id;
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
