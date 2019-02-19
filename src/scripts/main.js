$(document).ready(function() {

    // Use jQuery to get a reference to `load-songs`
    // Use jQuery to get a reference to `song-list`
    /*
        Attach a click handler to the button with jQuery. When
        the button is clicked, use fetch to load the song data from your json-server
    */
    const loadSongs = $("#load-songs");
    const songList = $("#song-list");

    loadSongs.click(() => {
        fetch("http://localhost:8088/songs")
        .then(songs => songs.json())
        .then(parsedSongs => {
        parsedSongs.forEach (song => {
           const attempt = ` <h1 class="song__title">${song["title"]}</h1>
               <section class="song__description">
               Performed by ${song["artist"]} on the album ${song["album"]}
                 </section>
                </section>`
        Object.values(song).filter(value => {
            $("#search-bar").val() === value ? songList.append(attempt) : console.log("hi")

        })
    })
})
    })
})

//             parsedSongs.forEach (song => {
//                 // songList[0].append(song["title"])
//                 songList.append(`<section class="song">
//                 <h1 class="song__title">${song["title"]}</h1>
//                 <section class="song__description">
//                 Performed by ${song["artist"]} on the album ${song["album"]}
//                 </section>
//                 </section>`
//                 )

//             })
//         })
//     })
// })