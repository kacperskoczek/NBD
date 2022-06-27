// 1. Średnią wagę i wzrost osób w bazie z podziałem na płeć (tzn. osobno mężczyzn, osobno kobiet)

var mapFunction = function() {
    var key = this.sex;
    var value = { total_weight: this.weight, total_height: this.height, avg_weight: 0, avg_height:0, count:1};
    emit( key, value );
};

var reduceFunction = function(key, values) {

    var reducedObject = { total_height: 0, total_weight:0, avg_weight:0, avg_height:0, count:0};
 
    values.forEach(function(value) {
       reducedObject.total_height += value.total_height;
       reducedObject.total_weight += value.total_weight;
       reducedObject.count += value.count;
    });
 
    return reducedObject;
};

var finalizeFunction = function(key, reducedValue) {

    if (reducedValue.count > 0)
       reducedValue.avg_height = reducedValue.total_height / reducedValue.count;
       reducedValue.avg_weight = reducedValue.total_weight / reducedValue.count;
 
    delete reducedValue.total_weight;
    delete reducedValue.total_height;
    delete reducedValue.count;
    return reducedValue;
};
 
printjson(db.people.mapReduce(
    mapFunction,
    reduceFunction,
    {
      out: "average",
      finalize: finalizeFunction
    }
 )
)
 
 printjson(db.average.find().toArray())
 