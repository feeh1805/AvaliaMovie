import { ReactComponent as Star1 } from '../../recursos/img/star1.svg';
import { ReactComponent as Star2 } from '../../recursos/img/star2.svg';
import { ReactComponent as Star3 } from '../../recursos/img/star3.svg';

function MovieStars() {
    return (
        <div className="AvaliaMovie-stars-container">
            <Star1 />
            <Star1 />
            <Star1 />
            <Star2 />
            <Star3 />
        </div>


    );
}

export default MovieStars;