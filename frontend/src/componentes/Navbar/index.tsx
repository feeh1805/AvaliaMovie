import { ReactComponent as GithubIcon } from '../../recursos/img/github.svg';
import './styles.css';

function Navbar() {

    return (
        <header>
            <nav className='container'>
                <div className='AvaliaMovie-nav-content'>
                    <h1>AvaliaMovie</h1>
                    <a href="https://github.com/feeh1805">
                        <div className='AvaliaMovie-contact-container'>
                            <GithubIcon />
                            <p className='AvaliaMovie-contact-link'>/devsuperior</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;