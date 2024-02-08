import './Button.css';

function Button({name, isDisabled}) {
    return (
        <button
            type="button"
            className="button"
            disabled={isDisabled}
        >
            {name}
        </button>
    );
}

export default Button;