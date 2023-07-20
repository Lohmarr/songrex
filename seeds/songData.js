const { Song } = require('../models');

const songData = [
  {
    title: 'Music to Clean the House to',
    artist: 'Nick Leng',
    album: 'LEMONS',
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/18HzHlxWPLoJjEXJdzNf4V?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; 
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 5,
  },
  {
    title: 'Young Folks',
    artist: 'Peter Bjorn and John',
    album: `Writer's Block`,
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/4dyx5SzxPPaD8xQIid5Wjj?utm_source=generator"
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; 
    clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 5,
  },
  {
    title: 'Playing God',
    artist: 'Polyphia',
    album: 'Remember That You Will Die',
    embed: `<iframe style="border-radius:12px"
    src="https://open.spotify.com/embed/track/3nBGFgfRQ8ujSmu5cGlZIU?utm_source=generator"
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay;
    clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 1,
  },
  {
    title: 'Paranoid Android',
    artist: 'Radiohead',
    album: 'OK Computer',
    embed: `<iframe style="border-radius:12px"
    src="https://open.spotify.com/embed/track/6LgJvl0Xdtc73RJ1mmpotq?utm_source=generator"
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay;
    clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 1,
  },
  {
    title: 'Never Fight a Man with a Perm',
    artist: 'IDLES',
    album: 'Joy as an Act of Resistance',
    embed: `<iframe style="border-radius:12px"
    src="https://open.spotify.com/embed/track/7BmWDAlFk1DCL60I435oaE?utm_source=generator"
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write;
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 1,
  },
  {
    title: 'The Owl Song',
    artist: 'Of the Trees',
    album: 'The Owl Song',
    embed: `<iframe style="border-radius:12px"
    src="https://open.spotify.com/embed/track/7CdcnX9m1wI8sIlQGLd0Un?utm_source=generator"
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write;
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 7,
  },
  {
    title: 'Solo',
    artist: 'Samsa',
    album: 'Solo',
    embed: `<iframe style="border-radius:12px"
    src="https://open.spotify.com/embed/track/0oinJU5psqs6JSRT1k9Wfz?utm_source=generator"
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write;
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 2,
  },
  {
    title: 'Mask Off',
    artist: 'Future',
    album: 'Future',
    embed: `<iframe style="border-radius:12px"
    src="https://open.spotify.com/embed/track/0VgkVdmE4gld66l8iyGjgx?utm_source=generator"
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write;
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 2,
  },
  {
    title: 'Voodoo Child',
    artist: 'Jimi Hendrix',
    album: 'Electric Ladyland',
    embed: `<iframe style="border-radius:12px"
    src="https://open.spotify.com/embed/track/2AxCeJ6PSsBYiTckM0HLY7?utm_source=generator"
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write;
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 1,
  },
  {
    title: '1612',
    artist: 'Vulfpeck',
    album: 'Fugue State',
    embed: `<iframe style="border-radius:12px"
    src="https://open.spotify.com/embed/track/39rHfrVqCX6A55GF7uOZSC?utm_source=generator"
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write;
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 6,
  },
  {
    title: 'Can We Forget',
    artist: 'ALEXSUCKS',
    album: 'Can We Forget',
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/07yilZPUJuVK5HpqObUhWG?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; 
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 1,
  },
  {
    title: 'Guillotine',
    artist: 'Stray from the Path',
    album: 'Euthanasia',
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/0Qv6SQFLzg3KGBlOgOEBJK?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; 
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 1,
  },
  {
    title: 'Writing on the Walls',
    artist: 'Underoath',
    album: 'Define the Great Line',
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/313yF0VXTCmFFoYEJF7nBQ?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; 
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 1,
  },
  {
    title: 'Dead of Night',
    artist: 'Orville Peck',
    album: 'Pony',
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/08unC8N1V1dEcqiyi06g6W?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; 
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 3,
  },
  {
    title: 'Ring of Fire',
    artist: 'Johnny Cash',
    album: 'Ring of Fire: The Best of Johnny Cash',
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/6YffUZJ2R06kyxyK6onezL?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; 
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 3,
  },
  {
    title: 'I Think I ll Just Stay Here and Drink',
    artist: 'Merle Haggard',
    album: 'Okie From Muskogee',
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/6DmyknyzXRbIKZe3ySDA6Y?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; 
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 3,
  },
  {
    title: 'Line of Sight',
    artist: 'Plains, Waxahatchee, Jess Williamson',
    album: 'I Walked With You A Ways',
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/3UfL31RXO1IWc2MGrpAmsc?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; 
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 3,
  },
  {
    title: 'Way of the Triune God - Hallelujah Version',
    artist: 'Tyler Childers',
    album: 'Can I Take My Hounds to Heaven?',
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/2BJy4svtrGACqRB5BFLOK6?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; 
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 3,
  },
  {
    title: 'Magpie to the Morning',
    artist: 'Neko Case',
    album: 'Middle Cyclone',
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/6cQ7VLo6BKW5JhhzhkiKkB?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; 
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 3,
  },
  {
    title: 'All the Good Times',
    artist: 'Angel Olsen',
    album: 'Big Time',
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/6Tv21RLLA1Dt6OtPNz8QDq?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; 
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 3,
  },
  {
    title: 'I Am Not Afraid',
    artist: 'Charley Crockett',
    album: 'In the Night',
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/5pD6DyYeglUby2x5CXrqfA?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; 
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 3,
  },
  {
    title: 'Cicatriz Esp',
    artist: 'The Mars Volta',
    album: 'Deloused in the Comatorium',
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/3I7gJOfTamHWpDfbwQUO6T?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; 
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 1,
  },
  {
    title: 'The Fever (Aye Aye)',
    artist: 'Death Grips',
    album: 'The Money Store',
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/5lq6hpsabgw22xRYPHVV5c?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; 
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 1,
  },
  {
    title: 'Much More',
    artist: 'De La Soul',
    album: 'The Grind Date',
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/5zEP0MRnDe5qwL361xBz0B?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; 
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 2,
  },
  {
    title: '4EVA (feat Pharrell Williams',
    artist: 'KAYTRAMINE, Amine, Kaytranada, Pharrell Williams',
    album: 'KAYTRAMINE',
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/3CblJq8QQQ0bb7vwJu8c3v?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; 
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 2,
  },
  {
    title: 'Ready When You Are',
    artist: 'Planet Giza, Mick Jenkins',
    album: 'Ready When You Are',
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/0965uWewv2fb21pL7dt3oR?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; 
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 2,
  },
  {
    title: 'Poland',
    artist: 'Lil Yachty',
    album: 'Poland',
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/74loibzxXRL875X20kenvk?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; 
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 2,
  },
  {
    title: 'Rammellzee & Shockdell at the Amphitheater',
    artist: 'Rammellzee & Shockdell',
    album: 'Wild Style (Original Motion Picture Soundtrack - 25th Anniversary Edition)',
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/789WfeOhEMTUFlobwMTRKo?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; 
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 2,
  },
  {
    title: 'Lightworks',
    artist: 'J Dilla',
    album: 'Donuts',
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/0TIItu69NmCbgvJUD0Zbnb?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; 
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 2,
  },
  {
    title: 'Ra-Ako-St',
    artist: 'Lindstrom',
    album: 'Smalhans',
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/5Ts39gE980CvM2yy8XYg6z?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; 
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 7,
  },
  {
    title: 'Another Place',
    artist: 'Cuthead',
    album: 'Take-Off',
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/0Ba4tIawexVrlSfa1tpEyr?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; 
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 7,
  },
  {
    title: 'Raw Structure',
    artist: 'Edward',
    album: '',
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/4CZWXgMtDz4TojrfihXo7v?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; 
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 7,
  },
  {
    title: 'Youth Jazz',
    artist: 'FYI Chris',
    album: 'Black Dragon Loop',
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/7AhZqOQ976CkrBYXCDdsyU?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; 
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 7,
  },
  {
    title: 'After Indigo',
    artist: 'Damu',
    album: 'Unity',
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/4s34QbcHk6VbbS3RpS616A?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; 
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 7,
  },
  {
    title: 'Cherry',
    artist: 'Daphni',
    album: '',
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/7qdthSAP02SdvLGisBEVtI?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; 
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 7,
  },
  {
    title: 'BODMIN MOOR',
    artist: 'SBTRKT',
    album: '',
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/0hyjYTc7jbtBrZUghlhfvf?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; 
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 7,
  },
  {
    title: 'Break it off - Bonus',
    artist: 'PinkPanthress',
    album: 'to hell with it',
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/78ul3D77noQsYjSwvwiPU1?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; 
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 4,
  },
  {
    title: 'Ditto',
    artist: 'NewJeans',
    album: 'NewJeans OMG',
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/5702raF31K9rvD6KZ6sCTo?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; 
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 4,
  },
  {
    title: 'Kill Bill',
    artist: 'SZA',
    album: 'SOS',
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/1Qrg8KqiBpW07V7PNxwwwL?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; 
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 4,
  },{
    title: 'Cooped Up',
    artist: 'Post Malone',
    album: 'Twelve Carat Toothache',
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/32vE1nuG8T9c8bhmZdRY6d?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; 
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 4,
  },
  {
    title: 'Baby Be Mine',
    artist: 'Michael Jackson',
    album: 'Thriller',
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/6XYbMGvtl6tlPoGWaiH7EY?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; 
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 4,
  },
  {
    title: 'I Feel Coming',
    artist: 'The Weeknd',
    album: 'Starboy',
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/5GXAXm5YOmYT0kL5jHvYBt?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; 
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 4,
  },
  {
    title: 'Never Felt So Alone',
    artist: 'Labrinth',
    album: '',
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/5GXAXm5YOmYT0kL5jHvYBt?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; 
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 4,
  },
  {
    title: 'Dancing in the Courthouse',
    artist: 'Dominic Fike',
    album: '',
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/4ZwgD4frTwoDdOUsjyoqAJ?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; 
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 4,
  },
  {
    title: 'Slugs of Love',
    artist: 'Little Dragon',
    album: 'Slugs of Love',
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/29sTtddkz63yiOXb1piN2V?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; 
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 5,
  },
  {
    title: 'Deja Vu',
    artist: 'Toro Y Moi',
    album: 'Deja Vu',
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/29Hg1jaX5ZY5miqr3ScQSn?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; 
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 5,
  },
  {
    title: 'Blood in the Snow',
    artist: 'Totally Enormous Extinct Dinosaurs',
    album: '',
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/5yiEvFextSviCStbutB8UI?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; 
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 5,
  },
  {
    title: 'Fill My Mouth',
    artist: 'Goat',
    album: '',
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/5R71qFJDPnaNOXxuNDR9Mz?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; 
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 5,
  },
  {
    title: 'Silvia',
    artist: 'Miike Snow',
    album: 'Miike Snow (Deluxe Edition',
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/2Cq2BrkoxqMvP3hcJHWNga?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; 
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 5,
  },
  {
    title: 'Heavy Denim Loop',
    artist: 'Stereolab',
    album: 'Electrically Possessed (Switched on Volume 4)',
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/399NsrSvMNVHJmlqRB1ryY?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; 
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 5,
  },
  {
    title: 'Human Fell',
    artist: 'Hello Leo, Theophilus London, Chris Braide',
    album: '',
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/1XI70VdVbLSFcDHQ9p4BcS?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; 
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 5,
  },
  {
    title: 'That Life',
    artist: 'Unknown Human Orchestra',
    album: '',
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/5z0Wa1EiCoaUafx83WszRY?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; 
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 5,
  },
  {
    title: 'Do My Thang',
    artist: 'DaM-Funk, Snoop Dogg',
    album: '7 Days of Funk',
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/1JTE9076Zkksk8BCNrjDDn?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; 
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 6,
  },
  {
    title: 'The Way You Make Me Feel',
    artist: 'The Kount, Marc Rebillet',
    album: '',
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/7iXA7a53fVKxPJFJvebJ8P?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; 
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 6,
  },
  {
    title: 'More Bounce to the Ounce',
    artist: 'Zapp',
    album: 'All the Greatest Hits',
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/3Ho35OJixLg20qshXRgfBs?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; 
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 6,
  },
  {
    title: 'V-Neck Sweater',
    artist: 'The Greyboy Allstars',
    album: 'What Happened to Television',
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/5K5NAQrHIX5OdHdGgAVfIx?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; 
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 6,
  },
  {
    title: 'Move On Up',
    artist: 'Lettuce, Alan Evans, Dwele, Jason Crosby Kalen Evans',
    album: 'What Happened to Television',
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/17EstPHlkjKJYF00jbOe5h?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; 
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 6,
  },
  {
    title: 'Laberiinto',
    artist: 'Rawayana, Bosq',
    album: '',
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/73EADOHLCpA5Fk4EM8vzO1?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; 
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 6,
  },
  
  
];


const seedSongs = () => Song.bulkCreate(songData);

module.exports = seedSongs;
