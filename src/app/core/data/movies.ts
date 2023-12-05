import { IMovie } from '../models/Movie.interface';

export const MOVIES: IMovie[] = [
  {
    key: 'tenet',
    title: 'Tenet',
    description:
      'Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time',
    rating: 7.8,
    duration: '2h 30 min',
    genre: ['Action', 'Sci-Fi'],
    releasedDate: '3 September 2020',
    trailerLink:
      'https://www.youtube.com/embed/LdOM0x0XDMo?si=Zu5S5s9WomtIvHxm&autoplay=1',
    thumbnail: 'assets/images/thumbnail/tenet.png',
    alt: 'poster of the movie tenet',
    onWatchlist: false,
  },

  {
    key: 'knives-out',
    title: 'Knives Out',
    description:
      'A detective investigates the death of a patriarch of an eccentric, combative family.',
    rating: 7.9,
    duration: '2h 10min',
    genre: ['Comedy', 'Crime', 'Drama'],
    releasedDate: '27 November 2019',
    trailerLink:
      'https://www.youtube.com/embed/qGqiHJTsRkQ?si=RP35IaLzhLm16tZt&autoplay=1',
    thumbnail: 'assets/images/thumbnail/knives-out.png',
    alt: 'poster of the movie knives out',
    onWatchlist: false,
  },

  {
    key: 'spider-man',
    title: 'Spider-Man: Into the Spider-Verse',
    description:
      'Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spiderpowered individuals from other dimensions to stop a threat for all realities.',
    rating: 8.4,
    duration: '1h 57min',
    genre: ['Action', 'Animation', 'Adventure'],
    releasedDate: '14 December 2018',
    trailerLink:
      'https://www.youtube.com/embed/tg52up16eq0?si=adFFMqPlGu9rOtbH&autoplay=1',
    thumbnail: 'assets/images/thumbnail/spider-man.png',
    alt: 'poster of the movie spider-man into the spider-verse',
    onWatchlist: false,
  },

  {
    key: 'avengers',
    title: 'Avengers: Age of Ultron',
    description:
      "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.",
    rating: 7.3,
    duration: '2h 21min',
    genre: ['Action', 'Adventure', 'Sci-Fi'],
    releasedDate: '1 May 2015',
    trailerLink:
      'https://www.youtube.com/embed/tmeOjFno6Do?si=4ZEjY_OJD5unLOzm&autoplay=1',
    thumbnail: 'assets/images/thumbnail/avengers.png',
    alt: 'post of the file avengers, age of ultron',
    onWatchlist: false,
  },

  {
    key: 'guardians',
    title: 'Guardians of the Galaxy',
    description:
      'A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.',
    rating: 8.0,
    duration: '2h 1min',
    genre: ['Action', 'Adventure', 'Comedy'],
    releasedDate: '1 August 2014',
    trailerLink:
      'https://www.youtube.com/embed/d96cjJhvlMA?si=O7LJE2oO6oVaSTL2&autoplay=1',
    thumbnail: 'assets/images/thumbnail/guardians-of-the-galaxy.png',
    alt: 'poster of the movie guardians of the galaxy',
    onWatchlist: false,
  },
];
