package com.onepiece.onepiece_api.controller;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
    public Page<Character> findAll(@RequestParam(defaultValue = "0") int page,
                                   @RequestParam(defaultValue = "10") int size) {
        Pageable pageable = PageRequest.of(page, size);
        return characterService.findAll(pageable);
    }
    
    @PostMapping
    public Character create(@RequestBody Character character) {
        return characterService.save(character);
    }

    
    @PutMapping("/{id}")
    public ResponseEntity<Character> update(@PathVariable String id, @RequestBody Character character) {
        return characterService.update(id, character)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable String id) {
        if (characterService.delete(id)) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Character> findById(@PathVariable String id) {
        return characterService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}

