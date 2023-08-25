import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Card from "../../components/Card";

const Subscription = () => {
    return (
        <>
            <main>
                <section>
                    <div className="container">
                        <div className="margin-top margin-botton">
                            <Card title="SUBSCRIPTION page"></Card>
                            <Link to="/promotion">
                                <div className="display-flex">
                                    <Button message={'back to PROMOTIONS'}></Button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Subscription;