const allSongSec = document.querySelectorAll('.playlistss>section')
const inpSearch = document.querySelector('input[type=text]')
const content = document.querySelector('.content')
const featured = document.querySelector('.featured')
const topHits = document.querySelector('.topHits')
const englishHits = document.querySelector('.englishHits')
const _playMusic = document.getElementById('playMusic')
const _swiper = document.querySelectorAll('.swiper-wrapper.musicSwiper')
const showMoreF = document.querySelector('.show-more-ftur')
const showMoreBtn = document.querySelectorAll('#shMoreF')
const _audio = document.getElementById('myAudio')
const progress = document.querySelector('#progress>span')
const progressBar = document.querySelector('#progress')
const volume = document.getElementById('volumeSlider')
const volumeBox = document.querySelector('.volumeSvg')
const body = document.querySelector('body')
const songLibrary = document.getElementById('songLibrary')
const favsec = document.getElementById('favSec')
const searchLibrary = document.getElementById('searchLibrary');
const searchSec = document.getElementById('searchSec')
const aside = document.querySelectorAll('#aside>a')
const aside2 = document.querySelectorAll('#aside2>a')
const profileBox = document.querySelector('.profile-box')
let _open
let asideFlag

// reset aside 
resetAside()
function resetAside() {
    aside.forEach((val, i) => {
        val.addEventListener('click', () => {
            asideFlag = false
            body.classList.add('overflow-hidden')
            if (i != 2) {
                songLibrary.classList.add('translate-y-full')
                songLibrary.classList.remove('translate-y-[-60px]')

                _open = false
                if (!_open) {

                    setTimeout(() => {
                        body.classList.remove('overflow-hidden')
                        window.scrollTo({
                            top: myscroll,
                            behavior: 'instant'
                        })
                    }, 10)
                }

            }
            if (i != 1) {
                searchLibrary.classList.add('translate-y-full')
                searchLibrary.classList.remove('translate-y-[-60px]')

                _open = false
                if (!_open) {
                    body.classList.remove('overflow-hidden')

                    setTimeout(() => {
                        window.scrollTo({
                            top: myscroll,
                            behavior: 'instant'
                        })
                    }, 10)
                }

            }

            aside.forEach((self) => {
                self.classList.remove('text-white')
                self.classList.add('text-gray-400')

            })

            val.classList.remove('text-gray-400')
            val.classList.add('text-white')

        })
    })

    aside2.forEach((val, i) => {
        val.addEventListener('click', () => {
            asideFlag = true
            if (i != 2) {
                songLibrary.classList.add('translate-y-full')
                songLibrary.classList.remove('translate-y-0')

                _open = false
                if (!_open) {

                    setTimeout(() => {
                        window.scrollTo({
                            top: myscroll,
                            behavior: 'instant'
                        })
                    }, 10)
                }

            }
            if (i != 1) {
                searchLibrary.classList.add('translate-y-full')
                searchLibrary.classList.remove('translate-y-0')

                _open = false
                if (!_open) {

                    setTimeout(() => {
                        window.scrollTo({
                            top: myscroll,
                            behavior: 'instant'
                        })
                    }, 10)
                }

            }

            aside2.forEach((self) => {
                self.classList.remove('text-white')
                self.classList.add('text-gray-400')
            })

            val.classList.remove('text-gray-400')
            val.classList.add('text-white')

        })
    })
}


// library
function library() {
    _open = songLibrary.classList.contains('translate-y-full')

    if (_open) {
        myscroll = window.scrollY
        console.log(myscroll);
    }
    if (asideFlag) {
        songLibrary.classList.toggle('translate-y-0')
    }
    else {
        songLibrary.classList.toggle('translate-y-[-60px]')
    }

    songLibrary.classList.toggle('translate-y-full')

    if (!_open) {

        setTimeout(() => {
            body.classList.remove('overflow-hidden')
            window.scrollTo({
                top: myscroll,
                behavior: 'instant'
            })
        }, 10)
    }

    aside.forEach((val, i) => {
        if (i != 2) {
            val.classList.add('text-gray-400')
            val.classList.remove('text-white')

        }
        else {
            val.classList.remove('text-gray-400')
            val.classList.add('text-white')
        }
    })
}


// searchlibrary
function searchPage() {
    _open = searchLibrary.classList.contains('translate-y-full')

    if (_open) {
        myscroll = window.scrollY
        console.log(myscroll);
    }

    searchLibrary.classList.toggle('translate-y-0')
    searchLibrary.classList.toggle('translate-y-full')

    if (!_open) {

        setTimeout(() => {
            body.classList.remove('overflow-hidden')

            window.scrollTo({
                top: myscroll,
                behavior: 'instant'
            })
        }, 10)
    }

    aside.forEach((val, i) => {
        if (i != 1) {
            val.classList.add('text-gray-400')
            val.classList.remove('text-white')

        }
        else {
            val.classList.remove('text-gray-400')
            val.classList.add('text-white')
        }
    })
}


// volume change
volume.addEventListener('input', () => {
    let songVolume = Number(volume.value)
    _audio.volume = songVolume

    if (songVolume == 0.00) {
        volumeBox.innerHTML = `<svg class="h-4 w-4 shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5L6 9H3v6h3l8 4V5z" /</svg>`
    }
    else {
        volumeBox.innerHTML = `<svg id="volumeIcon" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5L6 9H3v6h3l5 4V5z" /> <path stroke-linecap="round" stroke-linejoin="round" d="M15.5 8.5a5 5 0 010 7M18 5.5a9 9 0 010 13" /> </svg>`
    }
})


showMoreBtn.forEach((val, i) => {
    val.addEventListener('click', () => {
        showMoreF.classList.remove('top-full')
        showMoreF.classList.add('top-6')
        body.classList.add('overflow-hidden')
        generateShowFtur(i)
    })
})

document.getElementById('closeShow').addEventListener('click', () => {
    showMoreF.classList.remove('top-6')
    showMoreF.classList.add('top-full')
    body.classList.remove('overflow-hidden')
})


// alll song array 
const allSongArr = [
    {
        id: 1,
        src: "https://c.saavncdn.com/546/Love-Me-Not-Love-Is-Blind-English-2024-20240807224721-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/546/0ca89ac68d8279fab2efc9d893ec3ff3_320.mp4',
        artistName: 'Ravyn Lenae',
        songName: 'Love Me Not',
        cat: 'featured',
        fav: 'off'
    },
    {
        id: 2,
        src: "https://c.saavncdn.com/797/You-ll-Be-Alright-Kid-Chapter-1-English-2024-20250709133247-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/797/db7cff0c1cd8324574388b18a539ec06_320.mp4',
        artistName: 'Alex Warren',
        songName: 'Ordinary',
        cat: 'featured',
        fav: 'off'
    },
    {
        id: 3,
        src: "https://c.saavncdn.com/741/hate-that-i-made-you-love-me-English-2026-20260529103543-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/741/08e06539a2706f5da2ed8813ffe68c84_320.mp4',
        artistName: 'Ariana Grande',
        songName: 'hate that i made you love me',
        cat: 'featured',
        fav: 'off'
    },
    {
        id: 4,
        src: "https://c.saavncdn.com/316/I-Just-Might-English-2026-20260109083035-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/316/4162aca21661189c8503bc9456610003_320.mp4',
        artistName: 'Bruno Mars',
        songName: 'I Just Might',
        cat: 'featured',
        fav: 'off'
    },
    {
        id: 5,
        src: "https://c.saavncdn.com/590/Dai-Dai-English-2026-20260711004059-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/590/3b2c7cc3ae5e4480bdb5a4a49f5480de_320.mp4',
        artistName: 'Shakira, Burna Boy',
        songName: 'Dai Dai',
        cat: 'featured',
        fav: 'off'
    },
    {
        id: 6,
        src: "https://c.saavncdn.com/075/Jamaican-Bam-Bam-English-2026-20260309165945-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/075/a12fd8215b3d6bdcba2860aee40c635b_320.mp4',
        artistName: 'Hugel, SOLTO (FR)',
        songName: 'Jamaican (Bam Bam)',
        cat: 'featured',
        fav: 'off'
    },
    {
        id: 7,
        src: "https://c.saavncdn.com/500/ARIRANG-Korean-2026-20260320093208-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/500/5cddd0503ea968de5d7cd2a8a3906cd8_320.mp4',
        artistName: 'BTS',
        songName: 'SWIM',
        cat: 'featured',
        fav: 'off'
    },
    {
        id: 8,
        src: "https://c.saavncdn.com/246/Dracula-Remix-English-2026-20260203071441-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/246/40b01f5c3cf78f537083efbdef046895_320.mp4',
        artistName: 'Tame Impala',
        songName: 'Dracula',
        cat: 'featured',
        fav: 'off'
    },
    {
        id: 9,
        src: "https://c.saavncdn.com/416/CHANEL-English-2025-20260728004127-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/416/d719cb5a20fa8f897206720584846ac0_320.mp4',
        artistName: 'Tyla',
        songName: 'CHANEL',
        cat: 'featured',
        fav: 'off'
    },
    {
        id: 10,
        src: "https://c.saavncdn.com/126/The-Life-of-a-Showgirl-English-2025-20251003103620-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/126/dc54e177413236cfeb9a951d88aefd64_320.mp4',
        artistName: 'Taylor Swift',
        songName: 'The Fate of Ophelia',
        cat: 'featured',
        fav: 'off'
    },
    {
        id: 11,
        src: "https://c.saavncdn.com/760/Sapphire-English-2025-20250623223610-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/760/eebd8d17c06369ba5ecccb44e41336bf_320.mp4',
        artistName: 'Ed Sheeran',
        songName: 'Sapphire',
        cat: 'featured',
        fav: 'off'
    },
    {
        id: 12,
        src: "https://c.saavncdn.com/983/Ruby-Unknown-2025-20250308015025-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/983/0c80eced6369c5531ff30d8987d7e4b4_320.mp4',
        artistName: 'Jennie',
        songName: 'like JENNIE',
        cat: 'featured',
        fav: 'off'
    },
    {
        id: 13,
        src: "https://c.saavncdn.com/138/APT-English-2024-20241204043232-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/138/25f8aa80e4d69e9d017c43b8b7e989a3_320.mp4',
        artistName: 'Rosé, Bruno Mars, Rose',
        songName: 'APT.',
        cat: 'featured',
        fav: 'off'
    },
    {
        id: 14,
        src: "https://c.saavncdn.com/060/Die-With-A-Smile-English-2024-20240816103634-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/060/05bb6ae7a01edcbd8e0d859d2fa1d83d_320.mp4',
        artistName: 'Lady Gaga, Bruno Mars',
        songName: 'Die With A Smile',
        cat: 'featured',
        fav: 'off'
    },
    {
        id: 15,
        src: "https://c.saavncdn.com/627/Hurry-Up-Tomorrow-English-2025-20260430023429-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/627/74292fed7a20d05465b90282c88af2f5_320.mp4',
        artistName: 'The Weeknd',
        songName: 'Cry For Me',
        cat: 'featured',
        fav: 'off'
    },
    {
        id: 16,
        src: "https://c.saavncdn.com/883/Big-Dawgs-English-2024-20240707053259-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/883/c0a119218206e3e43e2496dc0f2d8d7e_320.mp4',
        artistName: 'Hanumankind, Kalmi',
        songName: 'Big Dawgs',
        cat: 'featured',
        fav: 'off'
    },
    {
        id: 17,
        src: "https://c.saavncdn.com/882/UTOPIA-English-2023-20230728085013-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/882/a787117873ad2aff5ad382cb96d5801a_320.mp4',
        artistName: 'Travis Scott',
        songName: 'FE!N',
        cat: 'featured',
        fav: 'off'
    },
    {
        id: 18,
        src: "https://c.saavncdn.com/111/Espresso-English-2024-20240412064803-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/111/cf81f6eb5b6768fe2e1ddf9335124a5f_320.mp4',
        artistName: 'Sabrina Carpenter',
        songName: 'Espresso',
        cat: 'featured',
        fav: 'off'
    },
    {
        id: 19,
        src: "https://c.saavncdn.com/725/Unholy-English-2022-20220922233621-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/725/06c8cbc056806020c7483be430322166_320.mp4',
        artistName: 'Sam Smith, Kim Petras',
        songName: 'Unholy',
        cat: 'featured',
        fav: 'off'
    },
    {
        id: 20,
        src: "https://c.saavncdn.com/723/Headlights-feat-KIDDO--English-2022-20220215120150-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/723/e8ccf584a72186d63680128d001cb8a0_320.mp4',
        artistName: 'Alok, Alan Walker',
        songName: 'Headlights (feat. KIDDO)',
        cat: 'featured',
        fav: 'off'
    },
    {
        id: 21,
        src: "https://c.saavncdn.com/336/DECIDE-English-2022-20221205093021-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/336/89411dade7a62c01c544ce637c3d4079_320.mp4',
        artistName: 'Djo',
        songName: 'End of Beginning',
        cat: 'featured',
        fav: 'off'
    },
    {
        id: 22,
        src: "https://c.saavncdn.com/607/People-English-2022-20221207081653-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/607/08ab8726560fb03f1b5124f71311f500_320.mp4',
        artistName: 'Libianca',
        songName: 'People',
        cat: 'featured',
        fav: 'off'
    },
    {
        id: 23,
        src: "https://c.saavncdn.com/596/Calm-Down-English-2022-20220826054039-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/596/0044bdbc00972a8496e65a68b1444597_320.mp4',
        artistName: 'Rema, Selena Gomez',
        songName: 'Calm Down',
        cat: 'featured',
        fav: 'off'
    },
    {
        id: 24,
        src: "https://c.saavncdn.com/449/Under-The-Influence-English-2022-20220909043530-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/449/cafb4ac320f41e96344035a03ccab904_320.mp4',
        artistName: 'Chris Brown',
        songName: 'Under The Influence',
        cat: 'featured',
        fav: 'off'
    },
    {
        id: 25,
        src: "https://c.saavncdn.com/720/As-It-Was-English-2022-20220401035858-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/720/ae1594f81fac092f502317bc4e25a5b2_320.mp4',
        artistName: 'Harry Styles',
        songName: 'As It Was',
        cat: 'featured',
        fav: 'off'
    },
    {
        id: 26,
        src: "https://c.saavncdn.com/038/Bones-English-2022-20250618201126-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/038/92c34396e8534cf0d0d676cdee4143ce_320.mp4',
        artistName: 'Imagine Dragons',
        songName: 'Bones',
        cat: 'featured',
        fav: 'off'
    },
    {
        id: 27,
        src: "https://c.saavncdn.com/895/Stay-English-2021-20210706223809-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/895/9a3f48fb98e9dd0b201f6cacfb554408_320.mp4',
        artistName: 'The Kid Laroi, Justin Bieber',
        songName: 'STAY',
        cat: 'featured',
        fav: 'off'
    },
    {
        id: 28,
        src: "https://c.saavncdn.com/467/Go-Down-Deh-feat-Sean-Paul-Shaggy-English-2021-20240516225110-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/467/1bda006e1828790c4e1a9f915e9b1d6f_320.mp4',
        artistName: 'Spice',
        songName: 'Go Down Deh (feat. Sean Paul & Shaggy)',
        cat: 'featured',
        fav: 'off'
    },
    {
        id: 29,
        src: "https://c.saavncdn.com/412/WMGMENA_190296491412-English-2021-20230412001042-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/412/f0ad1528b0117f42a3b8133efbe124e7_320.mp4',
        artistName: 'Ed Sheeran',
        songName: 'Bad Habits',
        cat: 'featured',
        fav: 'off'
    },
    {
        id: 30,
        src: "https://c.saavncdn.com/983/Justice-English-2021-20210325102906-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/983/01100b84f61ca8b3a0432f12c564be8e_320.mp4',
        artistName: 'Justin Bieber',
        songName: 'Peaches',
        cat: 'featured',
        fav: 'off'
    },

    // top hits 
    {
        id: 31,
        src: "https://c.saavncdn.com/126/Shape-of-You-English-2017-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/126/da7cde34b008294e181842062530546d_320.mp4',
        artistName: 'Ed Sheeran',
        songName: 'Shape of You',
        cat: 'topHit',
        fav: 'off'
    },
    {
        id: 32,
        src: "https://c.saavncdn.com/292/Attention-English-2017-20190607043124-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/292/3688f03d025658b1103cc8b854e1b3ed_320.mp4',
        artistName: 'Charlie Puth',
        songName: 'Attention',
        cat: 'topHit',
        fav: 'off'
    },
    {
        id: 33,
        src: "https://c.saavncdn.com/391/Fifty-Shades-Of-Grey-English-2015-20191015072653-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/391/d22dd7b77dcbf8512bc524527ad7a477_320.mp4',
        artistName: 'Ellie Gouldingr',
        songName: 'Love Me Like You Do (From "Fifty Shades Of Grey")',
        cat: 'topHit',
        fav: 'off'
    },
    {
        id: 34,
        src: "https://c.saavncdn.com/722/Cheap-Thrills-English-2015-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/722/7f3218eb23ec7273f73d5317e5083d7e_320.mp4',
        artistName: 'Sia',
        songName: 'Cheap Thrills',
        cat: 'topHit',
        fav: 'off'
    },
    {
        id: 35,
        src: "https://c.saavncdn.com/850/Nine-Track-Mind-English-2016-20190607044034-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/850/628a6629691b4c030d6df52d0cbd3e5c_320.mp4',
        artistName: 'Charlie Puth',
        songName: 'We Dont Talk Anymore (feat. Selena Gomez)',
        cat: 'topHit',
        fav: 'off'
    },
    {
        id: 36,
        src: "https://c.saavncdn.com/795/AM-English-2013-20240402165515-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/795/5d6a8d924e97dc6a66c0bea9cd9adbf9_320.mp4',
        artistName: 'Arctic Monkeys',
        songName: 'I Wanna Be Yours',
        cat: 'topHit',
        fav: 'off'
    },
    {
        id: 37,
        src: "https://c.saavncdn.com/624/Se-orita-English-2019-20190822022326-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/624/08f3aeb374b4b6d641c47a0400b52db2_320.mp4',
        artistName: 'Shawn Mendes, Camila Cabello',
        songName: 'Señorita',
        cat: 'topHit',
        fav: 'off'
    },
    {
        id: 38,
        src: "https://c.saavncdn.com/942/All-The-Stars-English-2018-20180104160830-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/942/d23f9499a146ac1ac91f09f464bca6c3_320.mp4',
        artistName: 'Kendrick Lamar, SZA',
        songName: 'All The Stars',
        cat: 'topHit',
        fav: 'off'
    },
    {
        id: 39,
        src: "https://c.saavncdn.com/728/My-World-2-0-English-2010-20250315014144-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/728/44433477887896518b2d582ceaf3921d_320.mp4',
        artistName: 'Justin Bieber',
        songName: 'Baby',
        cat: 'topHit',
        fav: 'off'
    },
    {
        id: 40,
        src: "https://c.saavncdn.com/866/On-My-Way-English-2019-20190308195918-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/866/7e3a01418e755de4f0c9baee5febf6ad_320.mp4',
        artistName: 'Alan Walker, Sabrina Carpenter, Farruko',
        songName: 'On My Way',
        cat: 'topHit',
        fav: 'off'
    },
    {
        id: 41,
        src: "https://c.saavncdn.com/552/Unstoppable-English-2016-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/552/26b33054461788c6282e4ac814d3769f_320.mp4',
        artistName: 'Sia',
        songName: 'Unstoppable',
        cat: 'topHit',
        fav: 'off'
    },
    {
        id: 42,
        src: "https://c.saavncdn.com/248/Evolve-English-2018-20260605220036-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/248/46944eb7b4b31f5b0abf5eb2e1be2d2a_320.mp4',
        artistName: 'Imagine Dragons',
        songName: 'Believer',
        cat: 'topHit',
        fav: 'off'
    },
    {
        id: 43,
        src: "https://c.saavncdn.com/851/FOUR-Deluxe--English-2014-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/851/d3f6d5e7ae7c9050697a779f85eaabe8_320.mp4',
        artistName: 'One Direction',
        songName: 'Night Changes',
        cat: 'topHit',
        fav: 'off'
    },
    {
        id: 44,
        src: "https://c.saavncdn.com/358/Starboy-English-2016-20240207050743-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/358/196bfc4033a23d3c48ace92f8b13a8e8_320.mp4',
        artistName: 'The Weeknd',
        songName: 'Starboy',
        cat: 'topHit',
        fav: 'off'
    },
    {
        id: 45,
        src: "https://c.saavncdn.com/947/Stereo-Hearts-feat-Adam-Levine--English-2011-20190607045815-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/947/d301dd1e75d6bfce2e7d5ee5f70ad775_320.mp4',
        artistName: 'Gym Class Heroes',
        songName: 'Stereo Hearts (feat. Adam Levine)',
        cat: 'topHit',
        fav: 'off'
    },
    {
        id: 46,
        src: "https://c.saavncdn.com/330/Deluxe--English-2017-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/330/a2b9e2b7ab5b53b1528ecea8723cd560_320.mp4',
        artistName: 'Ed Sheeran',
        songName: 'Perfect',
        cat: 'topHit',
        fav: 'off'
    },
    {
        id: 47,
        src: "https://c.saavncdn.com/662/No-Lie-English-2016-20250315012957-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/662/b8ca9c9610b2b43922e85fbf14c2f0f7_320.mp4',
        artistName: 'Sean Paul',
        songName: 'No Lie',
        cat: 'topHit',
        fav: 'off'
    },
    {
        id: 48,
        src: "https://c.saavncdn.com/147/Closer-English-2016-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/147/88201a8381e13cd6a9399f4bbfc5b7e9_320.mp4',
        artistName: 'The Chainsmokers',
        songName: 'Closer',
        cat: 'topHit',
        fav: 'off'
    },
    {
        id: 49,
        src: "https://c.saavncdn.com/292/Safari-English-2017-20240919033905-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/292/52e74ce38764515602c41319ec0ebad3_320.mp4',
        artistName: 'Serena',
        songName: 'Safari',
        cat: 'topHit',
        fav: 'off'
    },
    {
        id: 50,
        src: "https://c.saavncdn.com/981/Faded-English-2015-20260508161540-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/981/ddf4f57d94d268001967dc60725c52ca_320.mp4',
        artistName: 'Alan Walker',
        songName: 'Faded',
        cat: 'topHit',
        fav: 'off'
    },
    {
        id: 51,
        src: "https://c.saavncdn.com/059/Sugar-Brownies-English-2019-20190326005637-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/059/eb681d882472ed0f8a5996b379f27379_320.mp4',
        artistName: 'DHARIA',
        songName: 'Sugar & Brownies',
        cat: 'topHit',
        fav: 'off'
    },
    {
        id: 52,
        src: "https://c.saavncdn.com/521/Views-English-2016-20240201113111-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/521/d027519787725d447dc66ad347722617_320.mp4',
        artistName: 'Drake',
        songName: 'One Dance',
        cat: 'topHit',
        fav: 'off'
    },
    {
        id: 53,
        src: "https://c.saavncdn.com/912/A-Thousand-Years-English-2011-20200822053427-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/912/3d068ce7502fc7d4bb839d8ed98fc9eb_320.mp4',
        artistName: 'Christina Perri',
        songName: 'a thousand years',
        cat: 'topHit',
        fav: 'off'
    },
    {
        id: 54,
        src: "https://c.saavncdn.com/632/Skyfall-Full-Length--English-2012-20191009171950-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/632/2c5537d265bb8d9e4722e26e422aa505_320.mp4',
        artistName: 'Adele',
        songName: 'Skyfall',
        cat: 'topHit',
        fav: 'off'
    },
    {
        id: 55,
        src: "https://c.saavncdn.com/738/Encore-English-2016-20190419222433-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/738/98138c56d560a4f7a890e3eb98992bfc_320.mp4',
        artistName: 'DJ Snake',
        songName: 'Let Me Love You',
        cat: 'topHit',
        fav: 'off'
    },
    {
        id: 56,
        src: "https://c.saavncdn.com/184/The-Essential-Britney-Spears-Remastered-English-2014-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/184/a5433b746abb9f015f59f30d88bb1e0a_320.mp4',
        artistName: 'Britney Spears',
        songName: 'Criminal',
        cat: 'topHit',
        fav: 'off'
    },
    {
        id: 57,
        src: "https://c.saavncdn.com/092/Waka-Waka-This-Time-For-Africa-The-Official-2010-FIFA-World-Cup-TM-Song-2010-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/092/295373a84dbb24ced52cbc5ddfed0477_320.mp4',
        artistName: 'Freshlyground, Kyla-Rose Smith, Shakira, Zolani Mahola',
        songName: 'Waka Waka (This Time For Africa) (The Official 2010 FIFA World Cup (TM) Song)',
        cat: 'topHit',
        fav: 'off'
    },
    {
        id: 58,
        src: "https://c.saavncdn.com/122/Peace-Is-The-Mission-English-2015-20230629012505-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/122/f1ef01db330ca003ade2c0bc350b54a5_320.mp4',
        artistName: 'Major Lazer, DJ Snake, MØ, Diplo',
        songName: 'Lean On',
        cat: 'topHit',
        fav: 'off'
    },
    {
        id: 59,
        src: "https://c.saavncdn.com/343/LOVE-English-2011-20260522055435-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/343/25c47bf573065766ea55386b15e23cad_320.mp4',
        artistName: 'Jennifer Lopez, Pitbull',
        songName: 'On The Floor',
        cat: 'topHit',
        fav: 'off'
    },
    {
        id: 60,
        src: "https://c.saavncdn.com/016/Girls-Like-You-English-2018-20180529030200-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/016/160a7cfbbf0eff43e3bea7d7278eb94c_320.mp4',
        artistName: 'Maroon 5',
        songName: 'Girls Like You',
        cat: 'topHit',
        fav: 'off'
    },
    {
        id: 61,
        src: "https://c.saavncdn.com/997/Eenie-Meenie-2010-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/997/77a79fbe91ff7c04ae1ae75e0826480b_320.mp4',
        artistName: 'Justin Bieber, Sean Kingston',
        songName: 'Eenie Meenie (Album Version)',
        cat: 'topHit',
        fav: 'off'
    },
    {
        id: 62,
        src: "https://c.saavncdn.com/466/Purpose-Deluxe-English-2015-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/466/203a7cf8735ac8fc6bbf4f509778e521_320.mp4',
        artistName: 'Justin Bieber',
        songName: 'Sorry',
        cat: 'topHit',
        fav: 'off'
    },
    {
        id: 63,
        src: "https://c.saavncdn.com/129/Jungle-Rules-English-2017-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/129/e81b28f924d9caf29774ac9af76cfe2c_320.mp4',
        artistName: 'French Montana',
        songName: 'Unforgettable',
        cat: 'topHit',
        fav: 'off'
    },
    {
        id: 64,
        src: "https://c.saavncdn.com/360/One-Kiss-English-2018-20180406033301-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/360/6d1bc6b25bebc7226a40e13b33becd81_320.mp4',
        artistName: 'Calvin Harris, Dua Lipa',
        songName: 'One Kiss',
        cat: 'topHit',
        fav: 'off'
    },
    {
        id: 65,
        src: "https://c.saavncdn.com/248/Evolve-English-2018-20260605220036-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/248/077a488b6fcd1e0c3be8a0d3e696bb5b_320.mp4',
        artistName: 'Imagine Dragons',
        songName: 'Thunder',
        cat: 'topHit',
        fav: 'off'
    },
    {
        id: 66,
        src: "https://c.saavncdn.com/182/Arcade-English-2019-20190306171851-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/182/69b5de038fe84a73d61df94fce2a1998_320.mp4',
        artistName: 'Duncan Laurence',
        songName: 'Arcade',
        cat: 'topHit',
        fav: 'off'
    },
    {
        id: 67,
        src: "https://c.saavncdn.com/154/All-the-Little-Lights-Deluxe-English-2019-20220615025427-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/154/f159c6e1fc580da6bf82d3abe04212ff_320.mp4',
        artistName: 'Passenger',
        songName: 'Let Her Go',
        cat: 'topHit',
        fav: 'off'
    },
    {
        id: 68,
        src: "https://c.saavncdn.com/264/7-EP-English-2019-20190621035456-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/264/d27aeeb644e2ef05f2c4712dacadf6cc_320.mp4',
        artistName: 'Lil Nas X',
        songName: 'Old Town Road',
        cat: 'topHit',
        fav: 'off'
    },
    {
        id: 69,
        src: "https://c.saavncdn.com/873/Broken-Angel-feat-Helena--English-2010-20190607050017-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/873/d45e098deef9799bfa41b26f0617e6c5_320.mp4',
        artistName: 'Arash',
        songName: 'Broken Angel (feat. Helena)',
        cat: 'topHit',
        fav: 'off'
    },
    {
        id: 70,
        src: "https://c.saavncdn.com/770/Spider-Man-Into-the-Spider-Verse-Soundtrack-From-Inspired-by-the-Motion-Picture-English-2018-20250805031539-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/770/1a3d914871be6dc47a1583c90c73672a_320.mp4',
        artistName: 'Post Malone, Swae Lee',
        songName: 'Sunflower (Spider-Man: Into the Spider-Verse)',
        cat: 'topHit',
        fav: 'off'
    },
    {
        id: 71,
        src: "https://c.saavncdn.com/848/Don-t-Let-Me-Down-English-2016-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/848/29c0372cad82dee0a7b942eb15119a8d_320.mp4',
        artistName: 'The Chainsmokers',
        songName: 'Dont Let Me Down',
        cat: 'topHit',
        fav: 'off'
    },
    {
        id: 72,
        src: "https://c.saavncdn.com/068/Ride-It-English-2013-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/068/ed9aca8a7b905dc6342cd5a13b35dcd8_320.mp4',
        artistName: 'Jay Sean',
        songName: 'Ride It',
        cat: 'topHit',
        fav: 'off'
    },
    {
        id: 73,
        src: "https://c.saavncdn.com/915/Born-To-Die-English-2012-20250805223623-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/915/7135e9887cf87cecb04303fbe041659a_320.mp4',
        artistName: 'Lana Del Rey',
        songName: 'Summertime Sadness',
        cat: 'topHit',
        fav: 'off'
    },
    {
        id: 74,
        src: "https://c.saavncdn.com/926/Hall-of-Fame-English-2012-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/926/365e0692edf4c4e9d73c7a7432ca1d84_320.mp4',
        artistName: 'The Script',
        songName: 'Hall of Fame',
        cat: 'topHit',
        fav: 'off'
    },
    {
        id: 75,
        src: "https://c.saavncdn.com/947/lovely-English-2018-20180418150240-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/947/580fe2c0cb03ba147b00a4b2261764d4_320.mp4',
        artistName: 'Billie Eilish, Khalid',
        songName: 'lovely',
        cat: 'topHit',
        fav: 'off'
    },
    {
        id: 76,
        src: "https://c.saavncdn.com/032/Gangnam-Style--English-2012-20200421073139-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/032/95959d247852c69156cf22809e85a42e_320.mp4',
        artistName: 'PSY',
        songName: 'Gangnam Style (강남스타일)',
        cat: 'topHit',
        fav: 'off'
    },
    {
        id: 77,
        src: "https://c.saavncdn.com/519/CKay-The-First-English-2019-20190910210730-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/519/65616191585b60c8c71a49f753c30acc_320.mp4',
        artistName: 'Ckay',
        songName: 'love nwantiti (ah ah ah)',
        cat: 'topHit',
        fav: 'off'
    },
    {
        id: 78,
        src: "https://c.saavncdn.com/168/Something-Just-Like-This-English-2017-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/168/d9809a7248f1674a6fb6136ca15f9bc0_320.mp4',
        artistName: 'The Chainsmokers, Coldplay',
        songName: 'Something Just Like This',
        cat: 'topHit',
        fav: 'off'
    },
    {
        id: 79,
        src: "https://c.saavncdn.com/014/Ignite-English-2018-20180615143214-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/014/5a1c76a6977a2aab6e5bfcc1adbe029f_320.mp4',
        artistName: 'Alan Walker, Julie Bergan, K-391',
        songName: 'Ignite',
        cat: 'topHit',
        fav: 'off'
    },
    {
        id: 80,
        src: "https://c.saavncdn.com/496/Lukas-Graham-English-2016-20190607043917-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/496/838209371c3cc82188c3edbba8324ed5_320.mp4',
        artistName: 'Lukas Graham',
        songName: '7 Years',
        cat: 'topHit',
        fav: 'off'
    },
    // english hits 
    {
        id: 81,
        src: "https://c.saavncdn.com/289/Harleys-In-Hawaii-English-2019-20260513081446-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/289/b221980cef882ef68be0667219958a52_320.mp4',
        artistName: 'Katy Perry',
        songName: 'Harleys In Hawaii',
        cat: 'englishHit',
        fav: 'off'
    },

    {
        id: 82,
        src: "https://c.saavncdn.com/566/Love-Me-Like-You-Do-From-Fifty-Shades-Of-Grey-English-2015-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/566/40acfcef43a8ce46a9cc83370ed3f06d_320.mp4',
        artistName: 'Ellie Goulding',
        songName: 'Love Me Like You Do (From "Fifty Shades Of Grey")',
        cat: 'englishHit',
        fav: 'off'
    },
    {
        id: 83,
        src: "https://c.saavncdn.com/147/Closer-English-2016-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/147/88201a8381e13cd6a9399f4bbfc5b7e9_320.mp4',
        artistName: 'The Chainsmokers',
        songName: 'Closer',
        cat: 'englishHit',
        fav: 'off'
    },


    {
        id: 84,
        src: "https://c.saavncdn.com/522/Yummy-English-2020-20200103035142-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/522/91418fe99e4edafa08a1a874fadf40a5_320.mp4',
        artistName: 'Justin Bieber',
        songName: 'Yummy',
        cat: 'englishHit',
        fav: 'off'
    },
    {
        id: 85,
        src: "https://c.saavncdn.com/307/Stuck-with-U-English-2020-20200508041707-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/307/d683b3b75b1b38d43288ba585ea46082_320.mp4',
        artistName: 'Ariana Grande, Justin Bieber',
        songName: 'Stuck with U',
        cat: 'englishHit',
        fav: 'off'
    },
    {
        id: 86,
        src: "https://c.saavncdn.com/294/Intentions-English-2020-20200207033302-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/294/5e81cf148715f8e6c21e46873bc1d800_320.mp4',
        artistName: 'Justin Bieber',
        songName: 'Intentions',
        cat: 'englishHit',
        fav: 'off'
    },
    {
        id: 87,
        src: "https://c.saavncdn.com/983/Justice-English-2021-20210325102906-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/983/44380309712b93debbc796eb80518592_320.mp4',
        artistName: 'Justin Bieber',
        songName: 'Ghost',
        cat: 'englishHit',
        fav: 'off'
    },
    {
        id: 88,
        src: "https://c.saavncdn.com/994/Mood-Remix--English-2020-20201106023643-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/994/9422df05186d555ce4dd1fe5bea4699b_320.mp4',
        artistName: '24kgoldn, Justin Bieber, J Balvin, Iann Dior',
        songName: 'Mood (Remix)',
        cat: 'englishHit',
        fav: 'off'
    },

    {
        id: 89,
        src: "https://c.saavncdn.com/077/After-Hours-English-2020-20260804045014-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/077/0b02a92687d1ae3369b6859f44872e52_320.mp4',
        artistName: 'The Weeknd',
        songName: 'Blinding Lights',
        cat: 'englishHit',
        fav: 'off'
    },
    {
        id: 90,
        src: "https://c.saavncdn.com/995/Save-Your-Tears-Remix-English-2021-20260611182040-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/995/9f1fcc34bf5dbdddb1f8caedde67f4fa_320.mp4',
        artistName: 'The Weeknd, Ariana Grande',
        songName: 'Save Your Tears (Remix)',
        cat: 'englishHit',
        fav: 'off'
    },
    {
        id: 91,
        src: "https://c.saavncdn.com/947/Hate-Me-English-2019-20190626032225-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/947/fec76b4a7e10769da6c86af8e9fc4873_320.mp4',
        artistName: 'Ellie Goulding, Juice WRLD',
        songName: 'Hate Me',
        cat: 'englishHit',
        fav: 'off'
    },
    {
        id: 92,
        src: "https://c.saavncdn.com/848/Don-t-Let-Me-Down-English-2016-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/848/29c0372cad82dee0a7b942eb15119a8d_320.mp4',
        artistName: 'The Chainsmokers',
        songName: 'Dont Let Me Down',
        cat: 'englishHit',
        fav: 'off'
    },
    {
        id: 93,
        src: "https://c.saavncdn.com/168/Something-Just-Like-This-English-2017-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/168/d9809a7248f1674a6fb6136ca15f9bc0_320.mp4',
        artistName: 'The Chainsmokers, Coldplay',
        songName: 'Something Just Like This',
        cat: 'englishHit',
        fav: 'off'
    },
    {
        id: 94,
        src: "https://c.saavncdn.com/141/A-Head-Full-of-Dreams-English-2015-20201104170723-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/141/579c70096de26b2fab435301383d2bfb_320.mp4',
        artistName: 'Coldplay',
        songName: 'Hymn for the Weekend',
        cat: 'englishHit',
        fav: 'off'
    },
    {
        id: 95,
        src: "https://c.saavncdn.com/189/Origins-English-2018-20260611050603-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/189/1319fb953182d441ffd69ff0b6e21f4d_320.mp4',
        artistName: 'Imagine Dragons',
        songName: 'Bad Liar',
        cat: 'englishHit',
        fav: 'off'
    },
    {
        id: 96,
        src: "https://c.saavncdn.com/851/FOUR-Deluxe--English-2014-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/851/fd703355f2225ddee4d4c483d0c82d76_320.mp4',
        artistName: 'One Direction',
        songName: 'Steal My Girl',
        cat: 'englishHit',
        fav: 'off'
    },
    {
        id: 97,
        src: "https://c.saavncdn.com/400/Dandelions-English-2017-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/400/8cc5771338db2fa8cc57545aa68777dc_320.mp4',
        artistName: 'Ruth B.',
        songName: 'Dandelions',
        cat: 'englishHit',
        fav: 'off'
    },

    {
        id: 98,
        src: "https://c.saavncdn.com/449/Kiss-R-B-Digital-Downloads-Unknown-2006-20200820041330-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/449/8c9ecd85b58f06bfa87cc3e3b485931b_320.mp4',
        artistName: 'Shakira',
        songName: "Hips Don't Lie",
        cat: 'englishHit',
        fav: 'off'
    },
    {
        id: 99,
        src: "https://c.saavncdn.com/675/evermore-English-2020-20260614135016-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/675/42a2d599614d0e94e93c43fdd7b62c3a_320.mp4',
        artistName: 'Taylor Swift',
        songName: 'willow',
        cat: 'englishHit',
        fav: 'off'
    },
    {
        id: 100,
        src: "https://c.saavncdn.com/716/Astrid-S-English-2016-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/716/7105495a4f259fd9cba897a9cee16e15_320.mp4',
        artistName: 'Astrid S',
        songName: 'Hurts So Good',
        cat: 'englishHit',
        fav: 'off'
    },
    {
        id: 101,
        src: "https://c.saavncdn.com/184/Furious-7-Original-Motion-Picture-Soundtrack-English-2015-20240228160023-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/184/2cc2d21debad1425cb55e0a5bede7bf7_320.mp4',
        artistName: 'Wiz Khalifa',
        songName: 'See You Again (feat. Charlie Puth)',
        cat: 'englishHit',
        fav: 'off'
    },

    /////k-pop
    {
        id: 102,
        src: "https://c.saavncdn.com/433/ROCK-STAR-Korean-2023-20231110103227-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/433/8eb87f7fb29232dbb7d777b2040d0f72_320.mp4',
        artistName: 'Stray Kids',
        songName: 'Stray Kids',
        cat: 'kpop',
        fav: 'off'
    },
    {
        id: 103,
        src: "https://c.saavncdn.com/341/Proof-Korean-2022-20220614202104-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/341/6724bf114ec903ac37e1224dd9a7ebd2_320.mp4',
        artistName: 'BTS',
        songName: 'Run BTS',
        cat: 'kpop',
        fav: 'off'
    },
    {
        id: 104,
        src: "https://c.saavncdn.com/128/Cupid-Twin-Ver-Slowed-Down-Version-English-2024-20251106143612-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/128/91f3262c5a805ef33868bbcc7f7c5eff_320.mp4',
        artistName: 'Fifty Fifty',
        songName: 'Cupid',
        cat: 'kpop',
        fav: 'off'
    },
    {
        id: 105,
        src: "https://c.saavncdn.com/011/Mommae-Korean-2015-20221122035836-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/011/2bd2cd8e0cb6400c7306949efa6db204_320.mp4',
        artistName: 'Jay Park',
        songName: 'Mommae',
        cat: 'kpop',
        fav: 'off'
    },
    {
        id: 106,
        src: "https://c.saavncdn.com/118/BEAUTIFUL-CHAOS-English-2025-20250723222119-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/118/0cf2087c6048d4f39a0739a45b8d2237_320.mp4',
        artistName: 'Katseye',
        songName: 'Gameboy',
        cat: 'kpop',
        fav: 'off'
    },
    {
        id: 107,
        src: "https://c.saavncdn.com/591/Love-Yourself-Answer-Korean-2021-20260415060645-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/591/1ef01b0910114db8942536e0dc86c77d_320.mp4',
        artistName: 'BTS',
        songName: 'DNA',
        cat: 'kpop',
        fav: 'off'
    },
    {
        id: 108,
        src: "https://c.saavncdn.com/109/Money-English-2025-20250612070347-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/109/03add1ce0390417a4c59f4f3a56d3f1d_320.mp4',
        artistName: 'The blackpink.',
        songName: 'Money',
        cat: 'kpop',
        fav: 'off'
    },
    {
        id: 109,
        src: "https://c.saavncdn.com/354/PSY-9th-Unknown-2022-20231031183547-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/354/399e55317c2b5bf538f1245a7bb7d8c9_320.mp4',
        artistName: 'PSY',
        songName: 'That That (prod.&feat. SUGA of BTS)',
        cat: 'kpop',
        fav: 'off'
    },
    {
        id: 110,
        src: "https://c.saavncdn.com/594/ODDINARY-Korean-2022-20220318093022-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/594/1c7022efba140c66b044ebf2b9cda943_320.mp4',
        artistName: 'Stray Kids',
        songName: 'MANIAC',
        cat: 'kpop',
        fav: 'off'
    },
    {
        id: 111,
        src: "https://c.saavncdn.com/341/Proof-Korean-2022-20220614202104-500x500.jpg",
        songSrc: 'https://aac.saavncdn.com/341/abac43a9560f52cfbcd6e8a32e68b219_320.mp4',
        artistName: 'BTS',
        songName: 'ON',
        cat: 'kpop',
        fav: 'off'
    },

]



//shuffle
let shuffleRandom
function shufRand() {
    let shufRand = Math.floor(Math.random() * allSongArr.length)
    return shufRand
}
let shuffleFlag
let shufCounter = true

function _shuffle(s) {

    if (shufCounter) {
        s.children[0].classList.add('fill-[#00d492]')
        shuffleFlag = true
        shufCounter = false
    }
    else {
        s.children[0].classList.remove('fill-[#00d492]')
        shuffleFlag = false
        shufCounter = true
    }
}


// repeat song
let repFlag
let repCounter = true
function songRepeat(s) {

    if (repCounter) {
        s.classList.remove('text-emerald-400')
        s.classList.remove('hover:text-[#f0b000a5]')
        s.classList.add('text-emerald-400')
        s.classList.add('hover:text-emerald-300')
        repFlag = true
        repCounter = false
    }
    else {
        s.classList.add('text-emerald-400')
        s.classList.add('hover:text-[#f0b000a5]')
        s.classList.remove('text-emerald-400')
        s.classList.remove('hover:text-emerald-300')
        repFlag = false
        repCounter = true
    }
}


// generate favorite part
let favCounter = 0
function generateFav(song) {
    let card = document.createElement('div')
    card.classList.add('group', 'flex', 'w-full', 'h-auto', 'cursor-pointer', 'items-center', 'gap-4', 'rounded-xl', 'p-3', 'transition', 'duration-300', 'hover:border-white/20', 'hover:bg-[#0d0d14]', 'md:w-50', 'md:flex-col', 'md:items-start', 'md:p-2', 'border-b', 'border-white/5')
    card.dataset.id = song.id
    card.dataset.src = song.songSrc
    card.innerHTML = `<div class="h-20 w-20 shrink-0 overflow-hidden rounded-xl md:h-40 md:w-full md:rounded-lg">
            <img src="${song.src}" alt="" class="h-full w-full object-cover transition duration-500 group-hover:scale-105"> </div>
                <div class=" w-full">
                    <p class="truncate text-xs font-medium tracking-[0.2em] text-[#7185a3] md:mt-2">
                        ${song.artistName}
                    </p>
                    <h3 class="truncate mt-1  text-lg font-bold text-white md:text-base">
                        ${song.songName}
                    </h3>
                </div>`

    card.addEventListener('click', () => {
        songPlayer(card)
    })

    favsec.appendChild(card)
}

function showFav() {
    favsec.classList.toggle('opacity-0')
}

// like song
function likeSong(s) {
    let likeId = Number(_audio.getAttribute('data-myid'))
    let song = allSongArr.find(val => val.id == likeId)
    if (!song) return
    if (song.fav === 'off') {
        s.innerHTML = ` <svg  class="h-7 w-7"  viewBox="0 0 24 24"  fill="#ef4444"  stroke="#ef4444" stroke-width="1.8"><path  stroke-linecap="round"  stroke-linejoin="round"  d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/></svg>`
        song.fav = 'on'
        generateFav(song)

    } else {
        s.innerHTML = `<svg  class="h-7 w-7" fill="none"  viewBox="0 0 24 24" stroke="currentColor"  stroke-width="1.8" > <path stroke-linecap="round"  stroke-linejoin="round" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/></svg>`
        song.fav = 'off'
        let card = favsec.querySelector(`[data-id="${song.id}"]`)
        if (card) {
            card.remove()
        }
    }
}


const numbers = []
let numbers1 = []
let numbers2 = []
let numbers3 = []
let numbers4 = []

myRand()
function myRand() {
    while (numbers1.length < 10) {
        let randNum = Math.floor(Math.random() * 30)

        if (!numbers1.includes(randNum)) {
            numbers1.push(randNum)
        }
    }
    numbers.push(numbers1)
    while (numbers2.length < 10) {
        let randNum2 = (Math.floor(Math.random() * 50)) + 30

        if (!numbers2.includes(randNum2)) {
            numbers2.push(randNum2)
        }
    }
    numbers.push(numbers2)

    while (numbers3.length < 10) {
        let randNum3 = (Math.floor(Math.random() * 21)) + 80

        if (!numbers3.includes(randNum3)) {
            numbers3.push(randNum3)
        }
    }
    numbers.push(numbers3)

    while (numbers4.length < 10) {
        let randNum4 = (Math.floor(Math.random() * 10)) + 101

        if (!numbers4.includes(randNum4)) {
            numbers4.push(randNum4)
        }
    }
    numbers.push(numbers4)
}


// generate all songs 
gnerateAll()
function gnerateAll() {
    allSongSec.forEach((val, i) => {
        generateSwipSong(i)
    })
}

function swiperGenerator(i, j) {
    temp = document.createElement('div')
    temp.classList.add('swiper-slide', 'text-center', 'text-[18px]', 'h-full', 'flex', 'justify-center', 'items-center', 'px-2')
    temp.dataset.id = allSongArr[numbers[j][i]].id
    temp.dataset.src = allSongArr[numbers[j][i]].songSrc
    temp.innerHTML = `<div class="group h-full cursor-pointer">
                 <div class="w-full h-[80%]  overflow-hidden rounded-xl">
                     <img src="${allSongArr[numbers[j][i]].src}" class="w-full h-full object-cover group-hover:scale-105 transition duration-300" alt="">
                     </div> 
                     <div class="mt-3 flex items-start justify-between gap-2">
                         <div class="min-w-0">
                             <p class="text-xs uppercase tracking-[4px] text-gray-400 truncate"> ${allSongArr[numbers[j][i]].artistName} </p> 
                             <h3 class="text-xl font-bold truncate text-start mt-1">${allSongArr[numbers[j][i]].songName}</h3>
                     </div> 
                 <button class="text-white text-2xl leading-none"> ⋮ </button>
                </div>
             </div>`
    return temp
}

function generateSwipSong(index) {
    for (let i = 0; i < 10; i++) {
        swiperGenerator(i, index)
        _swiper[index].appendChild(temp)
    }
}


// search
const artistArr = []
search()
function search() {
    allSongArr.map((val) => {
        const arstis = val.artistName
        artistArr.push(arstis)
    })

    inpSearch.addEventListener('input', () => {
        const searchValue = inpSearch.value.toLowerCase().trim()
        searchSec.innerHTML = ''
        if (searchValue == '') {
            return
        }
        allSongArr.forEach((song) => {
            const artist = song.artistName.toLowerCase()
            const songName = song.songName.toLowerCase()

            if (
                artist.includes(searchValue) ||
                songName.includes(searchValue)
            ) {
                generateSearch(song)
            }

        })

    })
}

function generateSearch(song) {
    let card = document.createElement('div')
    card.classList.add('group', 'flex', 'w-full', 'h-auto', 'cursor-pointer', 'items-center', 'gap-4', 'rounded-xl', 'p-3', 'transition', 'duration-300', 'hover:bg-[#0d0d14]', 'md:w-50', 'md:flex-col', 'md:items-start', 'md:p-2'
    )

    card.dataset.id = song.id
    card.dataset.src = song.songSrc

    card.innerHTML = `<div class="h-20 w-20 shrink-0 overflow-hidden rounded-xl md:h-40 md:w-full">
            <img src="${song.src}" class="h-full w-full object-cover transition duration-500 group-hover:scale-105" alt="">
        </div>

        <div class="w-full">
            <p class="truncate text-xs font-medium tracking-[0.2em] text-[#7185a3]">
                ${song.artistName}
            </p>
            <h3 class="mt-1 truncate text-lg font-bold text-white md:text-base">
                ${song.songName}
            </h3>
        </div>`

    card.addEventListener('click', () => {
        songPlayer(card)
        _playMusic.classList.remove('h-0')
        _playMusic.classList.remove('overflow-hidden')
        _playMusic.classList.add('h-17')
    })

    searchSec.appendChild(card)
}


let flag
const playBtn = document.getElementById('playButton')
playBtn.addEventListener('click', () => {

    if (flag) {
        _audio.pause()
        playBtn.innerHTML = '<svg id="playIcon" class="ml-0.5 h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7L8 5z" /></svg>'

    } else {
        _audio.play()
        playBtn.innerHTML = '<svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000000" viewBox="0 0 24 24" ><path d="M6 18h4c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1M7 8h2v8H7zm7-2c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1zm3 10h-2V8h2z"></path></svg>'
    }
    flag = !flag
})




// song player 
function songPlayer(val) {
    let tempSrc = val.getAttribute('data-src')
    let tempId = val.getAttribute('data-id')

    _audio.src = tempSrc
    _audio.dataset.myid = tempId
    _audio.play()

    flag = true
    playBtn.innerHTML = '<svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000000" viewBox="0 0 24 24" ><path d="M6 18h4c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1M7 8h2v8H7zm7-2c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1zm3 10h-2V8h2z"></path></svg>'

    allSongArr.map((val) => {
        if (val.id == tempId) {
            generatePlayerPart(val)
        }
    })
}

function generatePlayerPart(val) {
    document.getElementById('artist-name-player').innerText = val.artistName
    document.getElementById('song-name-player').innerText = val.songName
    document.getElementById('img-player').src = val.src
    _playMusic.style.backgroundImage = `url(${val.src})`
    if (val.fav == 'on') {
        document.getElementById('mylike').innerHTML = `<svg class="h-7 w-7" viewBox="0 0 24 24" fill="#ef4444" stroke="#ef4444" stroke-width="1.8">
        <path stroke-linecap="round" stroke-linejoin="round" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>`
    } else {
        document.getElementById('mylike').innerHTML = `<svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" /></svg>`
    }

}

featurePlayer()
function featurePlayer() {
    let slider = document.querySelectorAll('.swiper-wrapper>.swiper-slide')
    slider.forEach((val) => {
        val.addEventListener('click', () => {
            songPlayer(val)
            _playMusic.classList.remove('h-0')
            _playMusic.classList.remove('overflow-hidden')
            _playMusic.classList.add('h-17')
        })
    })
}


// show more featured grid 
const featurGrid = document.getElementById('featurGrid')
function generateShowFtur(index) {
    featurGrid.innerHTML = ''
    const newFeaturArr = allSongArr.filter(val => val.cat == 'featured')
    const newTophitArr = allSongArr.filter(val => val.cat == 'topHit')
    const newEnglishHitArr = allSongArr.filter(val => val.cat == 'englishHit')

    switch (index) {
        case 0:
            for (let i = 0; i < newFeaturArr.length; i++) {
                let temp2 = document.createElement('div')
                temp2.dataset.id = newFeaturArr[i].id
                temp2.dataset.src = newFeaturArr[i].songSrc
                temp2.classList.add('group', 'flex', 'cursor-pointer', 'items-center', 'gap-4', 'border-b', 'border-white/5', 'py-4', 'last:border-0', 'sm:block', 'sm:border-0', 'sm:py-0')
                temp2.innerHTML = `<div
                        class="h-20 w-20 shrink-0 overflow-hidden rounded-xl sm:aspect-square sm:h-auto sm:w-auto sm:rounded-2xl">
                        <img src="${newFeaturArr[i].src}" alt=""
                            class="h-full w-full object-cover transition duration-500 group-hover:scale-105">
                    </div>
                    <div class="min-w-0">
                        <p class="text-xs font-medium tracking-[0.3em] text-gray-400 sm:mt-5">
                            ${newFeaturArr[i].artistName}
                        </p>
                        <h3 class="mt-1 truncate text-lg font-bold text-gray-300 sm:text-2xl">
                            ${newFeaturArr[i].songName}
                        </h3>
                    </div>`
                featurGrid.appendChild(temp2)
            }
            break

        case 1:
            for (let i = 0; i < newTophitArr.length; i++) {
                let temp2 = document.createElement('div')
                temp2.dataset.id = newTophitArr[i].id
                temp2.dataset.src = newTophitArr[i].songSrc
                temp2.classList.add('group', 'flex', 'cursor-pointer', 'items-center', 'gap-4', 'border-b', 'border-white/5', 'py-4', 'last:border-0', 'sm:block', 'sm:border-0', 'sm:py-0')
                temp2.innerHTML = `<div
                        class="h-20 w-20 shrink-0 overflow-hidden rounded-xl sm:aspect-square sm:h-auto sm:w-auto sm:rounded-2xl">
                        <img src="${newTophitArr[i].src}" alt=""
                            class="h-full w-full object-cover transition duration-500 group-hover:scale-105">
                    </div>
                    <div class="min-w-0">
                        <p class="text-xs font-medium tracking-[0.3em] text-gray-400 sm:mt-5">
                            ${newTophitArr[i].artistName}
                        </p>
                        <h3 class="mt-1 truncate text-lg font-bold text-gray-300 sm:text-2xl">
                            ${newTophitArr[i].songName}
                        </h3>
                    </div>`
                featurGrid.appendChild(temp2)
            }
            break

        case 2:
            for (let i = 0; i < newEnglishHitArr.length; i++) {
                let temp2 = document.createElement('div')
                temp2.dataset.id = newEnglishHitArr[i].id
                temp2.dataset.src = newEnglishHitArr[i].songSrc
                temp2.classList.add('group', 'flex', 'cursor-pointer', 'items-center', 'gap-4', 'border-b', 'border-white/5', 'py-4', 'last:border-0', 'sm:block', 'sm:border-0', 'sm:py-0')
                temp2.innerHTML = `<div
                        class="h-20 w-20 shrink-0 overflow-hidden rounded-xl sm:aspect-square sm:h-auto sm:w-auto sm:rounded-2xl">
                        <img src="${newEnglishHitArr[i].src}" alt=""
                            class="h-full w-full object-cover transition duration-500 group-hover:scale-105">
                    </div>
                    <div class="min-w-0">
                        <p class="text-xs font-medium tracking-[0.3em] text-gray-400 sm:mt-5">
                            ${newEnglishHitArr[i].artistName}
                        </p>
                        <h3 class="mt-1 truncate text-lg font-bold text-gray-300 sm:text-2xl">
                            ${newEnglishHitArr[i].songName}
                        </h3>
                    </div>`
                featurGrid.appendChild(temp2)
            }
            break
    }
    const cloneShowMore = document.querySelectorAll('#featurGrid>div')
    showMorePlayer(cloneShowMore)
}



function showMorePlayer(clone) {
    clone.forEach((val) => {
        val.addEventListener('click', () => {
            songPlayer(val)
        })
    })
}




// play next
document.getElementById('nextMu').addEventListener('click', () => {
    nextSong()
})

let mycounter = 0
function nextSong(end) {
    let tempAudio = Number(_audio.getAttribute('data-myid'))
    mycounter++
console.log(repFlag);

    if (repFlag) {
        _audio.src = allSongArr[tempAudio - 1].songSrc
        generatePlayerPart(allSongArr[tempAudio - 1])
        _audio.play()
        return
    }

    if (shuffleFlag) {
        let randomIndex = shufRand()
        while (randomIndex == Number(_audio.dataset.myid) - 1) {
            randomIndex = shufRand()
        }

        _audio.src = allSongArr[randomIndex].songSrc
        generatePlayerPart(allSongArr[randomIndex])
        _audio.play()

        return
    }


    else {
        _audio.dataset.myid = tempAudio + 1
        let trueIndex = tempAudio - 1

        if (trueIndex == allSongArr.length - 1) {
            if (end) {
                _audio.pause()
                playBtn.innerHTML = '<svg id="playIcon" class="ml-0.5 h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7L8 5z" /></svg>'
            }
            else {
                _audio.src = allSongArr[0].songSrc
                generatePlayerPart(allSongArr[0])
                _audio.dataset.myid = 1
                _audio.play()
            }

        }
        else {
            _audio.src = allSongArr[trueIndex + 1].songSrc
            generatePlayerPart(allSongArr[trueIndex + 1])
            _audio.play()
            flag = true
            playBtn.innerHTML = '<svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000000" viewBox="0 0 24 24" ><path d="M6 18h4c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1M7 8h2v8H7zm7-2c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1zm3 10h-2V8h2z"></path></svg>'
        }
    }
}



// play prevoius
document.getElementById('preMu').addEventListener('click', () => {
    let tempAudio = Number(_audio.getAttribute('data-myid'))
    _audio.dataset.myid = tempAudio - 1
    let trueIndex = tempAudio - 1

    if (trueIndex == 0) {
        _audio.src = allSongArr[allSongArr.length - 1].songSrc
        generatePlayerPart(allSongArr[allSongArr.length - 1])
        _audio.dataset.myid = 30
        _audio.play()

    }
    _audio.src = allSongArr[trueIndex - 1].songSrc
    generatePlayerPart(allSongArr[trueIndex - 1])
    _audio.play()
    flag = true
    playBtn.innerHTML = '<svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000000" viewBox="0 0 24 24" ><path d="M6 18h4c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1M7 8h2v8H7zm7-2c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1zm3 10h-2V8h2z"></path></svg>'

})


_audio.addEventListener('loadedmetadata', () => {
    const total = _audio.duration
    window.total = total
})

let mainWidth = window.innerWidth
window.addEventListener('resize', () => {
    mainWidth = window.innerWidth
})

document.addEventListener("keydown", function (e) {
    if (e.ctrlKey && e.code == "KeyK") {
        e.preventDefault();
        searchPage();
    }

});

_audio.addEventListener('timeupdate', () => {
    let curTime = _audio.currentTime
    let x = (curTime * mainWidth) / total
    progress.style.width = x + 'px'
})

let isDragging = false
function myProgress(e) {
    const rect = progressBar.getBoundingClientRect()
    let lx = e.clientX - rect.left
    progress.style.width = lx + 'px'
    let y = (lx * total) / mainWidth
    _audio.currentTime = y
}

progressBar.addEventListener('click', (e) => {
    myProgress(e)
})


progressBar.addEventListener('mousedown', (e) => {
    isDragging = true
    _audio.pause()
    myProgress(e)

})

progressBar.addEventListener('mousemove', (e) => {
    if (!isDragging) return
    myProgress(e)

})

progressBar.addEventListener('mouseup', () => {
    isDragging = false
    _audio.play()
})

_audio.addEventListener('ended', () => {
    let ended = true
    nextSong(ended)
})

window.addEventListener('scroll', () => {
    const st = window.scrollY
    console.log(st);
    if (st > 50) {
        content.style.opacity = 1 - (st - 50) / 200;
        content.style.transform = `scale(${Math.max(0.85, 1 - (st - 50) / 1000)})`;
    }

    if (st > 2700) {
        profileBox.classList.add('scrolled')
    } else {
        profileBox.classList.remove('scrolled')
    }

    const initialTop = window.innerHeight;
    const newTop = (Math.max(0, initialTop - st)) + 100;
    featured.style.top = `${newTop}px`;
})


const swiper = new Swiper('.swiper', {
    direction: 'vertical',
    slidesPerView: 1,
    slidesPerGroup: 1,
    speed: 700,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        1024: {
            direction: 'horizontal',
            slidesPerView: 5.5,
            slidesPerGroup: 5,
        }
    }
});


const artistsSwiper = new Swiper(".artistsSwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 950,
    loop: true,
    grabCursor: true,
    navigation: {
        nextEl: ".artists-next",
        prevEl: ".artists-prev",
    },
});

