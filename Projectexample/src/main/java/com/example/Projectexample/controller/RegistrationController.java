package com.example.Projectexample.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.Projectexample.entity.Registration;
import com.example.Projectexample.service.RegistrationService;

@RestController
@CrossOrigin(origins="*")
public class RegistrationController {
	
	@Autowired
	private RegistrationService services;
	
	@GetMapping("/")
	public Iterable<Registration>getUsers(){
		return services.listAll();
	}
	
	
	@PostMapping(value= "/save")
	private long saveBook(@RequestBody Registration users) {
		services.saveUser(users);
		return users.getId();
	}
	
	
	

}
