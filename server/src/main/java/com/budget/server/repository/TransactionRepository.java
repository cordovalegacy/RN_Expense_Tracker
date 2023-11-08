package com.budget.server.repository;
import com.budget.server.model.TransactionModel;
import com.budget.server.model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface TransactionRepository extends JpaRepository<TransactionModel, Long> {
    List<TransactionModel> findByUserAndType(UserModel user, String type);
}
