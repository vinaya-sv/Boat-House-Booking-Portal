package com.example.boat.entity;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data@NoArgsConstructor
@Entity
public class SiteSettings {
    @Id
    int id;
    String content;
    String image;
}