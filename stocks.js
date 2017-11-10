function stockGroup(n, t, i, v, q){
  this.name = n;
  this.ticker = t;
  this.index = i;
  this.value = v;
  this.quantity = q;
 
  this.totalValue = function(){
    return this.value * this.quantity;
  };
  
  this.sellStuff = function(q){
    if (q <= this.quantity){
      this.quanitity = this.quantity - q;
      
      return this.quantity * this.value;
    }
  };
}

  
