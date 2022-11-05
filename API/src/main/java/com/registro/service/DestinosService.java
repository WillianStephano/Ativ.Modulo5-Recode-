package com.registro.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.registro.model.Destinos;

import com.registro.repositories.DestinosRepository;
import com.registro.service.exception.ObjectNotFoundException;

@Service
public class DestinosService {

	@Autowired
	private DestinosRepository destRepo;
	
	public Destinos findById(Long id) {
		Optional<Destinos> destinos = destRepo.findById(id);
		return destinos.orElseThrow(() -> new ObjectNotFoundException("Objeto com id: " + id + " Não foi encontrado. Tipo: " + Destinos.class.getName()));
	}
	
	public List<Destinos> findAll(){
		return destRepo.findAll();
	}
	
	public Destinos save(Destinos destinos) {
		return destRepo.save(destinos);
	}
	
	
    public Destinos updateDestinos (Destinos destinos, long id) { 
    	Destinos destinosExistente = destRepo.findById(id).orElseThrow(
                () -> new ObjectNotFoundException("Objeto com id: " + id + " Não foi encontrado. Tipo: " + Destinos.class.getName()));
    	destinosExistente.setNome_destino(destinos.getNome_destino());
    	destRepo.save(destinosExistente);
        return destinosExistente;
    }
	
	public void deleteDestinos(Long id) {
    	destRepo.deleteById(id);
    }

	
}
