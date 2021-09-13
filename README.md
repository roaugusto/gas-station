# Gas Station Test

There is a queue of N cars waiting at a filling station. There are three fuel dispensers 
at the station, labeled X, Y and Z, respectively. Each dispenser has some finite 
amount of fuel in it; at all times the amount of available fuel is clearly displayed on each dispenser. 

When a car arrives at the front of the queue, the driver can choose to drive to 
any dispenser not occupied by another car. Suppose that the fuel demand is D liters 
for this car. The driver must choose a dispenser which has at least D liters of fuel. 

If all unoccupied dispensers have less than D liters, the driver must wait for some other 
car to finish tanking up. If all dispensers are unoccupied, and none has at least D liters, 
the driver is unable to refuel the car and it blocks the queue indefinitely. 

If more than one unoccupied dispenser has at least D liters, the driver chooses the one 
labeled with the smallest letter among them. Each driver will have to wait some amount of 
time before he or she starts refueling the car. Calculate the maximum waiting time among all drivers. 

Assume that tanking one liter of fuel takes exactly one second, and moving cars is instantaneous. 

Write a function: that, given an array A consisting of N integers (which specify the fuel demands in liters 
for subsequent cars in the queue), and numbers X, Y and Z (which specify the initial amount of fuel in the 
respective dispensers), returns the maximum waiting time for a car. If any car is unable to refuel, 
the function should return −1. 

For example, given 

X = 7, Y = 11, Z = 3

and the following array A: 

```
A[0] = 2 
A[1] = 8 
A[2] = 4 
A[3] = 3 
A[4] = 2 
```

the function should return 8. 

The subsequent cars will have to wait in the queue for 0, 0, 2, 2 and 8 seconds, respectively. 

The scenario is as follows: 

For X = 4, Y = 0, Z = 3 

and array A: 
```
A[0] = 5 
```

the function should return −1. 

Write an efficient algorithm for the following assumptions