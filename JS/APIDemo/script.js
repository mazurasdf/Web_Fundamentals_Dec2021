var artist = document.getElementById("artist");
var songTitle = document.getElementById("songTitle");
var lyrics = document.getElementById("lyrics");

async function getLyrics(){
    var response = await fetch(`https://api.lyrics.ovh/v1/${artist.value}/${songTitle.value}`);
    var data = await response.json();

    // console.log(data.lyrics);
    lyrics.innerText = data.lyrics;
}

// function getLyrics(){
//     fetch("https://api.lyrics.ovh/v1/mariah%20carey/all%20i%20want%20for%20christmas%20is%20you")
//         .then(res => res.json())
//         .then(res => {
//             console.log(res);
//         })
//         .catch(err => console.log(err))
// }