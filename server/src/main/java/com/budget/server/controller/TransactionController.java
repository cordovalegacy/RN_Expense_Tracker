package com.budget.server.controller;
import com.budget.server.model.TransactionModel;
import com.budget.server.model.UserModel;
import com.budget.server.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/transactions")
public class TransactionController {

    @Autowired
    private TransactionService transactionService;

    @GetMapping("/{type}")
    public ResponseEntity<?> getUserTransactions(@PathVariable String type, UserModel id){
        UserModel loggedInUser = id;
        List<TransactionModel> transactions = transactionService.getUserTransactions(loggedInUser, type);
        return ResponseEntity.ok(transactions);
    }

    @PostMapping("/save")
    public ResponseEntity<?> saveTransaction(@RequestBody TransactionModel transaction, UserModel id){
        TransactionModel savedTransaction = transactionService.saveTransaction(transaction, id);
        return ResponseEntity.ok(savedTransaction);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteTransaction(@PathVariable Long id){
        transactionService.deleteTransaction(id);

        return ResponseEntity.ok("Transaction was deleted.");
    }

}
