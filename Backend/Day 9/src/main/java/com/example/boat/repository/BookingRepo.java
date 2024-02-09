package com.example.boat.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.boat.entity.Booking;

@Repository
public interface BookingRepo extends JpaRepository<Booking, Integer>{
    public List<Booking> findByUserId(String userId);
    public List<Booking> findByBoatId(String boatId);
}