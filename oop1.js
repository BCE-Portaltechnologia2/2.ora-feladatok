// **Portáltechnológia 2.**
//
// **2. óra** - OOP 1. feladat
//
// **Feladat:**
//
// Hozzunk létre egy `Student` osztályt, a konstruktorban a név és az életkor lehessen átadni.
// Továbbá készítsük el a név `set` és `get` metódusait illetve az életkor `set` metódusát.

// Student osztály konstruktorának létrehozása
// -------------------

// a függvény két paramétert vár, egy nevet(`name`) és egy életkort (`age`)
//
// Ebben az esetben az ún. anonymus függvényt használunk (`var Student = function(){};`),
// de természetesen a named függvénnyel történő megoldás is elfogadható lenne (`function Student(){}`).
var Student = function( name, age ){
	// A `name` és az `age` értékét eltároljuk későbbi használatra
	this.name = name;
	this.age = age;
};

// `Student` prototípus `name` tulajdonságának `get` metódusa.
//
// A metódus nem vár semmilyen paramétert.
Student.prototype.getName = function(){
// Itt egyszerűen csak visszaadjuk a név értékét.
	return this.name;
};

// `Student` prototípus `name` tulajdonságának `set` metódusa.
//
// A metódus a `name` tulajdonság új értékét várja.
Student.prototype.setName = function( name ){
// A korábban elmentett `name` tulajdonság felülírása
	this.name = name;
// **FONTOS**
// A `set` metódus a `return this;` sor nélkül `undefined` értékkel tér vissza.
//
// A legtöbb programozási nyelvben ez nem is jelent problémát, azonban **JavaScript**-ben 
// kedvelt programozási technika az ún. `chaining` (a komplex példa ezt kívánja bemutatni).
	return this;
};

// `Student` prototípus `age` tulajdonságának `set` metódusa.
Student.prototype.setAge = function( age ){
// A korábban elmentett `age` tulajdonság felülírása.
	this.age = age;
	return this;
};
// Egyszerű példa
// -----------------

// A `Student` osztály példányosítása.
var student = new Student( "Robi", 17 );

// A `student` példány `name` tulajdonságának beállítása.
student.setName( "Zoli" );

// A `student` `age` tulajdonságának beállítása.
student.setAge( 18 );

// A `student` `getName` metódusának meghívása.
// A `console`-ra a "Zoli" szöveg kerül kíírásra (console megnyitása Windowson F12 gomb, OSX-en: Cmd+Alt+I).
console.log( student.getName() ); 

// Komplexebb példa (chainelés)
// -------------

// Ebben az esetben kihasználjuk, hogy a `set` metódusok 
// minden alkalommal a `this` értékkel vagyis az osztály aktuális példányával térnek vissza,
// azaz minden `set` metódus meghívása után, az osztály bármelyik metódusa újra meghívható.

var name = student.setName( "Zoli" ).setAge( 18 ).getName();
console.log( name );

// Az előző példát a jobb olvashatóság miatt a következő módon szoktuk írni:
console.log(
	student
		.setName( "Zoli" )
		.setAge( 18 )
		.getName()
);
