package com.example.demo.modelo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter

public class Concreto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    Integer idCalculoConcreto;
    String nombreObra;
    Double largo;
    Double ancho;
    Double grosor;
    Double calculoConcreto;

}
