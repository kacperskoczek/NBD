// 4. Średnie, minimalne i maksymalne BMI (waga/wzrost^2) dla osób w bazie, w podziale na narodowości

printjson(db.people.aggregate(
    {"$group": {
        '_id': "$nationality",
        'minBMI':  { $min: {$multiply: [10000, {$divide: ["$weight", {$multiply:["$height", '$height']} ] }]}},
        'maxBMI':  { $max: {$multiply: [10000, {$divide: ["$weight", {$multiply:["$height", '$height']} ] }]}},
        'avBMI':  { $avg:  {$multiply: [10000, {$divide: ["$weight", {$multiply:["$height", '$height']} ] }]}}
    }
    }
    ).toArray()
)