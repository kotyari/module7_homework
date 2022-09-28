class Parent{
  
  constructor (name,color, brand, wattage){
    
  this.poweredBy = "electricity";
  this.name = name;
  this.color = color;
  this.brand = brand;
  this.wattage = wattage;
  this.isPlugged = false; //по умолчанию всегда не включены в розетку
  }
  
  plugIn(){
    
  if(this.isPlugged !== true){
  console.log(`${this.name} is plugged in!`);
  this.isPlugged = true;
  }
    
  else {
    console.log(`${this.name} is already plugged!`);
}
}
  
  unplug(){
    
  if(this.isPlugged !== false){
  console.log(`${this.name} is unplugged!`);
  this.isPlugged = false;
  }
  else {
    console.log(`${this.name} already unplugged!`);
  }
}
  
}

//тут я оптимизировал код, до этого отдельно для каждого прописывал this.brand и 
// this.wattage, сейчас убрал всё это в родителя.

class Lamp extends Parent{
  colorTemp;
  constructor(name, color, brand, wattage, colorTemp) {
    super(name, color, brand, wattage);
    this.colorTemp = colorTemp;
  }
}

  class Computer extends Parent {
    functionality;
    constructor(name, color, brand, wattage, functionality) {
      super(name, color, brand, wattage);
      this.functionality = functionality; //for work||for home||for gaming
    }
  }
  
  class Heater extends Parent {
    type;
    constructor(name, color, brand, wattage, type) {
      super(name, color, brand, wattage);
      this.type = type; // oil||air||infrared
    }
  }
    
  
  // экземпляр лампы
  const tableLamp = new Lamp ("Desktop Lamp", "white", "Xiaomi", 50, 3500);
  // экземпляр компьютера
  const homePC = new Computer("Personal Computer", "black", "Intel", 900, "for work");
  //экземпляр обогревателя
  const oilHeater = new Heater ("Oil Filled Radiator", "grey", "Orient", 700, "oil");
  // отключить обогреватель из розетки
  oilHeater.unplug(); //пробуем выключить - не получается, т.к. уже выключен
  oilHeater.plugIn();//включаем в розетку
  oilHeater.plugIn()//пробуем снова включить - не выходит
  // включить компьютер в розетку
  homePC.plugIn();
  //отключить лампу
  tableLamp.plugIn();
  // результат
  console.log(homePC)
  console.log(tableLamp)
  console.log(oilHeater)
