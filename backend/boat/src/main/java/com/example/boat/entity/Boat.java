package com.example.boat.entity;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
@Table(name="Boat")
public class Boat {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    String id;
    String name;
    @Column(length=10000)
    String description;
    List<String> amenities;
    List<String> roomFeatures;
    String phoneNumber;
    String location;
    String image;
    int numberOfPeople;
    String type; 
    long price;
}