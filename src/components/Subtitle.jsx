function Subtitle({ text, type }) {
    let subtitleClass = 'h2';
    let colorLine;

    if (type === 'contrast') {
        subtitleClass += ' text-white';
        colorLine = 'bg-secondary w-20 h-1 rounded mb-7';
    } else {
        colorLine = 'bg-primary w-20 h-1 rounded mb-7';
    }

    return (
        <> 
            <h2 className={subtitleClass}>
                {text}
            </h2>
            <div className={colorLine}></div>
        </>
    );
}

export default Subtitle;