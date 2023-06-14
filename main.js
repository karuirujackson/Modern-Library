class Media {
    constructor (title){
        this._title = title;
        this._ratings = [];
        this._isCheckedOut = false;
    }
    get title (){
        return this._title;
    }
    get ratings(){
        return this._ratings;
    }
    get isCheckedOut(){
        return this._isCheckedOut;
    }
    set isCheckedOut(newBoolean){
        return this._isCheckedOut = newBoolean;
    }
    toggleCheckOutStatus(){
        return this._isCheckedOut = !this._isCheckedOut
    }
    getAverageRating(){
        let sumOfRatings = this._ratings.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
    0,
        ); 
        let averageRating = sumOfRatings / this.ratings.length;
        return averageRating;
    }
    addRating(newRate){
        this.ratings.push(newRate)
    }
};

class Book extends Media {
    constructor (author, title, pages){
        super(title);
        this._author = author;
        this._pages = pages;
    }   
    get author(){
        return this._author;
    }
    get pages(){
        return this._pages;
    }   
};

class Movie extends Media {
    constructor (director, title, runtime){
        super(title);
        this._director = director;
        this._runTime = runtime;
    }
    get director(){
        return this._director;
    }
    get runtime(){
        return this._runTime;
    }   
};

class CD extends Media {
    constructor (artist, title){
        super(title);
        this._artist = artist;
        this._songs = [];
    }
    get artist(){
        return this._artist;
    }
    get songs(){
        return this._songs;
    }
};

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
console.log(historyOfEverything);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating().toFixed(1));

const speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating().toFixed(1));

/*let array1 = [15, 30, 45, 60, 75]
let arraySum = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    10,
  );
arrayAverage = arraySum / array1.length;  
console.log(arraySum);
console.log(arrayAverage);*/

