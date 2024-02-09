import './Button.css';

function Button({buttonType, isDisabled, name}) {
    return (
        <button
            type={buttonType}
            className="button"
            disabled={isDisabled}
        >
            {name}
        </button>
    );
}

export default Button;