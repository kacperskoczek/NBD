// 3. Lista mężczyzn narodowości niemieckiej
printjson(db.people.find({'nationality': 'Germany'}).toArray())
