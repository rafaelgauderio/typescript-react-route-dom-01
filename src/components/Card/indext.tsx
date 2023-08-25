import './styles.css';

type Props = {
    title: string;
}

const Card = ({ title }: Props) => {
    return (
        <>
            <div className="default-card">
                <h2>{title}</h2>
            </div>
        </>
    );
}

export default Card;