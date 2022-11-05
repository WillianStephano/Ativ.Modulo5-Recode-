package com.registro.model;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table (name = "destinos")
public class Destinos implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id_destino;
	
	@Column
	private String nomeDestino;

	@Column
	private String infoDestino;
	
	public Destinos() {
		super();
	}

	public Destinos(int id_destino, String nome_destino, String info_destino) {
		super();
		this.id_destino = id_destino;
		this.nomeDestino = nome_destino;
		this.infoDestino = info_destino;
	}

	public long getId_destino() {
		return id_destino;
	}

	public void setId_destino(int id_destino) {
		this.id_destino = id_destino;
	}

	public String getNome_destino() {
		return nomeDestino;
	}

	public void setNome_destino(String nome_destino) {
		this.nomeDestino = nome_destino;
	}
	
	public String getInfo_destino() {
		return nomeDestino;
	}

	public void setInfo_destino(String info_destino) {
		this.infoDestino = info_destino;
	}


	@Override
	public int hashCode() {
		return Objects.hash(id_destino);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Destinos other = (Destinos) obj;
		return id_destino == other.id_destino;
	}

	@Override
	public String toString() {
		return "Destinos [id_destino=" + id_destino + ", nome_destino=" + infoDestino + "]";
	}
	
	
}
