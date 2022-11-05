package com.registro.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.registro.model.Compra;
import com.registro.service.CompraService;

@RestController
@RequestMapping(value = "/compra")
@CrossOrigin("*")
public class CompraController {
	
	@Autowired
	private CompraService service;
	
	
	@GetMapping(value = "{id}")
	public ResponseEntity<Compra> findById(@PathVariable Long id) { 
		Compra compra = service.findById(id);
		return ResponseEntity.ok().body(compra);
	}
	
	
	@GetMapping
	public ResponseEntity<List<Compra>> findAll() { 
		List<Compra> compra = service.findAll();
		return ResponseEntity.ok().body(compra);
	}
	

	@PostMapping
	public ResponseEntity<Compra> save(@RequestBody Compra compra) { 
		Compra obj = service.save(compra);
		return ResponseEntity.ok().body(obj);
	}
	
	
	@PutMapping
	public ResponseEntity<Compra> update(@RequestBody Compra compra) { 
		Compra obj = service.update(compra);
		return ResponseEntity.ok().body(obj);
	}
	
	
	@DeleteMapping(value = "{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id) { 
		service.deleteCompra(id);
		return ResponseEntity.noContent().build();
	}
	
}