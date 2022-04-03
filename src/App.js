import React from 'react';
const quote = require('super-random-quotes/app');

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            quote: "It isn't where you came from. It's where you're going that counts.",
            author: "Ella Fitzgerald"
        }
    }

    newQuoteClicked() {
        console.log(quote.getRandomQuote());
    }

    render() {
        return (
            <div id="quote-box">
                <h1>Take a Dose of Inspiration</h1>
                <div>
                    <div>
                        <p id="text">{this.state.quote}</p>
                    </div>
                </div>
                <p id="author">{this.state.author}</p>
                <div>
                    <div>
                        <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank">Tweet</a>
                    </div>
                    <div onClick={this.newQuoteClicked} id="new-quote">New Quote</div>
                </div>
            </div>
        );
    }
}

export default App;