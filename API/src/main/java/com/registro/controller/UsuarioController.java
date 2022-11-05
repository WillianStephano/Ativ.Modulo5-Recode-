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

import com.registro.model.Usuario;
import com.registro.service.UsuarioService;

@RestController
@RequestMapping(value = "/flyaway/usuarios")
@CrossOrigin("*")
public class UsuarioController {
	
	@Autowired
	private UsuarioService service;
	
	
	@GetMapping(value = "{id}")
	public ResponseEntity<Usuario> findById(@PathVariable Long id) { 
		Usuario usuario = service.findById(id);
		return ResponseEntity.ok().body(usuario);
	}
	
	
	@GetMapping
	public ResponseEntity<List<Usuario>> findAll() { 
		List<Usuario> usuarios = service.findAll();
		return ResponseEntity.ok().body(usuarios);
	}
	

	@PostMapping
	public ResponseEntity<Usuario> save(@RequestBody Usuario usuario) { 
		Usuario obj = service.save(usuario);
		return ResponseEntity.ok().body(obj);
	}
	
	
	
    @PutMapping("{id}")
    public ResponseEntity<Usuario> updateUsuario(@PathVariable("id") long id, 
            @RequestBody Usuario usuario){
        return new ResponseEntity<Usuario>(service.updateUsuario(usuario, id), HttpStatus.OK);
    }
	
	
	@DeleteMapping(value = "{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id) { 
		service.deleteUsuario(id);
		return ResponseEntity.noContent().build();
	}
	
}