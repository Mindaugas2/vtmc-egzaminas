# vtmc-egzaminas
Galutinis Jaunesniojo programuotojo, Juliaus Zabulėno egzaminas

## Kaip paleisti šią aplikaciją
Pirmiausia reikėtų susikurti duomenų bazę MySQL aplinkoje. Ji turi būtinai sutapti su pavadinimu "egzaminas", kadangi kitaip backend'as neras atitikmens.

Kad būtų galima kurti vartotojus, taip pat būtina įvykdyti šias rolių užklausas duomenų bazėję (po to kai paleisite backend'ą nors vieną kartą):
```
INSERT INTO roles(name) VALUES('ROLE_USER');
INSERT INTO roles(name) VALUES('ROLE_MODERATOR');
INSERT INTO roles(name) VALUES('ROLE_ADMIN');
```

Viso to užteks backend'o bei frontend'o veikimui; galėsite sukurti bei prisijungti prie paprasto vartotojo naudodamiesi moderniu bei akį traukiančiu user interfeisu.

Administratoriu teks kurti labiau rankiniu būdų, t.y. su taikomosios programos Postman pagalba. Šis JSON kodo gabalas jums padės:
```
{
    "firstName": "Laurynas",
    "lastName": "Radvilavičius",
    "email": "lradvilavicius@fake.lt",
    "password": "123456",
    "role": ["admin", "user"]
}
```
---
Dėkoju už Jūsų dėmesį. Geros dienos
