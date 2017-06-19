
//数组forEach方法补丁

Array.prototype.forEach = function(callback){
	var a = 0,
		len = this.length;
	while(a < len){
		callback(this[a], a++, this);
	}
};

//数组map方法补丁

Array.prototype.map = function(callback){
	var a = 0,
		len = this.length,
		result = [];
	while(a < len){
		result.push(callback(this[a], a++, this));
	}
	return result;
};

//数组filter方法补丁

Array.prototype.filter = function(callback){
	var a = -1,
		len = this.length,
		result = [];
	while(++a < len){
		callback(this[a], a, this) && result.push(this[a]);
	}
	return result;
};

//拿取css样式方法

function getStyle(obj,attr){ 
  if(obj.currentStyle){ 
    return +obj.currentStyle[attr].split("px").join(""); 
  } 
  else{ 
    return +document.defaultView.getComputedStyle(obj,null)[attr].split("px").join(""); 
  } 
}
