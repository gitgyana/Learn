package com.spring.javabasedconfig;

public class Cycle implements Vehicle {

    @Override
    public void move() {
        System.out.println("Cycle is moving ...");
    }
}
