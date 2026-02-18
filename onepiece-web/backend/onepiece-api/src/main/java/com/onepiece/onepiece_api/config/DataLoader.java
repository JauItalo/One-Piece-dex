package com.onepiece.onepiece_api.config;

import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.onepiece.onepiece_api.model.Character;
import com.onepiece.onepiece_api.repository.CharacterRepository;
@Configuration
public class DataLoader {


    @Bean
    CommandLineRunner initDataBase(CharacterRepository characterRepository){
        return args -> {
            if (characterRepository.count() > 0)
                return;

            Character luffy = new Character();
            luffy.setNome("Monkey D. Luffy");
            luffy.setApelido("Mugiwara");
            luffy.setBando("Chapéus de Palha");
            luffy.setCargo("Capitão");
            luffy.setRecompensa("3.000.000.000");
            luffy.setFrutaDoDiabo("Gomu Gomu no Mi");
            luffy.setImagemUrl("https://static.wikia.nocookie.net/onepiece/images/6/6f/Luffy_Anime_Infobox.png");

            Character zoro = new Character();
            zoro.setNome("Roronoa Zoro");
            zoro.setApelido("Caçador de Piratas");
            zoro.setBando("Chapéus de Palha");
            zoro.setCargo("Espadachim");
            zoro.setRecompensa("1.111.000.000");
            zoro.setFrutaDoDiabo("Nenhuma");
            zoro.setImagemUrl("https://static.wikia.nocookie.net/onepiece/images/8/84/Roronoa_Zoro_Anime_Infobox.png");

            characterRepository.saveAll(List.of(luffy,zoro));

        };
    }
    
}
