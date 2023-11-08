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

    public List<TransactionModel> getUserTransactions(UserModel user, String type){
        //implement logic to retrieve transactions by user and type
        return transactionRepository.findByUserAndType(user, type);
    }

    public TransactionModel saveTransaction(TransactionModel transaction){
        //implement logic to save or update a transaction
        return transactionRepository.save(transaction);
    }

    public void deleteTransaction(Long id){
        transactionRepository.deleteById(id);
    }

}
