package com.example.fsabackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import org.springframework.web.bind.annotation.*;
import com.example.fsabackend.Users;


@Service
@RestController
@RequestMapping("/signup")
public class SignupController {

    @Autowired
    private UserRepository userRepository;
    @PostMapping("/save")
    public ResponseEntity<Integer> saveItems(@RequestBody List<String> items) {
    
        try{
            Users user=new Users(items);
            System.out.println("Received items: " + items);
            userRepository.save(user);
            return ResponseEntity.ok(1);
        }
        catch(Exception e){
            System.err.println(e);
            return ResponseEntity.ok(500);
        }
    }   

}
