// 4. Średnie, minimalne i maksymalne BMI (waga/wzrost^2) dla osób w bazie, w podziale na narodowości

var mapFunction = function() {
    var key = this.nationality;
    var value = {bmi: 10000 * (this.weight/(this.height * this.height)),
                min:10000 * (this.weight/(this.height * this.height)),
                max: 10000 * (this.weight/(this.height * this.height)),
                count:1};
    emit( key, value );
};

var reduceFunction = function(key, values) {

   var reducedObject = values[0];

   values.forEach(function(value) {
      reducedObject.bmi += value.bmi;
      reducedObject.min = Math.min(value.min, reducedObject.min);
      reducedObject.max = Math.max(value.max, reducedObject.max);
      reducedObject.count += value.count;
   });

   return reducedObject;
};

var finalizeFunction = function(key, reducedValue) {

   if (reducedValue.count > 0)
        reducedValue.avg_bmi = reducedValue.bmi / reducedValue.count;

   delete reducedValue.count;
   delete reducedValue.bmi;

   return reducedValue;
};

printjson(db.people.mapReduce(
   mapFunction,
   reduceFunction,
   {
     out: "bmi",
     finalize: finalizeFunction
   }
)
)

printjson(db.bmi.find().toArray())
