import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/indext';
import './styles.css';

const Home = () => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
        </>
    );
}

export default Home;