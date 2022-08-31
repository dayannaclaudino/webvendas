package com.webvendas.repositorios;

import java.time.LocalDate;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.webvendas.entidades.Venda;

public interface VendaRepository extends JpaRepository<Venda, Long>{
	@Query("SELECT obj FROM Venda obj WHERE obj.date BETWEEN :min AND :max ORDER BY obj.total DESC")
	Page<Venda> findVendas(LocalDate min, LocalDate max, Pageable pageable);
	
}
