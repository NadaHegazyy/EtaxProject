package com.example.Projectexample.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Index;
import javax.persistence.Table;


@Entity
@Table(name="Users",indexes= {@Index(name = "PRIMARY", columnList = "id",unique=true),
		@Index(name = "username", columnList = "username",unique=true),
		@Index(name = "email", columnList = "email",unique=true),
		@Index(name = "mobile", columnList = "mobile",unique=true),
		@Index(name = "id", columnList = "nationalID",unique=true)})

public class Registration {
	
	@Id
	@Column(name="id")
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	
	private long id;
	
	@Column(name="username",nullable=false)
	
	private String username;
	
	@Column(name="email",nullable=false)
	private String email;
	
	@Column(name="password",nullable=false)
	private String password;
	
	@Column(name="mobile",nullable=false)
	private String mobile;
	
	@Column(name="nationalID",nullable=false)
	private String nationalID;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getNationalID() {
		return nationalID;
	}

	public void setNationalID(String nationalID) {
		this.nationalID = nationalID;
	}
	

	
	
	
	

}
