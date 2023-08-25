import { Link } from 'react-router-dom';
import './styles.css';

const Header = () => {
    return (
        <>
            <header className="header-container">

                <div className="container">
                    <Link to="/">
                        <h1 className="site-title">Site Home DeLuca</h1>
                    </Link>
                </div>

            </header>
        </>
    );
}

export default Header;