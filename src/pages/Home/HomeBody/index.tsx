import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import Card from '../../../components/Card';
import './styles.css';

const HomeBody = () => {
    return (
        <>
            <main>
                <section>
                    <div className="container">
                        <div className="margin-top margin-botton">
                            <Card title="Body of INITIAL home page"></Card>
                            <div className="display-flex">
                                <Link to="/promotion" >
                                    <Button message={'See Promotions'}></Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default HomeBody;