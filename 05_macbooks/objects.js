function Laptop(year,hd){
	this.year = year;
	this.hd = hd;
}

Laptop.prototype.checkSpecs = function(){
	return "Year: " +this.year+", HD: "+this.hd;

}

function Macbook(year, hd, color){
	Laptop.call(this, year, hd);
	this.color = color;
	Laptop.prototype.constructor.apply(this);
	

}



function extendWithObjectCreate(Macbook,Laptop){

}



