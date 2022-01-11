import { ReactComponent as Arrow } from '../../recursos/img/setaE.svg';
import './styles.css';

function Pagination() {

    return (
        <div className="AvaliaMovie-pagination-container">
            <div className="AvaliaMovie-pagination-box">
                <button className="AvaliaMovie-pagination-button" disabled={true} >
                    <Arrow />
                </button>
                <p>{`${1} de ${3}`}</p>
                <button className="AvaliaMovie-pagination-button" disabled={false} >
                    <Arrow className="AvaliaMovie-flip-horizontal" />
                </button>
            </div>
        </div>
    );
}

export default Pagination;