

function Header() {
    return (
        <header>
            <section>
                <div id="one">
                    <h2 id="one-head">Little Lemon</h2>
                    <h3 className="two-head">Chicago</h3>
                    <p className="two-head" id="para">
                        We are a family owned Mediterraneran restaurant,<br /> focused on
                        traditional recipes served with a modern twist.
                    </p>
                    <button id="reserve">Reserve a table</button>
                </div>
                <div id="two">
                    <img src="src/assets/restauranfood.jpg" width="200px" height="250px" alt="food" />
                </div>
            </section>
        </header>
    )
}

export default Header;