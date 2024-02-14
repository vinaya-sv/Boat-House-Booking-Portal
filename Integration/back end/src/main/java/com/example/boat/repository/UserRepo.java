package com.example.boat.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.boat.entity.User;
import com.example.boat.enumerated.Role;

@Repository
public interface UserRepo extends JpaRepository<User, String> {
    Optional<User> findByName(String username);
	Optional<User> findByEmail(String email);
	List<User> findByRole(Role USER);
	Boolean existsByName(String username);
	Boolean existsByEmail(String email);
}