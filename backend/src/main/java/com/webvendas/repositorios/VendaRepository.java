package com.webvendas.repositorios;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.webvendas.entidades.Venda;

public interface VendaRepository extends JpaRepository<Venda, Long>{

	List<Venda> findAll();
	
}
