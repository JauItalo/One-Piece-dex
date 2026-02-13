package com.onepiece.onepiece_api.service;

import com.onepiece.onepiece_api.model.Character;
import com.onepiece.onepiece_api.repository.CharacterRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CharacterService {

    @Autowired
    private CharacterRepository characterRepository;
    

    public List<Character> findAll() {
        return characterRepository.findAll();
    }

    public Optional<Character> findById(Long id) {
        return characterRepository.findById(id);
    }

    public Character save(Character character) {
        return characterRepository.save(character);
    }
}