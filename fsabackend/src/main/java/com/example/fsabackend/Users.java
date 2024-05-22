package com.example.fsabackend;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import java.util.List;

@Entity
@Data
@Table(name="users")
public class Users {

    public Users(List<String> items) {

        this.username = items.get(0);
        this.password = items.get(1);
        this.email = items.get(2);
    }
    @Id
    @Column(name="ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="Username")
    private String username;

    @Column(name="email")
    private String email;

    @Column(name="password")
    private String password;

    @Column(name="UID")
    private String UID;

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getUid() {
        return UID;
    }

    public void setUid(String uid) {
        this.UID = uid;
    }
}
