package com.example.demo.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.modelo.Concreto;

public interface ConcretoRepositorio extends JpaRepository<Concreto, Integer> {

}
