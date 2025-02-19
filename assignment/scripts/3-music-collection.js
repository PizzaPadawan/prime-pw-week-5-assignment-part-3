console.log('***** Music Collection *****')

const collection = []

console.log("******** ADD TO COLLECTION ********")

function addToCollection(title, artist, year, tracks){
    let record = 
    {title: title,
    artist: artist,
    yearPublished: year,
    //stretch goal: add track array input
    tracks: tracks}
    
    collection.push(record)
    
    return record;
}
// end addToCollection() function

// addToCollection() test:
console.log(addToCollection("We Have The Facts and We're Voting Yes", "Death Cab For Cutie", 2000))
console.log(addToCollection("Illmatic", "Nas", 1994))
console.log(addToCollection("Ready To Die", "The Notorious B.I.G.", 1994))
console.log(addToCollection("Just Married", "Glocca Morra", 2012))
console.log(addToCollection("Plans", "Death Cab For Cutie", 2005))
console.log(addToCollection("No Good For No One Now", "Owen", 2002))

console.log(collection)

//end addToCollection() test

console.log("******** ADD TO COLLECTION - WITH TRACKS ********")
console.log(addToCollection("Where You Want To Be", 
"Taking Back Sunday", 
2004, 
[
    {name: "Set Phasers To Stun",
    duration: "3:03"},
    {name:"Bonus Mosh Pt. II",
    duration:"3:06"},
    {name:"A Decade Under The Influence",
    duration:"4:07"},
    {name:"This Photograph Is Proof (I Know You Know)",
    duration:"4:11"},
    {name:"The Union",
    duration:"2:50"},
    {name:"New American Classic",
    duration:"4:35"},
    {name:"I Am Fred Astaire",
    duration:"3:43"},
    {name:"One-Eighty By Summer",
    duration:"3:53"},
    {name:"Number Five With A Bullet",
    duration:"3:49"},
    {name:"Little Devotional",
    duration:"3:07"},
    {name:"...Slowdance On The Inside",
    duration:"4:26"},
]))

//adding track arrays

collection[0].tracks = 
[
    {name: "Title Track",
    duration: '3:29'},
    {name: "The Employment Pages",
    duration: '4:04'},
    {name: "For What Reason",
    duration: '2:52'},
    {name: "Lowell, MA",
    duration: '3:29' },
    {name: "405",
    duration: "3:37"},
    {name: "Little Fury Bugs",
    duration: "3:48"},
    {name: "Company Calls",
    duration: "3:19"},
    {name: "Company Calls Epilogue",
    duration: "5:16"},
    {name: "No Joy In Mudville",
    duration: "6:03"},
    {name: "Scientist Studies",
    duration: "5:55"},
]

collection[1].tracks = [
    {name: "The Genesis",
    duration: "1:45"},
    {name: "N.Y. State Of Mind",
    duration: "4:53"},
    {name: "Life's A Bitch",
    duration: "3:29"},
    {name: "The World is Yours",
    duration: "4:50"},
    {name: "Halftime",
    duration: "4:20"},
    {name: "Memory Lane (Sittin' In Da Park)",
    duration: "4:07"},
    {name: "One Love",
    duration: "5:24"},
    {name: "One Time 4, Your Mind",
    duration: "3:18"},
    {name: "Represent",
    duration: "4:13"},
    {name: "It Ain't Hard To Tell",
    duration: "3:22"}
]

collection[2].tracks = [
    {name:"Intro",
    duration:"3:24"},
    {name:"Things Done Changed",
    duration:"3:57"},
    {name:"Gimme The Loot",
    duration:"5:04"},
    {name:"Machine Gun Funk",
    duration:"4:16"},
    {name:"Warning",
    duration:"3:40"},
    {name:"Ready To Die",
    duration:"4:24"},
    {name:"One More Chance",
    duration:"4:43"},
    {name:"#!*@ Me (Interlude)",
    duration:"1:31"},
    {name:"The What",
    duration:"3:57"},
    {name:"Juicy",
    duration:"5:03"},
    {name:"Everyday Struggle",
    duration:"5:19"},
    {name:"Me & My Bitch",
    duration:"4:00"},
    {name:"Big Poppa",
    duration:"4:13"},
    {name:"Respect",
    duration:"5:22"},
    {name:"Friend Of Mine",
    duration:"3:28"},
    {name:"Unbelievable",
    duration:"3:43"},
    {name:"Suicidal Thoughts",
    duration:"2:54"}
]

collection[3].tracks = [
    {name:"Y'all Boots Hats? (Die Angry)",
    duration:"2:08"},
    {name:"Irrevocable, Motherfucker",
    duration:"2:21"},
    {name:"Hot & Informed",
    duration:"1:39"},
    {name:"Anniversary Song",
    duration:"2:46"},
    {name:"Why Am I Not Going Under Walter?",
    duration:"2:15"},
    {name:"My Black Dog / Cosmic Being",
    duration:"3:37"},
    {name:"Broken Cigarettes",
    duration:"3:19"},
    {name:"Theories On Relativity by David Nicholas by Glocca Morra",
    duration:"1:44"},
    {name:"Eat the Fucking Snow",
    duration:"4:49"},
    {name:"40 Hugger / Get Fucked",
    duration:"2:04"},
    {name:"Me + Geniene",
    duration:"4:23"}
]

collection[4].tracks = [
    {name:"Marching Bands of Manhattan",
    duration:"4:12"},
    {name:"Soul Meets Body",
    duration:"3:49"},
    {name:"Summer Skin",
    duration:"3:14"},
    {name:"Different Names for the Same Thing",
    duration:"5:08"},
    {name:"I Will Follow You into the Dark",
    duration:"3:09"},
    {name:"Your Heart is an Empty Room",
    duration:"3:39"},
    {name:"Someday You Will Be Loved",
    duration:"3:11"},
    {name:"Crooked Teeth",
    duration:"3:23"},
    {name:"What Sarah Said",
    duration:"6:20"},
    {name:"Brothers on a Hotel Bed",
    duration:"4:31"},
    {name:"Stable Song",
    duration:"3:40"}
]

collection[5].tracks = [
    {name:"Nobody's Nothing",
    duration:"5:20"},
    {name:"Everyone Feels Like You",
    duration:"7:01"},
    {name:"Poor Souls",
    duration:"5:30"},
    {name:"The Ghost of What Should've Been",
    duration:"5:08"},
    {name:"Good Deeds",
    duration:"3:25"},
    {name:"I'm Not Going Anywhere Tonight",
    duration:"3:50"},
    {name:"Take Care of Yourself",
    duration:"10:10"}
]

//end added tracks
console.log("******** SHOW COLLECTION ********")

function showCollection(array){
    console.log(array.length);
    for (let album of array){
        console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`)
        //tracklist stretch goal
            for (let i = 0; i < album.tracks.length; i++)
                console.log(`${i+1}. "${album.tracks[i].name}" : ${album.tracks[i].duration}`)
    }
}

// end showCollection() function

// showCollection() test:
showCollection(collection);


// findByArtist() function:
console.log("******** FIND BY ARTIST ********")

function findByArtist(artist){
    
    let artistArray = []

    for (let i=0; i < collection.length; i++){
        if (collection[i].artist === artist){
        artistArray.push(collection[i])
        }
    }
    console.log(artistArray)
    return showCollection(artistArray)
}

// findByArtist() test:
console.log("valid Death Cab For Cutie find, expect 2 arrays")
console.log(findByArtist("Death Cab For Cutie"))

console.log("invalid Machine Gun Kelly find, expect empty array")
console.log(findByArtist("Machine Gun Kelly"))

//Disclaimer: MGK was my test for "not in my collection" NOT because I want his records and don't have them.
//It's because his records would NEVER be in my collection. Thank you for coming to my TEDxTalk. 

console.log("----****---- S T R E T C H  G O A L S ----****----")


//search() function looking for results that specifically match BOTH a defined artist and year
//STRETCHIN' THE STRETCH GOAL: search() function with trackName criteria function added

console.log("******** SEARCH FUNCTION ********")

function search(object){

    let searchArray = []
    
    if ((object === undefined) || (object.trackName === undefined) && (object.artist === undefined && object.year === undefined) ) {
    return collection;
    }

    if (object.trackName !== undefined){
        for (let album of collection){
            for (let i=0; i < album.tracks.length; i++){
                if (object.trackName === album.tracks[i].name){
                    searchArray.push(album.tracks[i])}}}
        return searchArray}
    else {
        for (let i=0; i < collection.length; i++){
            if (object.artist === collection[i].artist && object.year === collection[i].yearPublished){
                searchArray.push(collection[i])
                }
            }
        showCollection(searchArray)
        return searchArray;
}
}

//testing search()
console.log("******** FIRST SEARCH TEST (NO TRACKNAME) ********")
console.log("example search (Ray Charles), expect empty array:")
console.log(search({artist:'Ray Charles', year:1957}))

console.log("valid 'Nas 1994' search, expect Nas - Illmatic array:")
console.log(search({artist:'Nas', year: 1994}))

console.log("artist only search, expect empty array:") 
console.log(search({artist: 'Taking Back Sunday'}))

console.log("artist with wrong year, expect empty array:")
console.log(search({artist: "Death Cab For Cutie", year: 2002}))

console.log("year only, expect empty array:")
console.log(search({year: 2000}))

console.log("search not defined as object, expect collection:")
console.log(search("The Notorious B.I.G."))

console.log("empty object, expect collection:")
console.log(search({}))

console.log("empty search, expect collection:")
console.log(search())

//brb, crying about how hard that was to figure out
//great, now you're making me do TRACKS. THANKS.

console.log("******** SECOND SEARCH TEST (TRACKNAME) ********")
console.log("valid search of trackName only, expect 'Nobody's Nothing' array:", search({trackName: "Nobody's Nothing"}))
console.log("valid search including artist and year, expect 'My Black Dog / Cosmic Being' array:", search({artist: "Glocca Morra", trackName: "My Black Dog / Cosmic Being", year: 2012}))
console.log("valid artist, no matching trackName, expect empty array:", search({artist: "Owen", trackName: "One of These Days"}))