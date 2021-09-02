const input = document.querySelector('.numberinput');
const divTop = document.querySelector('#top');
const divBottom = document.querySelector('#bottom');
const keypads = document.querySelector('.keypads');
const totalNodes = keypads.childNodes;
const keys = document.querySelectorAll('.key');

function StoreValue(a, b, operator){
  this.a = a;
  this.b = b;
  this.operator = operator;
  this.add = function(){
    return this.a + this.b
  };
  this.subtract = function(){
    return this.a - this.b
  };
  this.multiply = function(){
    return this.a * this.b
  };
  this.divide = function(){
    return this.a/this.b 
  }
}

const storeValue = new StoreValue(); //StoreValue object initilized

function operate(){
  switch(storeValue.operator){
    case "+":
      return storeValue.add();
    case "-":
      return storeValue.subtract();
    case "/":
      return storeValue.divide();
    case "*":
      return storeValue.multiply();
  }
}




keys.forEach(item => {
  item.addEventListener('click', valueAssgign); 
})
