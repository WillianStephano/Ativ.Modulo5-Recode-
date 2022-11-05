package com.registro.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.registro.model.Compra;

@Repository
public interface CompraRepository extends JpaRepository<Compra, Long>{

}
