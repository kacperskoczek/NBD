// 5. Średnia i łączna ilość środków na kartach kredytowych kobiet narodowości polskiej w podziale na waluty

printjson(db.people.aggregate(
    {$match: {sex: "Female", nationality: "Poland" }},
    {$unwind: "$credit"},
    {$group: {
        '_id': "$credit.currency",
        'sumAll':  { $sum: "$credit.balance" },
        'avg':  { $avg: "$credit.balance" },
    }
    }
    ).toArray()
)
