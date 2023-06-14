class Media {
    constructor (title, ratings, isCheckedOut){
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
    getAverageRating(totalRatings){
        this._ratings / totalRatings
    }
    toggleCheckOutStatus(){
        this._isCheckedOut
    }
    addRating(newRate){
        this.ratings.push(newRate)
    }
};

class Book {
    constructor (name){
        super(title, ratings, isCheckedOut);
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

class Movie {
    constructor (name){
        super(title, ratings, isCheckedOut);
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

class CD {
    constructor (name){
        super(title, ratings, isCheckedOut);
        this._artist = artist;
        this._songs = songs;
    }
    get artist(){
        return this._artist;
    }
    get songs(){
        return this._songs;
    }
};

