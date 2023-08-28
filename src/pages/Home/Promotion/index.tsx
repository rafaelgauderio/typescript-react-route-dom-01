import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import Card from "../../../components/Card";

const Promotion = () => {
    return (
        <>
            <main>
                <section>
                    <div className="container">
                        <div className="margin-top margin-botton">
                            <Card title="PROMOTION page"></Card>
                            <div className="display-flex">
                                <Link to="/subscription">
                                    <Button message={'I want to participate'}></Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Promotion;