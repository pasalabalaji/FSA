package com.example.fsabackend;

import org.springframework.http.ResponseEntity;

import java.util.List;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;



@RestController
@RequestMapping("/signup")
public class SignupController {
    @PostMapping("/save")
    public ResponseEntity<String> saveItems(@RequestBody List<String> items) {
        // Process the list of items here
        System.out.println("Received items: " + items);
        return ResponseEntity.ok("Items received successfully");
    }   

}
