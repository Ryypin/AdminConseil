
function Button({ text, onClick, type, hover }) {
    let buttonClass = 'btn btn-orange';

    if (type === 'cta') {
        buttonClass += ' btn-cta';
    } else if (type === 'info') {
        buttonClass += ' btn-info';
    }

    if(hover === 'white'){
        buttonClass += ' hover:bg-white hover:text-orange';
    }

    return (
        <button className={buttonClass} onClick={onClick}>
            {text}
        </button>
    );
}

export default Button;