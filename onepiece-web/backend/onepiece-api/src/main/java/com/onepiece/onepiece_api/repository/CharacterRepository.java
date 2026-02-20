package com.onepiece.onepiece_api.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.onepiece.onepiece_api.model.Character;

public interface CharacterRepository extends MongoRepository<Character, String> {
    
}
