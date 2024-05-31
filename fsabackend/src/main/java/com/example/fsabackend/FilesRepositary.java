package com.example.fsabackend;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FilesRepositary extends JpaRepository<Files, Long> {
    Users findByReceiverUid(String receiverUid);
}
