package com.devsuperior.AvaliaMovie.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.AvaliaMovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {

}
