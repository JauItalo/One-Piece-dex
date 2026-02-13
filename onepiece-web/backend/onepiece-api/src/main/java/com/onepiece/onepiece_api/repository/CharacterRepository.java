package com.onepiece.onepiece_api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.onepiece.onepiece_api.model.Character;

public interface CharacterRepository extends JpaRepository<Character, Long> {
    
}
