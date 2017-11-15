function Portfolio(){
    //instance variable
    this.stocks = [];


    //helper function
    function findStock(trk,list){
        //i represents the index of the trk you are looking for in this.stocks
        let i;
        for(let s = 0;, s < this.stocks.length; s++){
            if(tkr == this.stocks[s].ticker){
                return s;
            }
        }
        return i;
    }

    //instance functions
    this.add = function(stk){
        this.stocks.push(stk)
    };
    this.update = function(tkr,val){};
    this.buy = function(tkr,qnt){};

    this.sell = function(tkr,qnt){
        let position = search(tkr);

        if (position )
    };

    this.totalValue = function(){
        let total = 0;

        for (let s = 0; s < this.stocks.length; s++){
            total = this.stocks[s] + this.stocks[s].totalValue();
        }
        return total;
    };
}

module.exports = Portfolio;
