package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SampleForLombokApplication {

	public static void main(String[] args) {
		SpringApplication.run(SampleForLombokApplication.class, args);
		
		Student student = new Student();
		student.setId(100);
		student.setFirstName("Gyana");
		student.setLastName("Priyadarshi");
		
		System.out.println(student.getId());
		System.out.println(student.getFirstName());
		System.out.println(student.getLastName());
	}

}
