// 2. Łączną ilość środków pozostałych na kartach kredytowych osób w bazie, w podziale na waluty

db.people.find().forEach( function (x) {
    x.credit.forEach(function(x) {
        x.balance = parseFloat(x.balance);
    })
    db.people.save(x);
});

printjson(db.people.aggregate(
    {$unwind: "$credit" },
    {"$group": {
        '_id': "$credit.currency",
        'sumAll':  { $sum: "$credit.balance" },
    }
    }
    ).toArray()
)
