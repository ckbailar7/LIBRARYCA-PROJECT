// The Parent class
























class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];

    }
  
    get title() {
      return this._title;
    }
  
    get isCheckedOut() {
      return this._isCheckedOut;
    }
  
    get ratings() {
      return this._ratings;
    }
  
    toggleCheckOutStatus() {
     this._isCheckedOut = !this._isCheckedOut
    }
  
    getAverageRating() {
      let ratingSum = this.ratings.reduce((accumulator, rating) => accumulator + rating); 
      return ratingSum / this.ratings.length;
    }

    addRating(value) {
        this.ratings.push(value);
    }
  
    set isCheckedOut(value) {
      this.isCheckedOut = !this.isCheckedOut;    
    }

  }

// New book class created after extending to Media Parent class
class Book extends Media {
    constructor(author, title, pages ) {
        super(title);
        this._author = author;
        this._pages = pages;
        this._nationalBookAwardStatus = false;

        
    }

    get author() {
        return this._author;
    }

    get pages() {
        return this._pages;
    }

    get nationalBookAwardStatus() {
      return this._nationalBookAwardStatus;
    }

    set nationalBookAwardStatus(value) {
      this.nationalBookAwardStatus = !this.nationalBookAwardStatus;    
    }


}


// new Movies class extending from media parent class
class Movies extends Media {
    constructor(director, title, runtime) {
        super(title)
        this._director = director;
        this._runtime = runtime;
        this._movieCast = [];
    }

    get director() {
        return this._director;
    }

    get runtime() {
        return this._runtime;
    }
    
    get movieCast() {
      return this._movieCast;
    }

    addCastMember(string) {
      this.movieCast.push(string);
    }
} 

// new CD class extending off of Media parent class

class CD extends Media {
  constructor(title, isCheckedOut, albumName,  numberOfSongs, totalRuntime, songs) {
    super(title)
    this._isCheckedOut = false;
    this._albumName = albumName;
    this._numberOfSongs = numberOfSongs;
    this._totalRuntime = totalRuntime;
    this._songs = ['song one', 'song two', 'song three', 'song four', 'song five'];
   
    
  }

  get albumName() {
    return this._albumName;
  }

  get numberOfSongs() {
    return this._numberOfSongs;
  }

  get totalRuntime() {
    return this._totalRuntime;
  }

  get isCheckedOut(){
    return this._isCheckedOut;
  }

  get songs() {
    return this._songs;
  }


  
  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut
   }


  //  Shuffle method for CDs

  shuffle() {
    return this._songs.sort((a, b) => 0.5 - Math.random());
  }

   

}




// TESTS/////////////




const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);

historyOfEverything.toggleCheckOutStatus();

// console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

historyOfEverything.getAverageRating();
// console.log(historyOfEverything.getAverageRating());

const speed = new Movies('Jan de Bont', 'Speed', 116);

speed.toggleCheckOutStatus();

// console.log('is Speed checked out .... ' + speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

// console.log('The Average Rating for speed is ... ' + speed.getAverageRating());

const windBeneathMyWings = new Book('Polly Wolly', 'Wind Beneath My Wings', 500)

// console.log(windBeneathMyWings);
        
const meetTheParents = new Movies('Robert Dinero', 'Meet The Parents', 138)

// console.log(meetTheParents);
meetTheParents.addRating(5);
meetTheParents.addRating(5);
meetTheParents.addRating(5);
meetTheParents.addRating(5);

// console.log('The average rating for Meet The Parents is ...  ' + meetTheParents.getAverageRating());





console.log('Currently No Errors Captain')

const noWomanNoCry = new CD("Living Dead", [],  "No Woman No Cry", 12, 48.5, ['love1', 'love2', 'love3', 'love4', 'love5']);

noWomanNoCry.addRating(2);
noWomanNoCry.addRating(1);
noWomanNoCry.addRating(5);

noWomanNoCry.shuffle();

// console.log('Average Rating for No Woman No Cry Is .. ' + noWomanNoCry.getAverageRating());


// console.log('current songs ... ' + noWomanNoCry.songs);

// console.log('Average Rating ... ' + noWomanNoCry.getAverageRating());

console.log('Shuffled Cd Array' + noWomanNoCry.shuffle());




