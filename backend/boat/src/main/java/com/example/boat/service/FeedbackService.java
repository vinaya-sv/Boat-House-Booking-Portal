package com.example.boat.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.boat.entity.Feedback;
import com.example.boat.repository.FeedbackRepo;

@Service
public class FeedbackService {
    @Autowired
    FeedbackRepo feedbackRepo;
    public void addFeedBack(Feedback feedback){
        feedbackRepo.save(feedback);
    }
    public List<Feedback> getFeedBack() {
        return feedbackRepo.findAll();
    }
}
