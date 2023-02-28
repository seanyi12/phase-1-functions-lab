const distanceFromHqInBlocks = function(location) {
if(location < 42) {
  return 42 - location
}
return location - 42

}
const distanceFromHqInFeet = function(location1){
  if(location1 < 42){
  return (42-location1) * 264
  }
  return (location1 - 42) * 264
}
const distanceTravelledInFeet = function(location2,location3){
if(location3 < location2){
  return (location2 - location3) * 264
}
return (location3 - location2) * 264
}
const calculatesFarePrice = function(location4,location5){
  //return (location5 - location4) * 0
  let distance = distanceTravelledInFeet(location4,location5)
  if(distance < 400){
    return 0
  }
  if (distance > 2000 && distance < 2500) {
    return (25)
  }
  if (distance > 2000 && distance > 2500){
    return 'cannot travel that far'
  }
  return (distance-400) * 0.02
  
  

  
}
