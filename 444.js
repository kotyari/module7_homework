function ElectricThing(name,color) {
  this.name = name,
  this.poweredBy = 'electricity',
  this.color = color,
  this.isPlugged = false;
}

// метод включения в розетку
ElectricThing.prototype.plugIn = function () {
  console.log(`${this.name} is plugged in!`);
  this.isPlugged = true;
}

//методы выключения из розетки
ElectricThing.prototype.unplug = function () {
  console.log(`${this.name} is unplugged!`);
  this.isPlugged = false;
}

// Прибор 1
function Lamp(name, brand, wattage, color, colorTemp) {
  this.name = name;
  this.brand = brand;
  this.wattage = wattage;
  this.color = color;
  this.colorTemp = colorTemp; // 1000-10.000 (K)
  this.isPlugged = true;
}
Lamp.prototype = new ElectricThing();

// Прибор 2
function Computer(name, brand, wattage, color, functionality) {
  this.name = name;
  this.brand = brand;
  this.wattage = wattage;
  this.color =color;
  this.functionality = functionality;//for work||for home||for gaming
  this.isPlugged = false; //не понимаю, надо ли тут и в Lamp, Heater прописывать this.isPlugged? , оно же 
//вроде должно наследоваться от ElectricThing и по умолчанию стоять false ? Если можно, ответьте мне на этот вопрос)

}

Computer.prototype = new ElectricThing();

//Прибор 3

function Heater(name, brand, wattage, color, type) {
  this.name = name;
  this.brand = brand;
  this.wattage = wattage;
  this.color = color;
  this.type = type; // oil||air||infrared
}

Heater.prototype = new ElectricThing();

// экземпляр лампы
const tableLamp = new Lamp("Desktop Lamp", "Xiaomi", 50, "white",3500);
// экземпляр компьютера
const homePC = new Computer("Personal Computer", "Intel", 900, "black", "for work");
//экземпляр обогревателя
const oilHeater = new Heater ("Oil Filled Radiator", "Orient", 700, "grey", "oil")
// отключить обогреватель из розетки
oilHeater.unplug();
// включить компьютер в розетку
homePC.plugIn();
//отключить лампу
tableLamp.unplug()
// результат
console.log(homePC)
console.log(tableLamp)
console.log(oilHeater)




