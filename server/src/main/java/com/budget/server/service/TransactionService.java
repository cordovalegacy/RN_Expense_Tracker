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

    public List<TransactionModel> getUserTransactions(UserModel user, String type){
        //implement logic to retrieve transactions by user and type
        return transactionRepository.findByUserAndType(user, type);
    }

    public TransactionModel saveTransaction(TransactionModel transaction, UserModel user) {
        // Perform user validation or any necessary logic here
        // For example, validate the user's information, and then create and return a TransactionModel instance
        System.out.println(transaction.getName());
        TransactionModel newTransaction = new TransactionModel();
        newTransaction.setType(transaction.getType());
        newTransaction.setName(transaction.getName());
        newTransaction.setAmount(transaction.getAmount());
        newTransaction.setDueDate(transaction.getDueDate());
        newTransaction.setUser(transaction.getUser());
        return newTransaction;
    }

    public void deleteTransaction(Long id){
        transactionRepository.deleteById(id);
    }

}
