// 6. Dodaj siebie do bazy, zgodnie z formatem danych użytych dla innych osób (dane dotyczące karty kredytowej, adresu zamieszkania i wagi mogą być fikcyjne)
db.people.insert({
    sex: 'Male',
    first_name: 'Kacper',
    last_name: 'Skoczek',
    job: 'Student',
    email: 'kskoczek@gmail.com',
    location: {
      city: 'Warsaw',
      address: { streetname: 'Aleja Jana Pawla', streetnumber: '123' }
    },
    description: "aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna",
    height: 178,
    weight: 60,
    birth_date: '1997-12-02T21:37:11Z',
    nationality: 'Poland',
    credit: [
      {
        type: 'visa',
        number: '1234123412341234',
        currency: 'PLN',
        balance: '2'
      }
    ]
  });
  