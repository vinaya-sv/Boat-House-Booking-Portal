package com.example.boat.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.boat.entity.Boat;
import com.example.boat.repository.BoatRepo;

@Service
public class BoatService {
    @Autowired
    BoatRepo boatRepo;
    
    public List<Boat> getBoats(){
        return boatRepo.findAll();
    }

    public void addBoat(Boat boat){
        boatRepo.save(boat);
    }
    
    public Boat getBoatById(String id){
        return boatRepo.findById(id).get();
    }

    public int getBoatCount(){
        return boatRepo.findAll().size();
    }

    public void deleteBoatById(String id){
        boatRepo.deleteById(id);
    }

    public void updateBoat(Boat boat){
        boatRepo.saveAndFlush(boat);
    }
}