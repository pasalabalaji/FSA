package com.example.fsabackend;

import java.util.List;

import org.apache.tomcat.util.json.JSONParserConstants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;


// @Service
// @RestController
// @RequestMapping("sharefile")
// public class filesharingController {

//     @Autowired
//     private FilesRepositary filesRepositary;
//     @PostMapping("/share")
//     public ResponseEntity<Integer> saveItems(@RequestBody List<String> items) {
//         System.out.println(items.get(0)+""+items.get(1)+""+items.get(2));
//         return ResponseEntity.ok(1);
//     }
// }

@RestController
@RequestMapping("/sharefile")
public class filesharingController {

    @PostMapping("/share")
    public ResponseEntity<String> shareFile(
            @RequestParam("uid") String uid,
            @RequestParam("receiverId") String receiverId,
            @RequestParam("file") MultipartFile file) {
        
        // Process the file and parameters here
        // For example, save the file and update the database
        System.out.println(uid+""+receiverId+""+file.getOriginalFilename());
        System.out.println("working");
        // Return success response
        return ResponseEntity.ok("1");
        
    }
}
