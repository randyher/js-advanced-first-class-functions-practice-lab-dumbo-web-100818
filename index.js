const logDriverNames = function (drivers){
  drivers.map((driver) => console.log(driver.name) )
}

function logDriversByHometown(drivers, location){
  let output = drivers.filter((driver) => driver.hometown == location)
  output.forEach(function (elem){ console.log(elem.name) })
}

function driversByRevenue(drivers){
  return drivers.slice().sort(function(driverOne,driverTwo){ return driverOne.revenue - driverTwo.revenue})
}

function driversByName(drivers){
  return drivers.slice().sort(function(driverOne,driverTwo){ return driverOne.name.localeCompare(driverTwo.name)})
}

function totalRevenue(drivers){
  return drivers.reduce(function(total, driver) { return total + driver.revenue }, 0)
}

function averageRevenue(drivers){
  return totalRevenue(drivers)/drivers.length
}
