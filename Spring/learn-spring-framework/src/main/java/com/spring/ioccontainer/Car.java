package com.spring.ioccontainer;

public class Car implements Vehicle {

    @Override
    public void move() {
        System.out.println("Car is moving ...");
    }
}
