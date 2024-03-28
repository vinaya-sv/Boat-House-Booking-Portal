package com.example.boat.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.boat.entity.SiteSettings;
public interface SiteSettingsRepo extends JpaRepository<SiteSettings,Integer>{
}