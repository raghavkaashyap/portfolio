const Footer = () => {
    return (
        <footer className="c-space pt-7 pb-3 border-t border-black-300 flex flex-col items-center gap-5">
            <div className="social-icons-container flex gap-4 justify-center">
                <div className="social-icon">
                    <a href="https://github.com/raghavkaashyap" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/github.svg" alt="GitHub" className="w-8 h-8" />
                    </a>
                </div>
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/raghavkaashyap/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/linkedin.png" alt="LinkedIn" className="w-8 h-8" />
                    </a>
                </div>
            </div>

            <p className="text-white-500 text-center" style={{paddingLeft: '8px'}} >Raghav Kaashyap</p>
        </footer>
    );
};

export default Footer;

