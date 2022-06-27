// 5. Średnia i łączna ilość środków na kartach kredytowych kobiet narodowości polskiej w podziale na waluty

var mapFunction = function() {
    for (var idx = 0; idx < this.credit.length; idx++) {
       var key = this.credit[idx].currency;
       var value = this.credit[idx].balance;
       emit(key, value);
    };
};

var reduceFunction = function(key, values) {
    return {
       'balance': Array.sum(values),
       'avg': Array.avg(values)
    }
};


printjson(db.people.mapReduce(
   mapFunction,
   reduceFunction,
   {
     out: "sumPoland",
     query: {sex: "Female", nationality: "Poland"}
   }
)
)

printjson(db.sumPoland.find().toArray())
