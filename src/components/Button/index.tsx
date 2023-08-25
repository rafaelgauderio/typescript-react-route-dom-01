import "./styles.css";

type Props = {
    message: string;
}

const Button = ({ message }: Props) => {
    return (
        <div className="default-button">
            {message}
        </div>
    );
}

export default Button;