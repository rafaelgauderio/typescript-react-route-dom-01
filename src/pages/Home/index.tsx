import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
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