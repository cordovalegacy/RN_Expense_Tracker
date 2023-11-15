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
    // here we receive a transaction object with all the member variables of the TransactionModel
    public ResponseEntity<?> saveTransaction(@RequestBody TransactionModel transaction){
        //Extract the user member variable from transaction object
        UserModel user = transaction.getUser();
        //call on transactionService to save the transaction...arguments: transaction object, userId
        TransactionModel savedTransaction = transactionService.saveTransaction(transaction, user);
        //return result to Response for the frontend
        return ResponseEntity.ok(savedTransaction);

        //SUMMARY:
        // 1. Frontend sends transaction object
        // 2. Controller receives transaction object and extracts the user from it
        // 3. Controller calls transactionService method and passes whole transaction and userId
        // 4. T-Service receives {t} and userId, then passes userId to userService
        // 5. U-Service uses userId to check database for an existing user, and returns
        // 6. T-Service constructs a transaction instance, including setting a valid user_id to it
        // 7. T-Service saves valid transaction instance to the db and then returns result to controller
        // 8. We return successful response of creation to the frontend
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteTransaction(@PathVariable Long id){
        transactionService.deleteTransaction(id);

        return ResponseEntity.ok("Transaction was deleted.");
    }

}
