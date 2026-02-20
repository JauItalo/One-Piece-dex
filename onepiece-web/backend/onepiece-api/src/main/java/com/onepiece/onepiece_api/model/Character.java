package com.onepiece.onepiece_api.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Document(collection = "characters")
@Data
public class Character {
    @Id
    private String id;

    private String nome;
    private String apelido;
    private String bando;
    private String cargo;
    private String recompensa;
    private String frutaDoDiabo;
    private String imagemUrl;
    private String biografia;
}
