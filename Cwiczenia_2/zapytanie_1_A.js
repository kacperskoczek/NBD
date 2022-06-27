// 1. Średnią wagę i wzrost osób w bazie z podziałem na płeć (tzn. osobno mężczyzn, osobno kobiet)

db.people.find().forEach( function (x) {
    x.height = parseFloat(x.height);
    x.weight = parseFloat(x.weight);
    db.people.save(x);
});

printjson(db.people.aggregate(
    {"$group": {
        '_id': "$sex",
        'averageHeight':  { $avg: "$height" },
        'averageWeight':  { $avg: "$weight" }
    }
    }
    ).toArray()
)
