const movies = [
    {
        "adult": false,
        "backdrop_path": "/yOm993lsJyPmBodlYjgpPwBjXP9.jpg",
        "genre_ids": [
            35,
            10751,
            14
        ],
        "id": 787699,
        "original_language": "en",
        "original_title": "Wonka",
        "overview": "Willy Wonka – chock-full of ideas and determined to change the world one delectable bite at a time – is proof that the best things in life begin with a dream, and if you’re lucky enough to meet Willy Wonka, anything is possible.",
        "popularity": 2301.226,
        "poster_path": "/qhb1qOilapbapxWQn9jtRCMwXJF.jpg",
        "release_date": "2023-12-06",
        "title": "Wonka",
        "video": false,
        "vote_average": 7.203,
        "vote_count": 1309
    },
    {
        "adult": false,
        "backdrop_path": "/jXJxMcVoEuXzym3vFnjqDW4ifo6.jpg",
        "genre_ids": [
            28,
            12,
            14
        ],
        "id": 572802,
        "original_language": "en",
        "original_title": "Aquaman and the Lost Kingdom",
        "overview": "Black Manta, still driven by the need to avenge his father's death and wielding the power of the mythic Black Trident, will stop at nothing to take Aquaman down once and for all. To defeat him, Aquaman must turn to his imprisoned brother Orm, the former King of Atlantis, to forge an unlikely alliance in order to save the world from irreversible destruction.",
        "popularity": 1529.779,
        "poster_path": "/7lTnXOy0iNtBAdRP3TZvaKJ77F6.jpg",
        "release_date": "2023-12-20",
        "title": "Aquaman and the Lost Kingdom",
        "video": false,
        "vote_average": 6.707,
        "vote_count": 652
    },
    {
        "adult": false,
        "backdrop_path": "/rz8GGX5Id2hCW1KzAIY4xwbQw1w.jpg",
        "genre_ids": [
            35,
            80
        ],
        "id": 955916,
        "original_language": "en",
        "original_title": "Lift",
        "overview": "An international heist crew, led by Cyrus Whitaker, race to lift $500 million in gold from a passenger plane at 40,000 feet.",
        "popularity": 1351.393,
        "poster_path": "/gma8o1jWa6m0K1iJ9TzHIiFyTtI.jpg",
        "release_date": "2024-01-10",
        "title": "Lift",
        "video": false,
        "vote_average": 6.427,
        "vote_count": 468
    },
    {
        "adult": false,
        "backdrop_path": "/vdpE5pjJVql5aD6pnzRqlFmgxXf.jpg",
        "genre_ids": [
            18,
            36
        ],
        "id": 906126,
        "original_language": "es",
        "original_title": "La sociedad de la nieve",
        "overview": "On October 13, 1972, Uruguayan Air Force Flight 571, chartered to take a rugby team to Chile, crashes into a glacier in the heart of the Andes.",
        "popularity": 1115.761,
        "poster_path": "/2e853FDVSIso600RqAMunPxiZjq.jpg",
        "release_date": "2023-12-13",
        "title": "Society of the Snow",
        "video": false,
        "vote_average": 8.06,
        "vote_count": 1239
    },
    {
        "adult": false,
        "backdrop_path": "/yl2GfeCaPoxChcGyM5p7vYp1CKS.jpg",
        "genre_ids": [
            28,
            35,
            10749
        ],
        "id": 848187,
        "original_language": "en",
        "original_title": "Role Play",
        "overview": "Emma has a wonderful husband and two kids in the suburbs of New Jersey – she also has a secret life as an assassin for hire – a secret that her husband David discovers when the couple decide to spice up their marriage with a little role play.",
        "popularity": 809.428,
        "poster_path": "/7MhXiTmTl16LwXNPbWCmqxj7UxH.jpg",
        "release_date": "2023-12-14",
        "title": "Role Play",
        "video": false,
        "vote_average": 5.798,
        "vote_count": 181
    },
    {
        "adult": false,
        "backdrop_path": "/a0GM57AnJtNi7lMOCamniiyV10W.jpg",
        "genre_ids": [
            16,
            12,
            14
        ],
        "id": 508883,
        "original_language": "ja",
        "original_title": "君たちはどう生きるか",
        "overview": "While the Second World War rages, the teenage Mahito, haunted by his mother's tragic death, is relocated from Tokyo to the serene rural home of his new stepmother Natsuko, a woman who bears a striking resemblance to the boy's mother. As he tries to adjust, this strange new world grows even stranger following the appearance of a persistent gray heron, who perplexes and bedevils Mahito, dubbing him the \"long-awaited one.\"",
        "popularity": 694.544,
        "poster_path": "/jDQPkgzerGophKRRn7MKm071vCU.jpg",
        "release_date": "2023-07-14",
        "title": "The Boy and the Heron",
        "video": false,
        "vote_average": 7.466,
        "vote_count": 792
    },
    {
        "adult": false,
        "backdrop_path": "/ay0PJQZizDXk0pzhoGX4v7K9h7A.jpg",
        "genre_ids": [
            28,
            53
        ],
        "id": 1214314,
        "original_language": "en",
        "original_title": "One More Shot",
        "overview": "Following the attack on the black site in Poland, Navy SEAL Jake Harris is ordered to escort terrorist suspect Amin Mansur to Washington D.C. for interrogation. Before the prisoner transfer process is complete, though, the airport is attacked by a group of heavily armed, well-trained mercenaries.",
        "popularity": 536.253,
        "poster_path": "/nQ1BQg4yMdlYSHvHZgwladzy7EF.jpg",
        "release_date": "2024-01-12",
        "title": "One More Shot",
        "video": false,
        "vote_average": 6.765,
        "vote_count": 68
    },
    {
        "adult": false,
        "backdrop_path": "/2KGxQFV9Wp1MshPBf8BuqWUgVAz.jpg",
        "genre_ids": [
            16,
            12,
            35,
            10751,
            28
        ],
        "id": 940551,
        "original_language": "en",
        "original_title": "Migration",
        "overview": "After a migrating duck family alights on their pond with thrilling tales of far-flung places, the Mallard family embarks on a family road trip, from New England, to New York City, to tropical Jamaica.",
        "popularity": 603.494,
        "poster_path": "/ldfCF9RhR40mppkzmftxapaHeTo.jpg",
        "release_date": "2023-12-06",
        "title": "Migration",
        "video": false,
        "vote_average": 7.553,
        "vote_count": 142
    },
    {
        "adult": false,
        "backdrop_path": "/rVJfabCz1ViynQCEz54MRqdZig1.jpg",
        "genre_ids": [
            16,
            878,
            28
        ],
        "id": 1155089,
        "original_language": "en",
        "original_title": "Justice League: Crisis on Infinite Earths Part One",
        "overview": "Death is coming. Worse than death: oblivion. Not just for our Earth, but for everyone, everywhere, in every universe! Against this ultimate destruction, the mysterious Monitor has gathered the greatest team of Super Heroes ever assembled. But what can the combined might of Superman, Wonder Woman, Batman, The Flash, Green Lantern and hundreds of Super Heroes from multiple Earths even do to save all of reality from an unstoppable antimatter armageddon?!",
        "popularity": 451.574,
        "poster_path": "/zR6C66EDklgTPLHRSmmMt5878MR.jpg",
        "release_date": "2024-01-09",
        "title": "Justice League: Crisis on Infinite Earths Part One",
        "video": false,
        "vote_average": 7.843,
        "vote_count": 121
    },
    {
        "adult": false,
        "backdrop_path": "/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
        "genre_ids": [
            18,
            36
        ],
        "id": 872585,
        "original_language": "en",
        "original_title": "Oppenheimer",
        "overview": "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
        "popularity": 594.106,
        "poster_path": "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
        "release_date": "2023-07-19",
        "title": "Oppenheimer",
        "video": false,
        "vote_average": 8.1,
        "vote_count": 6291
    },
    {
        "adult": false,
        "backdrop_path": "/ejTG17sqAEEyIqZVpYhyw0PGUdT.jpg",
        "genre_ids": [
            878,
            10749,
            35
        ],
        "id": 792307,
        "original_language": "en",
        "original_title": "Poor Things",
        "overview": "Brought back to life by an unorthodox scientist, a young woman runs off with a debauched lawyer on a whirlwind adventure across the continents. Free from the prejudices of her times, she grows steadfast in her purpose to stand for equality and liberation.",
        "popularity": 491.877,
        "poster_path": "/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg",
        "release_date": "2023-11-21",
        "title": "Poor Things",
        "video": false,
        "vote_average": 8,
        "vote_count": 237
    },
    {
        "adult": false,
        "backdrop_path": "/47SVqaO02doJ06tOmrjiWDkwU3T.jpg",
        "genre_ids": [
            28,
            53
        ],
        "id": 927107,
        "original_language": "en",
        "original_title": "The Bricklayer",
        "overview": "Someone is blackmailing the CIA by assassinating foreign journalists and making it look like the agency is responsible. As the world begins to unite against the U.S., the CIA must lure its most brilliant – and rebellious – operative out of retirement, forcing him to confront his checkered past while unraveling an international conspiracy.",
        "popularity": 476.822,
        "poster_path": "/pwOQ9lqLX1OgsJRSybS662wMcu8.jpg",
        "release_date": "2023-12-14",
        "title": "The Bricklayer",
        "video": false,
        "vote_average": 6.4,
        "vote_count": 61
    },
    {
        "adult": false,
        "backdrop_path": "/4MCKNAc6AbWjEsM2h9Xc29owo4z.jpg",
        "genre_ids": [
            28,
            53
        ],
        "id": 866398,
        "original_language": "en",
        "original_title": "The Beekeeper",
        "overview": "One man’s campaign for vengeance takes on national stakes after he is revealed to be a former operative of a powerful and clandestine organization known as Beekeepers.",
        "popularity": 466.017,
        "poster_path": "/3DjlG6E3yglj6Zj7izALDAJXQLM.jpg",
        "release_date": "2024-01-10",
        "title": "The Beekeeper",
        "video": false,
        "vote_average": 7.5,
        "vote_count": 169
    },
    {
        "adult": false,
        "backdrop_path": "/e0M3WVJm4nBrAg0LbJq0gdKi3U7.jpg",
        "genre_ids": [
            18,
            878,
            28
        ],
        "id": 695721,
        "original_language": "en",
        "original_title": "The Hunger Games: The Ballad of Songbirds & Snakes",
        "overview": "64 years before he becomes the tyrannical president of Panem, Coriolanus Snow sees a chance for a change in fortunes when he mentors Lucy Gray Baird, the female tribute from District 12.",
        "popularity": 452.675,
        "poster_path": "/mBaXZ95R2OxueZhvQbcEWy2DqyO.jpg",
        "release_date": "2023-11-15",
        "title": "The Hunger Games: The Ballad of Songbirds & Snakes",
        "video": false,
        "vote_average": 7.228,
        "vote_count": 1560
    },
    {
        "adult": false,
        "backdrop_path": "/kWyQh9fCrgcMfhqZmqtp89Q0TrT.jpg",
        "genre_ids": [
            35,
            10749
        ],
        "id": 1072790,
        "original_language": "en",
        "original_title": "Anyone But You",
        "overview": "After an amazing first date, Bea and Ben’s fiery attraction turns ice cold — until they find themselves unexpectedly reunited at a destination wedding in Australia. So they do what any two mature adults would do: pretend to be a couple.",
        "popularity": 421.646,
        "poster_path": "/yRt7MGBElkLQOYRvLTT1b3B1rcp.jpg",
        "release_date": "2023-12-21",
        "title": "Anyone But You",
        "video": false,
        "vote_average": 7.191,
        "vote_count": 94
    },
    {
        "adult": false,
        "backdrop_path": "/ehumsuIBbgAe1hg343oszCLrAfI.jpg",
        "genre_ids": [
            16,
            10751,
            14,
            12
        ],
        "id": 1022796,
        "original_language": "en",
        "original_title": "Wish",
        "overview": "Asha, a sharp-witted idealist, makes a wish so powerful that it is answered by a cosmic force – a little ball of boundless energy called Star. Together, Asha and Star confront a most formidable foe - the ruler of Rosas, King Magnifico - to save her community and prove that when the will of one courageous human connects with the magic of the stars, wondrous things can happen.",
        "popularity": 428.742,
        "poster_path": "/AcoVfiv1rrWOmAdpnAMnM56ki19.jpg",
        "release_date": "2023-11-13",
        "title": "Wish",
        "video": false,
        "vote_average": 6.4,
        "vote_count": 313
    },
    {
        "adult": false,
        "backdrop_path": "/vAsxVpXP53cMSsD9u4EekQKz4ur.jpg",
        "genre_ids": [
            18,
            53
        ],
        "id": 1050035,
        "original_language": "ja",
        "original_title": "怪物",
        "overview": "When her young son Minato starts to behave strangely, his mother feels that there is something wrong. Discovering that a teacher is responsible, she storms into the school demanding to know what's going on. But as the story unfolds through the eyes of mother, teacher, and child, the truth gradually emerges.",
        "popularity": 306.341,
        "poster_path": "/oAJEA8fZzzJQMWLPM7BML1U46Ft.jpg",
        "release_date": "2023-06-02",
        "title": "Monster",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 162
    },
    {
        "adult": false,
        "backdrop_path": "/bWIIWhnaoWx3FTVXv6GkYDv3djL.jpg",
        "genre_ids": [
            878,
            27,
            28
        ],
        "id": 940721,
        "original_language": "ja",
        "original_title": "ゴジラ-1.0",
        "overview": "In postwar Japan, a new terror rises. Will the devastated people be able to survive... let alone fight back?",
        "popularity": 334.39,
        "poster_path": "/hkxxMIGaiCTmrEArK7J56JTKUlB.jpg",
        "release_date": "2023-11-03",
        "title": "Godzilla Minus One",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 335
    },
    {
        "adult": false,
        "backdrop_path": "/riuTxOEKQ9lfvSan2vwaOPipwtr.jpg",
        "genre_ids": [
            35,
            18
        ],
        "id": 621587,
        "original_language": "en",
        "original_title": "Next Goal Wins",
        "overview": "Dutch coach Thomas Rongen attempts the nearly impossible task of turning the American Samoa soccer team from perennial losers into winners.",
        "popularity": 352.641,
        "poster_path": "/xTQCL1zGugIck8MgvJ2lXSrxENR.jpg",
        "release_date": "2023-11-16",
        "title": "Next Goal Wins",
        "video": false,
        "vote_average": 6.5,
        "vote_count": 124
    },
    {
        "adult": false,
        "backdrop_path": "/k1KrbaCMACQiq7EA0Yhw3bdzMv7.jpg",
        "genre_ids": [
            16,
            10751,
            10402,
            14,
            35
        ],
        "id": 901362,
        "original_language": "en",
        "original_title": "Trolls Band Together",
        "overview": "When Branch's brother, Floyd, is kidnapped for his musical talents by a pair of nefarious pop-star villains, Branch and Poppy embark on a harrowing and emotional journey to reunite the other brothers and rescue Floyd from a fate even worse than pop-culture obscurity.",
        "popularity": 333.38,
        "poster_path": "/bkpPTZUdq31UGDovmszsg2CchiI.jpg",
        "release_date": "2023-10-12",
        "title": "Trolls Band Together",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 571
    }
]
const moviesWithoutLanguageFilter = [
    {
        "adult": false,
        "backdrop_path": "/yOm993lsJyPmBodlYjgpPwBjXP9.jpg",
        "genre_ids": [
            35,
            10751,
            14
        ],
        "id": 787699,
        "original_language": "en",
        "original_title": "Wonka",
        "overview": "Willy Wonka – chock-full of ideas and determined to change the world one delectable bite at a time – is proof that the best things in life begin with a dream, and if you’re lucky enough to meet Willy Wonka, anything is possible.",
        "popularity": 2301.226,
        "poster_path": "/qhb1qOilapbapxWQn9jtRCMwXJF.jpg",
        "release_date": "2023-12-06",
        "title": "Wonka",
        "video": false,
        "vote_average": 7.203,
        "vote_count": 1309
    },
    {
        "adult": false,
        "backdrop_path": "/jXJxMcVoEuXzym3vFnjqDW4ifo6.jpg",
        "genre_ids": [
            28,
            12,
            14
        ],
        "id": 572802,
        "original_language": "en",
        "original_title": "Aquaman and the Lost Kingdom",
        "overview": "Black Manta, still driven by the need to avenge his father's death and wielding the power of the mythic Black Trident, will stop at nothing to take Aquaman down once and for all. To defeat him, Aquaman must turn to his imprisoned brother Orm, the former King of Atlantis, to forge an unlikely alliance in order to save the world from irreversible destruction.",
        "popularity": 1529.779,
        "poster_path": "/7lTnXOy0iNtBAdRP3TZvaKJ77F6.jpg",
        "release_date": "2023-12-20",
        "title": "Aquaman and the Lost Kingdom",
        "video": false,
        "vote_average": 6.707,
        "vote_count": 652
    },
    {
        "adult": false,
        "backdrop_path": "/rz8GGX5Id2hCW1KzAIY4xwbQw1w.jpg",
        "genre_ids": [
            35,
            80
        ],
        "id": 955916,
        "original_language": "en",
        "original_title": "Lift",
        "overview": "An international heist crew, led by Cyrus Whitaker, race to lift $500 million in gold from a passenger plane at 40,000 feet.",
        "popularity": 1351.393,
        "poster_path": "/gma8o1jWa6m0K1iJ9TzHIiFyTtI.jpg",
        "release_date": "2024-01-10",
        "title": "Lift",
        "video": false,
        "vote_average": 6.427,
        "vote_count": 468
    },
    {
        "adult": false,
        "backdrop_path": "/vdpE5pjJVql5aD6pnzRqlFmgxXf.jpg",
        "genre_ids": [
            18,
            36
        ],
        "id": 906126,
        "original_language": "es",
        "original_title": "La sociedad de la nieve",
        "overview": "On October 13, 1972, Uruguayan Air Force Flight 571, chartered to take a rugby team to Chile, crashes into a glacier in the heart of the Andes.",
        "popularity": 1115.761,
        "poster_path": "/2e853FDVSIso600RqAMunPxiZjq.jpg",
        "release_date": "2023-12-13",
        "title": "Society of the Snow",
        "video": false,
        "vote_average": 8.06,
        "vote_count": 1239
    },
    {
        "adult": false,
        "backdrop_path": "/yl2GfeCaPoxChcGyM5p7vYp1CKS.jpg",
        "genre_ids": [
            28,
            35,
            10749
        ],
        "id": 848187,
        "original_language": "en",
        "original_title": "Role Play",
        "overview": "Emma has a wonderful husband and two kids in the suburbs of New Jersey – she also has a secret life as an assassin for hire – a secret that her husband David discovers when the couple decide to spice up their marriage with a little role play.",
        "popularity": 809.428,
        "poster_path": "/7MhXiTmTl16LwXNPbWCmqxj7UxH.jpg",
        "release_date": "2023-12-14",
        "title": "Role Play",
        "video": false,
        "vote_average": 5.798,
        "vote_count": 181
    },
    {
        "adult": false,
        "backdrop_path": "/a0GM57AnJtNi7lMOCamniiyV10W.jpg",
        "genre_ids": [
            16,
            12,
            14
        ],
        "id": 508883,
        "original_language": "ja",
        "original_title": "君たちはどう生きるか",
        "overview": "While the Second World War rages, the teenage Mahito, haunted by his mother's tragic death, is relocated from Tokyo to the serene rural home of his new stepmother Natsuko, a woman who bears a striking resemblance to the boy's mother. As he tries to adjust, this strange new world grows even stranger following the appearance of a persistent gray heron, who perplexes and bedevils Mahito, dubbing him the \"long-awaited one.\"",
        "popularity": 694.544,
        "poster_path": "/jDQPkgzerGophKRRn7MKm071vCU.jpg",
        "release_date": "2023-07-14",
        "title": "The Boy and the Heron",
        "video": false,
        "vote_average": 7.466,
        "vote_count": 792
    },
    {
        "adult": false,
        "backdrop_path": "/ay0PJQZizDXk0pzhoGX4v7K9h7A.jpg",
        "genre_ids": [
            28,
            53
        ],
        "id": 1214314,
        "original_language": "en",
        "original_title": "One More Shot",
        "overview": "Following the attack on the black site in Poland, Navy SEAL Jake Harris is ordered to escort terrorist suspect Amin Mansur to Washington D.C. for interrogation. Before the prisoner transfer process is complete, though, the airport is attacked by a group of heavily armed, well-trained mercenaries.",
        "popularity": 536.253,
        "poster_path": "/nQ1BQg4yMdlYSHvHZgwladzy7EF.jpg",
        "release_date": "2024-01-12",
        "title": "One More Shot",
        "video": false,
        "vote_average": 6.765,
        "vote_count": 68
    },
    {
        "adult": false,
        "backdrop_path": "/2KGxQFV9Wp1MshPBf8BuqWUgVAz.jpg",
        "genre_ids": [
            16,
            12,
            35,
            10751,
            28
        ],
        "id": 940551,
        "original_language": "en",
        "original_title": "Migration",
        "overview": "After a migrating duck family alights on their pond with thrilling tales of far-flung places, the Mallard family embarks on a family road trip, from New England, to New York City, to tropical Jamaica.",
        "popularity": 603.494,
        "poster_path": "/ldfCF9RhR40mppkzmftxapaHeTo.jpg",
        "release_date": "2023-12-06",
        "title": "Migration",
        "video": false,
        "vote_average": 7.553,
        "vote_count": 142
    },
    {
        "adult": false,
        "backdrop_path": "/rVJfabCz1ViynQCEz54MRqdZig1.jpg",
        "genre_ids": [
            16,
            878,
            28
        ],
        "id": 1155089,
        "original_language": "en",
        "original_title": "Justice League: Crisis on Infinite Earths Part One",
        "overview": "Death is coming. Worse than death: oblivion. Not just for our Earth, but for everyone, everywhere, in every universe! Against this ultimate destruction, the mysterious Monitor has gathered the greatest team of Super Heroes ever assembled. But what can the combined might of Superman, Wonder Woman, Batman, The Flash, Green Lantern and hundreds of Super Heroes from multiple Earths even do to save all of reality from an unstoppable antimatter armageddon?!",
        "popularity": 451.574,
        "poster_path": "/zR6C66EDklgTPLHRSmmMt5878MR.jpg",
        "release_date": "2024-01-09",
        "title": "Justice League: Crisis on Infinite Earths Part One",
        "video": false,
        "vote_average": 7.843,
        "vote_count": 121
    },
    {
        "adult": false,
        "backdrop_path": "/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
        "genre_ids": [
            18,
            36
        ],
        "id": 872585,
        "original_language": "en",
        "original_title": "Oppenheimer",
        "overview": "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
        "popularity": 594.106,
        "poster_path": "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
        "release_date": "2023-07-19",
        "title": "Oppenheimer",
        "video": false,
        "vote_average": 8.1,
        "vote_count": 6291
    },
    {
        "adult": false,
        "backdrop_path": "/ejTG17sqAEEyIqZVpYhyw0PGUdT.jpg",
        "genre_ids": [
            878,
            10749,
            35
        ],
        "id": 792307,
        "original_language": "en",
        "original_title": "Poor Things",
        "overview": "Brought back to life by an unorthodox scientist, a young woman runs off with a debauched lawyer on a whirlwind adventure across the continents. Free from the prejudices of her times, she grows steadfast in her purpose to stand for equality and liberation.",
        "popularity": 491.877,
        "poster_path": "/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg",
        "release_date": "2023-11-21",
        "title": "Poor Things",
        "video": false,
        "vote_average": 8,
        "vote_count": 237
    },
    {
        "adult": false,
        "backdrop_path": "/47SVqaO02doJ06tOmrjiWDkwU3T.jpg",
        "genre_ids": [
            28,
            53
        ],
        "id": 927107,
        "original_language": "en",
        "original_title": "The Bricklayer",
        "overview": "Someone is blackmailing the CIA by assassinating foreign journalists and making it look like the agency is responsible. As the world begins to unite against the U.S., the CIA must lure its most brilliant – and rebellious – operative out of retirement, forcing him to confront his checkered past while unraveling an international conspiracy.",
        "popularity": 476.822,
        "poster_path": "/pwOQ9lqLX1OgsJRSybS662wMcu8.jpg",
        "release_date": "2023-12-14",
        "title": "The Bricklayer",
        "video": false,
        "vote_average": 6.4,
        "vote_count": 61
    },
    {
        "adult": false,
        "backdrop_path": "/4MCKNAc6AbWjEsM2h9Xc29owo4z.jpg",
        "genre_ids": [
            28,
            53
        ],
        "id": 866398,
        "original_language": "en",
        "original_title": "The Beekeeper",
        "overview": "One man’s campaign for vengeance takes on national stakes after he is revealed to be a former operative of a powerful and clandestine organization known as Beekeepers.",
        "popularity": 466.017,
        "poster_path": "/3DjlG6E3yglj6Zj7izALDAJXQLM.jpg",
        "release_date": "2024-01-10",
        "title": "The Beekeeper",
        "video": false,
        "vote_average": 7.5,
        "vote_count": 169
    },
    {
        "adult": false,
        "backdrop_path": "/e0M3WVJm4nBrAg0LbJq0gdKi3U7.jpg",
        "genre_ids": [
            18,
            878,
            28
        ],
        "id": 695721,
        "original_language": "en",
        "original_title": "The Hunger Games: The Ballad of Songbirds & Snakes",
        "overview": "64 years before he becomes the tyrannical president of Panem, Coriolanus Snow sees a chance for a change in fortunes when he mentors Lucy Gray Baird, the female tribute from District 12.",
        "popularity": 452.675,
        "poster_path": "/mBaXZ95R2OxueZhvQbcEWy2DqyO.jpg",
        "release_date": "2023-11-15",
        "title": "The Hunger Games: The Ballad of Songbirds & Snakes",
        "video": false,
        "vote_average": 7.228,
        "vote_count": 1560
    },
    {
        "adult": false,
        "backdrop_path": "/kWyQh9fCrgcMfhqZmqtp89Q0TrT.jpg",
        "genre_ids": [
            35,
            10749
        ],
        "id": 1072790,
        "original_language": "en",
        "original_title": "Anyone But You",
        "overview": "After an amazing first date, Bea and Ben’s fiery attraction turns ice cold — until they find themselves unexpectedly reunited at a destination wedding in Australia. So they do what any two mature adults would do: pretend to be a couple.",
        "popularity": 421.646,
        "poster_path": "/yRt7MGBElkLQOYRvLTT1b3B1rcp.jpg",
        "release_date": "2023-12-21",
        "title": "Anyone But You",
        "video": false,
        "vote_average": 7.191,
        "vote_count": 94
    },
    {
        "adult": false,
        "backdrop_path": "/ehumsuIBbgAe1hg343oszCLrAfI.jpg",
        "genre_ids": [
            16,
            10751,
            14,
            12
        ],
        "id": 1022796,
        "original_language": "en",
        "original_title": "Wish",
        "overview": "Asha, a sharp-witted idealist, makes a wish so powerful that it is answered by a cosmic force – a little ball of boundless energy called Star. Together, Asha and Star confront a most formidable foe - the ruler of Rosas, King Magnifico - to save her community and prove that when the will of one courageous human connects with the magic of the stars, wondrous things can happen.",
        "popularity": 428.742,
        "poster_path": "/AcoVfiv1rrWOmAdpnAMnM56ki19.jpg",
        "release_date": "2023-11-13",
        "title": "Wish",
        "video": false,
        "vote_average": 6.4,
        "vote_count": 313
    },
    {
        "adult": false,
        "backdrop_path": "/vAsxVpXP53cMSsD9u4EekQKz4ur.jpg",
        "genre_ids": [
            18,
            53
        ],
        "id": 1050035,
        "original_language": "ja",
        "original_title": "怪物",
        "overview": "When her young son Minato starts to behave strangely, his mother feels that there is something wrong. Discovering that a teacher is responsible, she storms into the school demanding to know what's going on. But as the story unfolds through the eyes of mother, teacher, and child, the truth gradually emerges.",
        "popularity": 306.341,
        "poster_path": "/oAJEA8fZzzJQMWLPM7BML1U46Ft.jpg",
        "release_date": "2023-06-02",
        "title": "Monster",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 162
    },
    {
        "adult": false,
        "backdrop_path": "/bWIIWhnaoWx3FTVXv6GkYDv3djL.jpg",
        "genre_ids": [
            878,
            27,
            28
        ],
        "id": 940721,
        "original_language": "ja",
        "original_title": "ゴジラ-1.0",
        "overview": "In postwar Japan, a new terror rises. Will the devastated people be able to survive... let alone fight back?",
        "popularity": 334.39,
        "poster_path": "/hkxxMIGaiCTmrEArK7J56JTKUlB.jpg",
        "release_date": "2023-11-03",
        "title": "Godzilla Minus One",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 335
    },
    {
        "adult": false,
        "backdrop_path": "/riuTxOEKQ9lfvSan2vwaOPipwtr.jpg",
        "genre_ids": [
            35,
            18
        ],
        "id": 621587,
        "original_language": "en",
        "original_title": "Next Goal Wins",
        "overview": "Dutch coach Thomas Rongen attempts the nearly impossible task of turning the American Samoa soccer team from perennial losers into winners.",
        "popularity": 352.641,
        "poster_path": "/xTQCL1zGugIck8MgvJ2lXSrxENR.jpg",
        "release_date": "2023-11-16",
        "title": "Next Goal Wins",
        "video": false,
        "vote_average": 6.5,
        "vote_count": 124
    },
    {
        "adult": false,
        "backdrop_path": "/k1KrbaCMACQiq7EA0Yhw3bdzMv7.jpg",
        "genre_ids": [
            16,
            10751,
            10402,
            14,
            35
        ],
        "id": 901362,
        "original_language": "en",
        "original_title": "Trolls Band Together",
        "overview": "When Branch's brother, Floyd, is kidnapped for his musical talents by a pair of nefarious pop-star villains, Branch and Poppy embark on a harrowing and emotional journey to reunite the other brothers and rescue Floyd from a fate even worse than pop-culture obscurity.",
        "popularity": 333.38,
        "poster_path": "/bkpPTZUdq31UGDovmszsg2CchiI.jpg",
        "release_date": "2023-10-12",
        "title": "Trolls Band Together",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 571
    }
]