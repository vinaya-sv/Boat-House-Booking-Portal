package com.example.boat.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.boat.entity.Feedback;
import com.example.boat.service.FeedbackService;
import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
public class FeedbackController {
    @Autowired
    FeedbackService feedbackService;

    @PostMapping("/feedback")
    public void addFeedBack(@RequestBody Feedback feedback){
        System.out.println("**************************************");
        System.out.println(feedback);
        System.out.println("**************************************");
        feedbackService.addFeedBack(feedback);
    }

    @GetMapping("/feedback")
    public List<Feedback> getFeedBack(){
        return feedbackService.getFeedBack();
    }
}
