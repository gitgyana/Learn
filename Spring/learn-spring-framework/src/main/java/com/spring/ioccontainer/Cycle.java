package com.spring.ioccontainer;

public class Cycle implements Vehicle {

    @Override
    public void move() {
        System.out.println("Cycle is moving ...");
    }
}
