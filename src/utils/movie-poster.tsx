import PulpFiction from 'src/assets/img/movies/pulp_fiction.jpg';
import Bohemian from 'src/assets/img/movies/bohemian.jpg';
import KillBill from 'src/assets/img/movies/kill_bill.jpg';
import Avengers from 'src/assets/img/movies/avengers.jpg';
import Inception from 'src/assets/img/movies/inception.jpg';
import RDogs from 'src/assets/img/movies/reservoir_dogs.jpg';

export function getPoster(image: string): string {
    let img;
    switch (image) {
        case 'PulpFiction':
            img = PulpFiction;
            break;
        case 'Bohemian':
            img = Bohemian;
            break;
        case 'KillBill':
            img = KillBill;
            break;
        case 'Avengers':
            img = Avengers;
            break;
        case 'Inception':
            img = Inception;
            break;
        case 'RDogs':
            img = RDogs;
            break;
    }

    return img;
}