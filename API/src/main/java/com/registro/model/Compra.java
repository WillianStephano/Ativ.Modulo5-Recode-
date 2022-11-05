package com.registro.model;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table (name = "compra")
public class Compra implements Serializable {


	private static final long serialVersionUID = 1L;
	
	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id_compra;
	
	@Column
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate data_compra;
	
	@Column
	private double valor_compra;
	
	@Column
	private String forma_pagamento;

	public Compra() {
		super();
	}

	public Compra(long id_compra, LocalDate data_compra, double valor_compra, String forma_pagamento) {
		super();
		this.id_compra = id_compra;
		this.data_compra = data_compra;
		this.valor_compra = valor_compra;
		this.forma_pagamento = forma_pagamento;
	}

	public long getId_compra() {
		return id_compra;
	}

	public void setId_compra(long id_compra) {
		this.id_compra = id_compra;
	}

	public LocalDate getData_compra() {
		return data_compra;
	}

	public void setData_compra(LocalDate data_compra) {
		this.data_compra = data_compra;
	}

	public double getValor_compra() {
		return valor_compra;
	}

	public void setValor_compra(double valor_compra) {
		this.valor_compra = valor_compra;
	}

	public String getForma_pagamento() {
		return forma_pagamento;
	}

	public void setForma_pagamento(String forma_pagamento) {
		this.forma_pagamento = forma_pagamento;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id_compra);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Compra other = (Compra) obj;
		return id_compra == other.id_compra;
	}

	@Override
	public String toString() {
		return "Compra [id_compra=" + id_compra + ", data_compra=" + data_compra + ", valor_compra=" + valor_compra
				+ ", forma_pagamento=" + forma_pagamento + "]";
	}
	
	
}
