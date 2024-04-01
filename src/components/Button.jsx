
function Button({ text, onClick, type }) {
    let buttonClass = 'btn btn-orange';

    if (type === 'cta') {
        buttonClass += ' btn-cta';
    } else if (type === 'info') {
        buttonClass += ' btn-info';
    }

    return (
        <button className={buttonClass} onClick={onClick}>
            {text}
        </button>
    );
}

export default Button;