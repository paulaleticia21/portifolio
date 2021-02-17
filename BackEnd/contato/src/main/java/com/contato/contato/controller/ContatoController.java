package com.contato.contato.controller;


import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.contato.contato.model.Contato;
import com.contato.contato.repository.ContatoRepository;

@RestController
@RequestMapping("/contatos")
@CrossOrigin(origins="*")
public class ContatoController {
	
	@Autowired
	private ContatoRepository repository;
	
	
	@GetMapping("/all")
	public Object GetAll() {
		return ResponseEntity.ok(repository.findAll());
	}
	@GetMapping("/getById1/{id}")
	public Optional<Contato> encontrarUm(@PathVariable Long id) {
		return repository.findById(id);
	}
	
	@GetMapping("/texto/{texto}")
	public ResponseEntity<List<Contato>> GetByTitulo(@PathVariable String texto){
	
		return ResponseEntity.ok(repository.findAllByTextoContainingIgnoreCase(texto));
	}
	
	 @PostMapping ("/post")
	 public ResponseEntity<Contato> post (@RequestBody Contato contato){
		 return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(contato));
	 }
	 
	 

}
