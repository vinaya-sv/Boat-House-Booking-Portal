package com.example.boat.controller;

import org.springframework.web.bind.annotation.RestController;
import com.example.boat.entity.Boat;
import com.example.boat.service.BoatService;
import io.swagger.v3.oas.annotations.Operation;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/boat")
public class BoatController {
    @Autowired
    BoatService boatService;
    
    @PostMapping("/")
    public void addBoat(@RequestBody Boat boat) {
        boatService.addBoat(boat);
    }
    
    @GetMapping("/get/")
    public List<Boat> getBoats() {
        return boatService.getBoats();
    }

    @GetMapping("/{id}")
    public Boat getMethodName(@PathVariable String id){
        return boatService.getBoatById(id);
    }


    @GetMapping("/count")
    @Operation(summary="Get total number of boats")
    public int getBoatCount(){
        return boatService.getBoatCount();
    }
    
    @DeleteMapping("/{id}")
    public void deleteBoatById(@PathVariable String id){
        boatService.deleteBoatById(id);
    }

    @PutMapping("/")
    public void updateBoat(@RequestBody Boat boat){
        boatService.updateBoat(boat);
    }
}