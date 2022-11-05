package com.registro.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.registro.model.Compra;
import com.registro.repositories.CompraRepository;
import com.registro.service.exception.ObjectNotFoundException;



@Service
public class CompraService {

	@Autowired
	private CompraRepository compraRepo;
	
	public Compra findById(Long id) {
		Optional<Compra> destinos = compraRepo.findById(id);
		return destinos.orElseThrow(() -> new ObjectNotFoundException("Objeto com id: " + id + " Não foi encontrado. Tipo: " + Compra.class.getName()));
	}
	
	public List<Compra> findAll(){
		return compraRepo.findAll();
	}
	
	public Compra save(Compra compra) {
		return compraRepo.save(compra);
	}
	
	public Compra update(Compra compra) {
		findById(compra.getId_compra());
		return compraRepo.save(compra);
	}
	
	public void deleteCompra(Long id) {
    	compraRepo.deleteById(id);
    }
}


