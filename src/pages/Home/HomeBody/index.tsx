import Button from '../../../components/Button';
import Card from '../../../components/Card/indext';
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
                                <Button message={'See Promotions'}></Button>
                            </div>
                        </div>
                    </div>

                </section>

            </main>
        </>
    );
}

export default HomeBody;