package com.contato.contato.repository;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.contato.contato.model.Contato;

@Repository
public interface ContatoRepository extends JpaRepository<Contato, Long>{
	public List<Contato> findAllByTextoContainingIgnoreCase(String texto);
}