package com.onepiece.onepiece_api.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.onepiece.onepiece_api.model.Character;
import com.onepiece.onepiece_api.repository.CharacterRepository;

@Service
public class CharacterService {

    @Autowired
    private CharacterRepository characterRepository;
    


    public Page<Character> findAll(Pageable pageable) {
        return characterRepository.findAll(pageable);
    }

    public Optional<Character> findById(String id) {
        return characterRepository.findById(id);
    }


    public Character save(Character character) {
        return characterRepository.save(character);
    }

    public Optional<Character> update(String id, Character character) {
        return characterRepository.findById(id).map(existing -> {
            character.setId(id);
            return characterRepository.save(character);
        });
    }

    public boolean delete(String id) {
        if (characterRepository.existsById(id)) {
            characterRepository.deleteById(id);
            return true;
        }
        return false;
    }
}