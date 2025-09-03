package com.spring.core;

public class Client {

    public static void main(String[] args) {

//        Vehicle vehicle = new Car();
//        Vehicle vehicle = new Bike();
        Vehicle vehicle = new Cycle();

        Traveler traveler = new Traveler(vehicle);
        traveler.startJourney();
    }
}
