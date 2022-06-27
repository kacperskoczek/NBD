// 3. Listę unikalnych zawodów

var mapFunction = function() {
    var key = this.job;
    emit(key, null);
};

var reduceFunction = function(key, values) {
    return;
};

printjson(db.people.mapReduce(
   mapFunction,
   reduceFunction,
   {
     out: "job"
   }
)
)

printjson(db.job.find().toArray())
