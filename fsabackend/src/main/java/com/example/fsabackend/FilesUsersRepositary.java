package com.example.fsabackend;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;

public interface FilesUsersRepositary extends JpaRepository<FilesUsers, Long> {
    // FilesUsers findByReceiverUid(String receiverUid);
    // FilesUsers findByFilename(String filename);
    @Query("SELECT f FROM FilesUsers f WHERE f.receiverUid = :uid")
    List<FilesUsers> findByReceiverUid(@Param("uid") String uid);
      
    @Query("SELECT f FROM FilesUsers f WHERE f.filename = :filename")
    List<FilesUsers> findByFilename(@Param("filename") String filename);
}
