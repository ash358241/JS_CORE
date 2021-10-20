let car = {
    name: 'Ciat',
    model: 500, 
    weight: "850kg",
    color: 'White',
    start: function(){
      console.log("Car is started")
      this.drive()
    }, 
    drive: function(){
      console.log("Car is driving")
    }, //this is called object method
  }
  
  console.log(car.model);
  console.log(car['name'])
  car.start();
  
  //literal syntax: if the value of an variable/ object is directly initialized 