// Christine Foisy
// SDI, Week 3 Assignment
// Build a Deck

var deck1
deck1 = "12x12 moderate deck"

var deck2
deck2 = "18x12 large deck"

//object and json data (only have properties) and method/function

var deck1 = {
	"name" : "backyard deck option 1",
	"width" : 12, 
	"length" : 12,
	"area" : function(){
		totalArea = this.width * this.length;
		console.log("Total area of deck option 1 " + totalArea);
	}
};

deck1.area();


//return within a function

var deck2 = {
	"name" : "backyard deck option 2",
	"width" : 18, 
	"length" : 12,
	"getArea" : function(){
		newArea = this.width * this.length;
		return newArea;
	}

};

console.log("Total is the return of the area of deck option 2 " + deck2.getArea());
	
//Conditional
var doesItCostLessThen1200 = true;
	
if (doesItCostLessThen1200 === true) {
 	console.log("We can build the bigger deck!)";
else (doesItCostLessThen1200 === false)
	console.log("we will have to build the smaller deck.)";
};


//Method Accessor, Array, 

var contractorName=new Array();
contractorName[0]="Joe";
contractorName[1]="Dave";
contractorName[2]="Bill";

get contractorName(2)
{
return contractorName
}

console.log(contractorName[2];

//FOR LOOP
for (var contractorQuote = 1400; contractorQuote < 1400; contractorQuote--) {};
	console.log(contractorQuote + "is above our budget".);

};
	
console.log ("below our budger. Let's hire them.);





//RETURN VALUES

var didcontractorcallontime = function(ontime) {
	var currentHour = (new Date()).gethour(),
		timeofday
	if (currenthour <12) {timeOfDay = "Contractor called on time!";}
	else if (currentHour <17) {timeOfDay="Contractor is running late." ; }
	else {timeOfDay = "Contrator is very late, should not hire him"; }
	console.log(timeofday + name);
};


//METHOD MUTATOR, WHILE LOOP, MATH, OUTPUT

function contractorName(name) {
	var contractorName = name;
	
	this.getname = function() {
		return name;
	};
	
	this.setName= function(name {
	name = name;
	};
}

var startDate = 1;
while (sartDate < 7) {};
	console.log("Day" + startDate + ", contractor did not start deck today".);
	startDate++;
};
	
console.log ("Time to fire the contractor");




















