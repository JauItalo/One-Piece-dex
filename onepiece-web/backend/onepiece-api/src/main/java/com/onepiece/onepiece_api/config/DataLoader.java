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
            luffy.setBiografia("Luffy é o capitão dos Chapéus de Palha e sonha em se tornar o Rei dos Piratas. Ele possui a Gomu Gomu no Mi, que lhe dá poderes de borracha. Conhecido por sua coragem, otimismo e fome insaciável, Luffy inspira todos ao seu redor a perseguirem seus sonhos.");

            Character zoro = new Character();
            zoro.setNome("Roronoa Zoro");
            zoro.setApelido("Caçador de Piratas");
            zoro.setBando("Chapéus de Palha");
            zoro.setCargo("Espadachim");
            zoro.setRecompensa("1.111.000.000");
            zoro.setFrutaDoDiabo("Nenhuma");
            zoro.setImagemUrl("https://static.wikia.nocookie.net/onepiece/images/8/84/Roronoa_Zoro_Anime_Infobox.png");
            zoro.setBiografia("Zoro é o espadachim dos Chapéus de Palha, famoso por sua técnica de três espadas. Ele busca se tornar o maior espadachim do mundo e é conhecido por sua força, lealdade e péssimo senso de direção.");

            Character nami = new Character();
            nami.setNome("Nami");
            nami.setApelido("Gata Ladra");
            nami.setBando("Chapéus de Palha");
            nami.setCargo("Navegadora");
            nami.setRecompensa("366.000.000");
            nami.setFrutaDoDiabo("Nenhuma");
            nami.setImagemUrl("https://static.wikia.nocookie.net/onepiece/images/9/9b/Nami_Anime_Infobox.png");
            nami.setBiografia("Nami é a navegadora dos Chapéus de Palha, especialista em mapas e clima. Superou um passado difícil e agora sonha em mapear o mundo inteiro.");

            Character usopp = new Character();
            usopp.setNome("Usopp");
            usopp.setApelido("God Usopp");
            usopp.setBando("Chapéus de Palha");
            usopp.setCargo("Atirador");
            usopp.setRecompensa("500.000.000");
            usopp.setFrutaDoDiabo("Nenhuma");
            usopp.setImagemUrl("https://static.wikia.nocookie.net/onepiece/images/2/2c/Usopp_Anime_Infobox.png");
            usopp.setBiografia("Usopp é o atirador dos Chapéus de Palha, conhecido por sua criatividade, coragem e histórias exageradas. Sonha em se tornar um bravo guerreiro do mar.");

            Character sanji = new Character();
            sanji.setNome("Vismoke Sanji");
            sanji.setApelido("Perna Preta");
            sanji.setBando("Chapéus de Palha");
            sanji.setCargo("Cozinheiro");
            sanji.setRecompensa("1.032.000.000");
            sanji.setFrutaDoDiabo("Nenhuma");
            sanji.setImagemUrl("https://static.wikia.nocookie.net/onepiece/images/1/1e/Sanji_Anime_Infobox.png");
            sanji.setBiografia("Sanji é o cozinheiro dos Chapéus de Palha, mestre em artes marciais com as pernas. É cavalheiro, apaixonado por mulheres e sonha encontrar o All Blue.");

            Character chopper = new Character();
            chopper.setNome("Tony Tony Chopper");
            chopper.setApelido("Amante de Algodão Doce");
            chopper.setBando("Chapéus de Palha");
            chopper.setCargo("Médico");
            chopper.setRecompensa("1.000");
            chopper.setFrutaDoDiabo("Hito Hito no Mi");
            chopper.setImagemUrl("https://static.wikia.nocookie.net/onepiece/images/6/6b/Chopper_Anime_Infobox.png");
            chopper.setBiografia("Chopper é o médico e mascote dos Chapéus de Palha. Uma rena que comeu a Hito Hito no Mi, é adorável, inteligente e sonha em curar todas as doenças do mundo.");

            Character robin = new Character();
            robin.setNome("Nico Robin");
            robin.setApelido("A Criança Demônio");
            robin.setBando("Chapéus de Palha");
            robin.setCargo("Arqueóloga");
            robin.setRecompensa("930.000.000");
            robin.setFrutaDoDiabo("Hana Hana no Mi");
            robin.setImagemUrl("https://static.wikia.nocookie.net/onepiece/images/9/9e/Nico_Robin_Anime_Infobox.png");
            robin.setBiografia("Robin é a arqueóloga dos Chapéus de Palha, capaz de ler Poneglyphs. Busca a verdadeira história do mundo e valoriza profundamente seus amigos.");

            Character franky = new Character();
            franky.setNome("Franky");
            franky.setApelido("Cyborg");
            franky.setBando("Chapéus de Palha");
            franky.setCargo("Carpinteiro");
            franky.setRecompensa("394.000.000");
            franky.setFrutaDoDiabo("Nenhuma");
            franky.setImagemUrl("https://static.wikia.nocookie.net/onepiece/images/7/7e/Franky_Anime_Infobox.png");
            franky.setBiografia("Franky é o carismático carpinteiro dos Chapéus de Palha, um cyborg com grande coração e paixão por construir navios. Responsável pelo Thousand Sunny, é conhecido por seu estilo extravagante e grito 'SUPER!'.");

            Character brook = new Character();
            brook.setNome("Brook");
            brook.setApelido("Soul King");
            brook.setBando("Chapéus de Palha");
            brook.setCargo("Músico");
            brook.setRecompensa("383.000.000");
            brook.setFrutaDoDiabo("Yomi Yomi no Mi");
            brook.setImagemUrl("https://static.wikia.nocookie.net/onepiece/images/2/2e/Brook_Anime_Infobox.png");
            brook.setBiografia("Brook é o músico esquelético dos Chapéus de Palha. Após comer a Yomi Yomi no Mi, voltou à vida como um esqueleto. É alegre, adora música e piadas, e sonha em reencontrar Laboon.");

            Character jinbe = new Character();
            jinbe.setNome("Jinbe");
            jinbe.setApelido("Cavaleiro do Mar");
            jinbe.setBando("Chapéus de Palha");
            jinbe.setCargo("Timoneiro");
            jinbe.setRecompensa("1.100.000.000");
            jinbe.setFrutaDoDiabo("Nenhuma");
            jinbe.setImagemUrl("https://static.wikia.nocookie.net/onepiece/images/7/7e/Jinbe_Anime_Infobox.png");
            jinbe.setBiografia("Jinbe é um homem-peixe mestre do karatê e ex-shichibukai. É o timoneiro dos Chapéus de Palha, conhecido por sua honra, força e papel na luta pela igualdade entre humanos e homens-peixe.");


            Character teach = new Character();
            teach.setNome("Marshall D. Teach");
            teach.setApelido("Barba Negra");
            teach.setBando("Piratas do Barba Negra");
            teach.setCargo("Capitão");
            teach.setRecompensa("3.996.000.000");
            teach.setFrutaDoDiabo("Yami Yami no Mi / Gura Gura no Mi");
            teach.setImagemUrl("https://static.wikia.nocookie.net/onepiece/images/2/2d/Marshall_D._Teach_Anime_Infobox.png");
            teach.setBiografia("Barba Negra é o ambicioso capitão dos Piratas do Barba Negra. Único a possuir dois poderes de Akuma no Mi, é um dos maiores antagonistas do mundo de One Piece, movido por sonhos grandiosos e crueldade.");

            Character burgess = new Character();
            burgess.setNome("Jesus Burgess");
            burgess.setApelido("O Campeão");
            burgess.setBando("Piratas do Barba Negra");
            burgess.setCargo("Timoneiro / Capitão do 1º navio");
            burgess.setRecompensa("??");
            burgess.setFrutaDoDiabo("Riki Riki no Mi");
            burgess.setImagemUrl("https://static.wikia.nocookie.net/onepiece/images/2/2a/Jesus_Burgess_Anime_Infobox.png");
            burgess.setBiografia("Jesus Burgess é o timoneiro e capitão do 1º navio dos Piratas do Barba Negra. Conhecido por sua força física e fanatismo por lutas, é leal a Teach e busca sempre provar seu valor.");

            Character shiryu = new Character();
            shiryu.setNome("Shiryu");
            shiryu.setApelido("da Chuva");
            shiryu.setBando("Piratas do Barba Negra");
            shiryu.setCargo("Capitão do 2º navio");
            shiryu.setRecompensa("??");
            shiryu.setFrutaDoDiabo("Suke Suke no Mi");
            shiryu.setImagemUrl("https://static.wikia.nocookie.net/onepiece/images/2/2e/Shiryu_Anime_Infobox.png");
            shiryu.setBiografia("Shiryu, o da Chuva, é o capitão do 2º navio dos Piratas do Barba Negra. Ex-carcereiro de Impel Down, é temido por sua crueldade e habilidade com a espada.");

            Character vanAugur = new Character();
            vanAugur.setNome("Van Augur");
            vanAugur.setApelido("O Supersônico");
            vanAugur.setBando("Piratas do Barba Negra");
            vanAugur.setCargo("Atirador / Capitão do 3º navio");
            vanAugur.setRecompensa("??");
            vanAugur.setFrutaDoDiabo("Wapu Wapu no Mi");
            vanAugur.setImagemUrl("https://static.wikia.nocookie.net/onepiece/images/2/2e/Van_Augur_Anime_Infobox.png");
            vanAugur.setBiografia("Van Augur é o atirador e capitão do 3º navio dos Piratas do Barba Negra. É calmo, preciso e letal, famoso por sua pontaria e tranquilidade em batalha.");

            Character pizarro = new Character();
            pizarro.setNome("Avalo Pizarro");
            pizarro.setApelido("O Rei Corrupto");
            pizarro.setBando("Piratas do Barba Negra");
            pizarro.setCargo("Capitão do 4º navio");
            pizarro.setRecompensa("??");
            pizarro.setFrutaDoDiabo("Shima Shima no Mi");
            pizarro.setImagemUrl("https://static.wikia.nocookie.net/onepiece/images/2/2e/Avalo_Pizarro_Anime_Infobox.png");
            pizarro.setBiografia("Avalo Pizarro, o Rei Corrupto, é o capitão do 4º navio dos Piratas do Barba Negra. Ex-rei tirano, é conhecido por sua crueldade e ambição.");

            Character laffitte = new Character();
            laffitte.setNome("Laffitte");
            laffitte.setApelido("O Demônio");
            laffitte.setBando("Piratas do Barba Negra");
            laffitte.setCargo("Navegador / Capitão do 5º navio");
            laffitte.setRecompensa("??");
            laffitte.setFrutaDoDiabo("Desconhecida");
            laffitte.setImagemUrl("https://static.wikia.nocookie.net/onepiece/images/2/2e/Laffitte_Anime_Infobox.png");
            laffitte.setBiografia("Laffitte é o navegador e capitão do 5º navio dos Piratas do Barba Negra. Misterioso e persuasivo, é mestre em infiltração e manipulação.");

            Character devon = new Character();
            devon.setNome("Catarina Devon");
            devon.setApelido("A Caçadora da Lua Crescente");
            devon.setBando("Piratas do Barba Negra");
            devon.setCargo("Capitã do 6º navio");
            devon.setRecompensa("??");
            devon.setFrutaDoDiabo("Inu Inu no Mi, modelo Kyubi no Kitsune");
            devon.setImagemUrl("https://static.wikia.nocookie.net/onepiece/images/2/2e/Catarina_Devon_Anime_Infobox.png");
            devon.setBiografia("Catarina Devon é a capitã do 6º navio dos Piratas do Barba Negra. Conhecida como a Caçadora da Lua Crescente, é sádica e possui uma Akuma no Mi mítica.");

            Character wolf = new Character();
            wolf.setNome("Sanjuan Wolf");
            wolf.setApelido("O Grande Navio de Batalha");
            wolf.setBando("Piratas do Barba Negra");
            wolf.setCargo("Capitão do 7º navio");
            wolf.setRecompensa("??");
            wolf.setFrutaDoDiabo("Deka Deka no Mi");
            wolf.setImagemUrl("https://static.wikia.nocookie.net/onepiece/images/2/2e/Sanjuan_Wolf_Anime_Infobox.png");
            wolf.setBiografia("Sanjuan Wolf é o gigante e capitão do 7º navio dos Piratas do Barba Negra. Seu tamanho colossal o torna uma arma viva em batalhas navais.");

            Character vasco = new Character();
            vasco.setNome("Vasco Shot");
            vasco.setApelido("O Rei da Bebedeira");
            vasco.setBando("Piratas do Barba Negra");
            vasco.setCargo("Capitão do 8º navio");
            vasco.setRecompensa("??");
            vasco.setFrutaDoDiabo("Gabu Gabu no Mi");
            vasco.setImagemUrl("https://static.wikia.nocookie.net/onepiece/images/2/2e/Vasco_Shot_Anime_Infobox.png");
            vasco.setBiografia("Vasco Shot é o capitão do 8º navio dos Piratas do Barba Negra. Conhecido por seu comportamento desregrado e força bruta.");

            Character docQ = new Character();
            docQ.setNome("Doc Q");
            docQ.setApelido("O Ceifador da Morte");
            docQ.setBando("Piratas do Barba Negra");
            docQ.setCargo("Médico / Capitão do 9º navio");
            docQ.setRecompensa("??");
            docQ.setFrutaDoDiabo("Shiku Shiku no Mi");
            docQ.setImagemUrl("https://static.wikia.nocookie.net/onepiece/images/2/2e/Doc_Q_Anime_Infobox.png");
            docQ.setBiografia("Doc Q é o médico e capitão do 9º navio dos Piratas do Barba Negra. Frágil de saúde, mas perigoso, sempre acompanhado de seu cavalo Stronger.");


            characterRepository.saveAll(List.of(
                luffy, zoro, nami, usopp, sanji, chopper, robin, franky, brook, jinbe, 
                teach, burgess, shiryu, vanAugur, pizarro, laffitte, devon, wolf, vasco, docQ
            ));
        };
    }
}