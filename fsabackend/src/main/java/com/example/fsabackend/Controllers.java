package com.example.fsabackend;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
public class Controllers{
    @RequestMapping("/")
    public String index(){
        return "Hello World...working...";
    }
}
