package com.budget.server.service;
import com.budget.server.model.TransactionModel;
import com.budget.server.model.UserModel;
import com.budget.server.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TransactionService {

    @Autowired
    private TransactionRepository transactionRepository;

    private final UserService userService;

    public TransactionService(UserService userService) {
        this.userService = userService;
    }

    public List<TransactionModel> getUserTransactions(String type, Long id){
        UserModel user = new UserModel(id);
        return transactionRepository.findByUserAndType(user, type);
    }

    // receiving the transaction object and user id from controller
    public TransactionModel saveTransaction(TransactionModel transaction, UserModel user) {

        //construct a new empty transaction instance
        TransactionModel newTransaction = new TransactionModel();

        //grab the existing user information by the user id from database if exists
        UserModel existingUser = userService.setUserForTransaction(user);

        //use the transaction setters to construct this instance fully
        newTransaction.setType(transaction.getType());
        newTransaction.setName(transaction.getName());
        newTransaction.setAmount(transaction.getAmount());
        newTransaction.setDueDate(transaction.getDueDate());
        newTransaction.setDescription(transaction.getDescription());
        newTransaction.setUser(existingUser);

        //save a full constructed transaction instance to the db, and return result to controller
        return transactionRepository.save(newTransaction);
    }

    public void deleteTransaction(Long id){
        transactionRepository.deleteById(id);
    }

}
