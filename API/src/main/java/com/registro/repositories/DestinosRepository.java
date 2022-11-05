package com.registro.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.registro.model.Destinos;

@Repository
public interface DestinosRepository extends JpaRepository <Destinos, Long>{

}
