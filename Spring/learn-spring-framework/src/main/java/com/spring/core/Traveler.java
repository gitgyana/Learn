package com.spring.core;

public class Traveler {

//    Car car = null;
//    Bike bike = null;
    Cycle cycle = null;
    public Traveler() {
//        this.car = new Car();
//        this.bike = new Bike();
        this.cycle = new Cycle();
    }

    public void startJourney() {
//        this.car.move();
//        this.bike.move();
        this.cycle.move();
    }
}
