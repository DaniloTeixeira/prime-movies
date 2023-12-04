export interface Movie {
    key: string;
    title: string;
    description: string;
    rating: number;
    duration: string;
    genre: string[];
    releasedDate: string;
    trailerLink: string;
    thumbnail: string;
    alt?: string;
}