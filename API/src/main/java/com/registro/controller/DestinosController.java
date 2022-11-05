package com.registro.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

import com.registro.model.Destinos;
import com.registro.service.DestinosService;

@RestController
@RequestMapping(value = "/flyaway/destinos")
@CrossOrigin("*")
public class DestinosController {
	
	@Autowired
	private DestinosService service;
	
	
	@GetMapping(value = "{id}")
	public ResponseEntity<Destinos> findById(@PathVariable Long id) { 
		Destinos destinos = service.findById(id);
		return ResponseEntity.ok().body(destinos);
	}
	
	
	@GetMapping
	public ResponseEntity<List<Destinos>> findAll() { 
		List<Destinos> destinos = service.findAll();
		return ResponseEntity.ok().body(destinos);
	}
	

	@PostMapping
	public ResponseEntity<Destinos> save(@RequestBody Destinos destino) { 
		Destinos obj = service.save(destino);
		return ResponseEntity.ok().body(obj);
	}
	
	
	@PutMapping("{id}")
	    public ResponseEntity<Destinos> updateDestinos(@PathVariable("id") long id, 
	            @RequestBody Destinos destinos){
	        return new ResponseEntity<Destinos>(service.updateDestinos(destinos, id), HttpStatus.OK);
	}
	
	
	@DeleteMapping(value = "{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id) { 
		service.deleteDestinos(id);
		return ResponseEntity.noContent().build();
	}
	
}