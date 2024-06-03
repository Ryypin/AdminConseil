function ContactButton({text}) {
    return (
        <a className="btn btn-orange btn-cta" href="mailto:cathy.testelmans@gmail.com">
            {text}
        </a>
    );
}

export default ContactButton;