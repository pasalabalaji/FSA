package com.example.fsabackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.security.NoSuchAlgorithmException;
import java.util.List;
import org.springframework.web.bind.annotation.*;
import com.example.fsabackend.Users;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;

@Service
@RestController
@RequestMapping("/signup")
public class SignupController {

    public static String generateUID(String username, String email, String password) throws NoSuchAlgorithmException {
        // Combine the inputs
        String combinedInput = username + email + password;

        // Hash the combined input using SHA-256
        MessageDigest digest = MessageDigest.getInstance("SHA-256");
        byte[] hashBytes = digest.digest(combinedInput.getBytes(StandardCharsets.UTF_8));

        // Encode the hash bytes to base64 to get a readable string
        String hashString = Base64.getUrlEncoder().withoutPadding().encodeToString(hashBytes);

        // Take the first 12 characters to form the UID
        return hashString.substring(0, 12);
    }
    
    @Autowired
    private UserRepository userRepository;
    @PostMapping("/save")
    public ResponseEntity<String> saveItems(@RequestBody List<String> items) {
    
        try{
            String UID=generateUID(items.get(0),items.get(1),items.get(2));
            items.add(UID);
            Users user=new Users(items);
            System.out.println("Received items: " + items);
            userRepository.save(user);
            return ResponseEntity.ok(UID);
        }
        catch(Exception e){
            System.err.println(e);
            return ResponseEntity.ok("");
        }
    }
    
    


    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody List<String> items) {
    
        try{
            Users user =userRepository.findByEmail(items.get(0));

           
            
            if (user != null) {
                String userPassword = user.getPassword();
                // System.out.println(items.get(1)+" : "+userPassword);
                // System.out.println(userPassword.equals(items.get(1)));
                if(userPassword.equals(items.get(1))){
                    System.out.println(user.getUID());
                    return ResponseEntity.ok(user.getUID());
                }
                else{
                    return ResponseEntity.ok("");
                }
                
            } else {
                return ResponseEntity.ok("");
            }

           
            // userRepository.findAll(email=items.get(0))
            
        }
        catch(Exception e){
            System.err.println(e);
            return ResponseEntity.ok("");
        }
    }


}
