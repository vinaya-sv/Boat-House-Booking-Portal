package com.example.boat.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.boat.entity.SiteSettings;
import com.example.boat.repository.SiteSettingsRepo;

@RestController
@RequestMapping("/site-settings")
public class SiteSettingsController {
    @Autowired
    SiteSettingsRepo repo;
    @PostMapping("/")
    public void addSiteField(@RequestBody SiteSettings site){
        System.out.println(site);
        SiteSettings old=repo.findById(site.getId()).get();
        System.out.println(old);
        old.setHeading(site.getHeading());
        old.setDescription(site.getDescription());
        old.setImage(site.getImage());
        repo.save(old);
    }

    @GetMapping("/get/{id}")
    public SiteSettings getSiteField(@PathVariable int id){
        return repo.findById(id).get();
    }

    @GetMapping("/get/")
    public List<SiteSettings> getAllSiteFields(){
        return repo.findAll();
    }

    @PutMapping("/")
    public void updateSiteField(@RequestBody SiteSettings site){
        repo.save(site);
    }
}
