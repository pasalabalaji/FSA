package com.example.fsabackend;

import java.nio.file.Paths;
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


import java.nio.file.Path;
import java.nio.file.Paths;
import java.io.IOException;
import java.nio.file.Files;
import com.example.fsabackend.Users;

import jakarta.persistence.Tuple;

import java.util.List;



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

   
    private String uploadDir="src/main/resources/static/uploads/";
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private FilesUsersRepositary filesRepositary;

    @PostMapping("/share")
    public ResponseEntity<Integer> shareFile(
            @RequestParam("uid") String uid,
            @RequestParam("receiverId") String receiverId,
            @RequestParam("file") MultipartFile file) {
        try{
            Users reciever =userRepository.findByUID(receiverId);
            if(uid.equals(receiverId)){
                return  ResponseEntity.ok(420);
            }
            if(reciever==null){
                return ResponseEntity.ok(404);  
            }
            else{
                Path path = Paths.get(uploadDir +uid+receiverId+file.getOriginalFilename());
                Files.write(path, file.getBytes());
                   
                // FilesUsers files=new FilesUsers(userRepository.findByUID(uid),uid+receiverId+file.getOriginalFilename(),receiverId);
                // filesRepositary.save(files);
                // return ResponseEntity.ok(1);
                String fname=uid+receiverId+file.getOriginalFilename();
                List<FilesUsers> filesuploaded=filesRepositary.findByFilename(fname);
                if(filesuploaded.size()>0){
                    
                    return ResponseEntity.ok(1000);
                }
                else{
                    FilesUsers files=new FilesUsers(userRepository.findByUID(uid),uid+receiverId+file.getOriginalFilename(),receiverId);
                    filesRepositary.save(files);
                    return ResponseEntity.ok(1);
                }

            }
        }catch (IOException e) {
            System.out.println(e);
            return ResponseEntity.ok(0);
        }
        
    }
}
