let movie = function (title, studio, rating) {
  this.title = title;
  this.studio = studio;
  this.rating = rating;

  this.print = function () {
    return `The movie name is ${title} under the production unit of ${this.studio} with rating of ${this.rating}`;
  };
};

let film = new movie("Casino Royale", "Eon Production", "PG13");

console.log(film.print());

// ****************************************End Here***********************************************************

class movie1 {
  title;
  studio;
  rating;

  constructor(titleName, studioName, ratingMark) {
    this.title = titleName;
    this.studio = studioName;
    this.rating = ratingMark;
    if (this.rating == undefined) {
      this.rating = "PG";
    }
  }

  print1() {
    return `The movie name is ${this.title} under the production unit of ${this.studio} with rating of ${this.rating}`;
  }
}

let film1 = new movie1("Casino Royale", "Eon Production", "PG13");

console.log(film1.print1());

// ****************************************End Here***********************************************************

class person {
  firstName;
  lastName;
  Mail;
  Mobile;
  height;
  weight;
  martialStatus;
  age;
  sex;
  employmentStatus;
  education;

  constructor() {
    this.firstName = "Gowtham";
    this.lastName = "Sarjah";
    this.Mail = "gowthamsarjah@gmail.com";
    this.Mobile = 8667268514;
    this.height = 5.11;
    this.weight = 80 + "kg";
    this.martialStatus = "unmarried";
    this.age = 24;
    this.sex = "Alpha male";
    this.employmentStatus = "unemployed";
    this.education = "BTech IT";
  }
}

let personDetail = new person();

console.log(personDetail);

// ****************************************End Here***********************************************************

class uber {

 gst;
 perKM;
 total;
 grandTotal;
 ride;


constructor(totalKM){
  this.ride = totalKM;
  this.perKM = 16;
  this.total = (this.perKM*this.ride);
  this.gst = (this.total / 100)*18 ;
  this.grandTotal = this.total + this.gst ;
}


 print(){
     return `the traveled kilometer price is RS ${this.total} with GST RS ${this.gst} and grand total is RS ${this.grandTotal}`      
 }

}

let travel = new uber(10);

console.log(travel.print());

// ****************************************End Here***********************************************************


