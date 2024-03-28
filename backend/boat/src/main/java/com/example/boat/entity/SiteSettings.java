package com.example.boat.entity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data@NoArgsConstructor
@Entity
public class SiteSettings {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int id;
    String heading;
    @Column(length=10000)
    String description;
    String image;
}