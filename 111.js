const protObj = {  //Прототип со свойством
  type: 'thing',
}


const obj = Object.create(protObj) //создаю объект с использованием прототипа

obj.color = 'Black'; 
obj.size = undefined;  //задаю свойства объекту


function idkFunc(object){   //функция итерации
  for (let key in object) { //инструкция for in
    if (object.hasOwnProperty(key))  // если объект имеет собственное свойство
      console.log(`${key}: ${object[key]}`) //в консоль пишется ключ: значение
  }
}

idkFunc(obj)  //вызов функции с аргументом - объектом obj