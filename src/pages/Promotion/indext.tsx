import Button from "../../components/Button";
import Card from "../../components/Card/indext";

const Promotion = () => {
    return (
        <>
            <main>
                <section>
                    <div className="container">
                        <div className="margin-top margin-botton">
                            <Card title="PROMOTION page"></Card>
                            <div className="display-flex">
                                <Button message={'I want to participate'}></Button>
                            </div>
                        </div>
                    </div>

                </section>

            </main>
        </>
    );
}

export default Promotion;