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
    CommandLineRunner initDatabase(CharacterRepository characterRepository) {
        return args -> {
            if (characterRepository.count() > 0) return;

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

            Character nami = new Character();
            nami.setNome("Nami");
            nami.setApelido("Gata Ladra");
            nami.setBando("Chapéus de Palha");
            nami.setCargo("Navegadora");
            nami.setRecompensa("366.000.000");
            nami.setFrutaDoDiabo("Nenhuma");
            nami.setImagemUrl("https://static.wikia.nocookie.net/onepiece/images/9/9b/Nami_Anime_Infobox.png");

            Character usopp = new Character();
            usopp.setNome("Usopp");
            usopp.setApelido("God Usopp");
            usopp.setBando("Chapéus de Palha");
            usopp.setCargo("Atirador");
            usopp.setRecompensa("500.000.000");
            usopp.setFrutaDoDiabo("Nenhuma");
            usopp.setImagemUrl("https://static.wikia.nocookie.net/onepiece/images/2/2c/Usopp_Anime_Infobox.png");

            Character sanji = new Character();
            sanji.setNome("Vismoke Sanji");
            sanji.setApelido("Perna Preta");
            sanji.setBando("Chapéus de Palha");
            sanji.setCargo("Cozinheiro");
            sanji.setRecompensa("1.032.000.000");
            sanji.setFrutaDoDiabo("Nenhuma");
            sanji.setImagemUrl("https://static.wikia.nocookie.net/onepiece/images/1/1e/Sanji_Anime_Infobox.png");

            Character chopper = new Character();
            chopper.setNome("Tony Tony Chopper");
            chopper.setApelido("Amante de Algodão Doce");
            chopper.setBando("Chapéus de Palha");
            chopper.setCargo("Médico");
            chopper.setRecompensa("1.000");
            chopper.setFrutaDoDiabo("Hito Hito no Mi");
            chopper.setImagemUrl("https://static.wikia.nocookie.net/onepiece/images/6/6b/Chopper_Anime_Infobox.png");

            Character robin = new Character();
            robin.setNome("Nico Robin");
            robin.setApelido("A Criança Demônio");
            robin.setBando("Chapéus de Palha");
            robin.setCargo("Arqueóloga");
            robin.setRecompensa("930.000.000");
            robin.setFrutaDoDiabo("Hana Hana no Mi");
            robin.setImagemUrl("https://static.wikia.nocookie.net/onepiece/images/9/9e/Nico_Robin_Anime_Infobox.png");

            Character franky = new Character();
            franky.setNome("Franky");
            franky.setApelido("Cyborg");
            franky.setBando("Chapéus de Palha");
            franky.setCargo("Carpinteiro");
            franky.setRecompensa("394.000.000");
            franky.setFrutaDoDiabo("Nenhuma");
            franky.setImagemUrl("https://static.wikia.nocookie.net/onepiece/images/7/7e/Franky_Anime_Infobox.png");

            Character brook = new Character();
            brook.setNome("Brook");
            brook.setApelido("Soul King");
            brook.setBando("Chapéus de Palha");
            brook.setCargo("Músico");
            brook.setRecompensa("383.000.000");
            brook.setFrutaDoDiabo("Yomi Yomi no Mi");
            brook.setImagemUrl("https://static.wikia.nocookie.net/onepiece/images/2/2e/Brook_Anime_Infobox.png");

            Character jinbe = new Character();
            jinbe.setNome("Jinbe");
            jinbe.setApelido("Cavaleiro do Mar");
            jinbe.setBando("Chapéus de Palha");
            jinbe.setCargo("Timoneiro");
            jinbe.setRecompensa("1.100.000.000");
            jinbe.setFrutaDoDiabo("Nenhuma");
            jinbe.setImagemUrl("https://static.wikia.nocookie.net/onepiece/images/7/7e/Jinbe_Anime_Infobox.png");


            Character teach = new Character();
teach.setNome("Marshall D. Teach");
teach.setApelido("Barba Negra");
teach.setBando("Piratas do Barba Negra");
teach.setCargo("Capitão");
teach.setRecompensa("3.996.000.000");
teach.setFrutaDoDiabo("Yami Yami no Mi / Gura Gura no Mi");
teach.setImagemUrl("https://static.wikia.nocookie.net/onepiece/images/2/2d/Marshall_D._Teach_Anime_Infobox.png");

Character burgess = new Character();
burgess.setNome("Jesus Burgess");
burgess.setApelido("O Campeão");
burgess.setBando("Piratas do Barba Negra");
burgess.setCargo("Timoneiro / Capitão do 1º navio");
burgess.setRecompensa("??");
burgess.setFrutaDoDiabo("Riki Riki no Mi");
burgess.setImagemUrl("https://static.wikia.nocookie.net/onepiece/images/2/2a/Jesus_Burgess_Anime_Infobox.png");

Character shiryu = new Character();
shiryu.setNome("Shiryu");
shiryu.setApelido("da Chuva");
shiryu.setBando("Piratas do Barba Negra");
shiryu.setCargo("Capitão do 2º navio");
shiryu.setRecompensa("??");
shiryu.setFrutaDoDiabo("Suke Suke no Mi");
shiryu.setImagemUrl("https://static.wikia.nocookie.net/onepiece/images/2/2e/Shiryu_Anime_Infobox.png");

Character vanAugur = new Character();
vanAugur.setNome("Van Augur");
vanAugur.setApelido("O Supersônico");
vanAugur.setBando("Piratas do Barba Negra");
vanAugur.setCargo("Atirador / Capitão do 3º navio");
vanAugur.setRecompensa("??");
vanAugur.setFrutaDoDiabo("Wapu Wapu no Mi");
vanAugur.setImagemUrl("https://static.wikia.nocookie.net/onepiece/images/2/2e/Van_Augur_Anime_Infobox.png");

Character pizarro = new Character();
pizarro.setNome("Avalo Pizarro");
pizarro.setApelido("O Rei Corrupto");
pizarro.setBando("Piratas do Barba Negra");
pizarro.setCargo("Capitão do 4º navio");
pizarro.setRecompensa("??");
pizarro.setFrutaDoDiabo("Shima Shima no Mi");
pizarro.setImagemUrl("https://static.wikia.nocookie.net/onepiece/images/2/2e/Avalo_Pizarro_Anime_Infobox.png");

Character laffitte = new Character();
laffitte.setNome("Laffitte");
laffitte.setApelido("O Demônio");
laffitte.setBando("Piratas do Barba Negra");
laffitte.setCargo("Navegador / Capitão do 5º navio");
laffitte.setRecompensa("??");
laffitte.setFrutaDoDiabo("Desconhecida");
laffitte.setImagemUrl("https://static.wikia.nocookie.net/onepiece/images/2/2e/Laffitte_Anime_Infobox.png");

Character devon = new Character();
devon.setNome("Catarina Devon");
devon.setApelido("A Caçadora da Lua Crescente");
devon.setBando("Piratas do Barba Negra");
devon.setCargo("Capitã do 6º navio");
devon.setRecompensa("??");
devon.setFrutaDoDiabo("Inu Inu no Mi, modelo Kyubi no Kitsune");
devon.setImagemUrl("https://static.wikia.nocookie.net/onepiece/images/2/2e/Catarina_Devon_Anime_Infobox.png");

Character wolf = new Character();
wolf.setNome("Sanjuan Wolf");
wolf.setApelido("O Grande Navio de Batalha");
wolf.setBando("Piratas do Barba Negra");
wolf.setCargo("Capitão do 7º navio");
wolf.setRecompensa("??");
wolf.setFrutaDoDiabo("Deka Deka no Mi");
wolf.setImagemUrl("https://static.wikia.nocookie.net/onepiece/images/2/2e/Sanjuan_Wolf_Anime_Infobox.png");

Character vasco = new Character();
vasco.setNome("Vasco Shot");
vasco.setApelido("O Rei da Bebedeira");
vasco.setBando("Piratas do Barba Negra");
vasco.setCargo("Capitão do 8º navio");
vasco.setRecompensa("??");
vasco.setFrutaDoDiabo("Gabu Gabu no Mi");
vasco.setImagemUrl("https://static.wikia.nocookie.net/onepiece/images/2/2e/Vasco_Shot_Anime_Infobox.png");

Character docQ = new Character();
docQ.setNome("Doc Q");
docQ.setApelido("O Ceifador da Morte");
docQ.setBando("Piratas do Barba Negra");
docQ.setCargo("Médico / Capitão do 9º navio");
docQ.setRecompensa("??");
docQ.setFrutaDoDiabo("Shiku Shiku no Mi");
docQ.setImagemUrl("https://static.wikia.nocookie.net/onepiece/images/2/2e/Doc_Q_Anime_Infobox.png");


            characterRepository.saveAll(List.of(
                luffy, zoro, nami, usopp, sanji, chopper, robin, franky, brook, jinbe, 
                teach, burgess, shiryu, vanAugur, pizarro, laffitte, devon, wolf, vasco, docQ
            ));
        };
    }
}