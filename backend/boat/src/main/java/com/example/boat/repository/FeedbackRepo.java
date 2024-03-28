package com.example.boat.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.boat.entity.Feedback;

@Repository
public interface FeedbackRepo extends JpaRepository<Feedback, String>{

}
