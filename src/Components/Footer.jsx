function Footer() {
    return (
        <footer>
            <section className="footer-sec">
                <div className="footer-sec three">
                    <img src="src/assets/Logo.svg" width="150px"/>
                </div>
                <div className="four">
                    <h3>Important Links</h3>
                    <ul id="imp-links">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Reservations</a></li>
                        <li><a href="/">Order Online</a></li>
                        <li><a href="/">Login</a></li>
                    </ul>
                </div>
                <div className="footer-sec four">
                    <ul id="imp-links">
                        <li>Address: 123 Towncity, USA</li>
                        <li>Phone: 1234564790</li>
                        <li>Email: littlelemon@gmail.com</li>
                    </ul>
                </div>
            </section>
        </footer>
    );
}

export default Footer;