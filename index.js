// 1-MASALA
// class Avtomobil {
//   constructor(tovar, model, yil) {
//     this.tovar = tovar;
//     this.model = model;
//     this.yil = yil;
//   }

//   yangiModel() {
//     let yangiYil = this.yil + 1;

//     return new Avtomobil(this.tovar, this.model, yangiYil);
//   }
// }

// let avto = new Avtomobil("Gentira", "Chevrolet", 2022);
// console.log(avto);
// let yangiAvto = avto.yangiModel();
// console.log(yangiAvto);

// 2-MASALA
// let oquvchi = {
//   Ism: "Abdulloh",
//   yosh: 15,
//   baholar: [5, 4, 3, 4, 5, 3, 5],

//   urtachaBahosi: function () {
//     let jami = 0;
//     for (let i = 0; i < this.baholar.length; i++) {
//       jami += this.baholar[i];
//     }
//     return jami / this.baholar.length;
//   },
// };

// console.log(oquvchi.urtachaBahosi());

let Shakl = {
  Tipe: "Asosiy",
  rang: "Qizil",
};

let Doira = Object.create(Shakl);
Doira.radius = 5;

let Turtburchak = Object.create(Shakl);
Turtburchak.kenglik = 10;
Turtburchak.balandlik = 20;
console.log(Doira, Turtburchak);
