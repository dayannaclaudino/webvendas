package com.webvendas.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.webvendas.entidades.Venda;
import com.webvendas.repositorios.VendaRepository;

@Service
public class VendaService {
	
	@Autowired
	private VendaRepository repository;
	
	public List<Venda> findVendas() {
		return repository.findAll();
	}
}
