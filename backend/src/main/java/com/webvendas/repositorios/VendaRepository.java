package com.webvendas.repositorios;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.webvendas.entidades.Venda;

@Repository
public interface VendaRepository extends JpaRepository<Venda, Long>{

	
	@Query("SELECT obj FROM Venda obj WHERE obj.date BETWEEN :minDate AND :maxDate ORDER BY obj.total DESC")
	Page<Venda> findVendas(LocalDate minDate, LocalDate maxDate, Pageable pageable);
	
}
