package com.example.Projectexample.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.Projectexample.entity.Registration;
import com.example.Projectexample.repository.RegistrationRepository;

@Service
public class RegistrationService {
	
	@Autowired
	private RegistrationRepository repo;
	
	public Iterable<Registration> listAll(){
		return this.repo.findAll();
	}
	
	public void saveUser(Registration user) {
		repo.save(user);
	}
	

}
