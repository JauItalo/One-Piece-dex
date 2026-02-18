package com.onepiece.onepiece_api.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.onepiece.onepiece_api.model.Character;
import com.onepiece.onepiece_api.service.CharacterService;

@RestController
@RequestMapping("/characters")
@CrossOrigin(origins = "http://localhost:5173")
public class CharacterController {

    private final CharacterService characterService;

    public CharacterController(CharacterService characterService){
        this.characterService = characterService;
    }

    @GetMapping
    public List<Character> findAll() {
        return characterService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Character> findById(@PathVariable Long id) {
        return characterService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}

