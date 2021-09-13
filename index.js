let busyDispensers = []
let dispenserCapacity = []
let dispenserAvailability = []

let timeAvailabe = []
let timeDispensers = []

let cars = []

let minTimeSpent = 0
let nextAvailablesTime = []

function solution(A, X, Y, Z) {

  // Initializing variables
  init(A, X, Y, Z)

  // While we have cars in the line...
  while (cars.length > 0) {
    const carDemand = cars[0]

    // Get the next available fuel dispenser
    const numDispenser = getNextAvailableDispenser(carDemand)

    // If we got the disperser for the car, we remove it from the line.
    if (numDispenser >= 0) {
      cars.shift()  // <- Remove the first element in an array.
    } else {

      // Here, we are going to verify the min next available time that some dispensers will be available
      minTimeSpent = Math.min(...nextAvailablesTime) 

      // For the next validation, in the nextAvailabesTime array, we remove this min time that we just found.
      nextAvailablesTime = nextAvailablesTime.filter(item => item != minTimeSpent)      

      // Now, we set what dispensers will be available in the next time
      busyDispensers = timeAvailabe.map(item => item <= minTimeSpent ? false : true)

    }

    // If by chance there are no dispensers available, the function should finish with -1
    if(!dispenserAvailability[0] && !dispenserAvailability[1] && !dispenserAvailability[2]) {
      return -1
    }

  }

  // If we manage to remove all cars from the queue, we will return the maximum amount of time a car remained in the queue.
  return Math.max(...timeDispensers)

}

function getNextAvailableDispenser(fuelDemand) {


  // Let's verify the three dispensers available
  for (let i = 0; i < 3; i++) {
    // For each dispenser, let's verify if it's already busy and if the capacity is ok
    if (!busyDispensers[i] && dispenserCapacity[i] >= fuelDemand) {
      busyDispensers[i] = true   // <- Setting dispenser = busy
      dispenserCapacity[i] = dispenserCapacity[i] - fuelDemand // <- Updating capacity
      timeAvailabe[i] = timeAvailabe[i] + fuelDemand  // <- Updating the amount of time each dispenser is spending
      timeDispensers[i] = minTimeSpent // <- Setting the time that the car arrives in dispenser
      nextAvailablesTime.push(minTimeSpent + fuelDemand) // <- Setting next available time
      return i
    } else {
      // Verifying if dispenser is busy and if the capacity is below the requested
      if (!busyDispensers[i] && dispenserCapacity[i] < fuelDemand) {
        dispenserAvailability[i] = false
      }
    }

  }
  return -1
}

function init(A, X, Y, Z) {

  cars = A
  busyDispensers = [false, false, false]
  dispenserAvailability = [true, true, true]
  
  dispenserCapacity = [X, Y, Z]
  timeAvailabe = [0, 0, 0]
  timeDispensers = [0, 0, 0]

}

console.log(solution([2, 8, 4, 3, 2], 7, 11, 3))
console.log(solution([5], 4, 0, 3))