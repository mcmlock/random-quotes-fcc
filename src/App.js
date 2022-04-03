import React from 'react';
const newQuote = require('super-random-quotes/app');

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            quote: "It isn't where you came from. It's where you're going that counts.",
            author: "Ella Fitzgerald"
        }
        this.newQuoteClicked = this.newQuoteClicked.bind(this);
    }

    newQuoteClicked() {
        const newQuoteFull = newQuote.getRandomQuote().split(' ~ ');
        const newQuoteText = newQuoteFull[0];
        const newQuoteAuthor = newQuoteFull[1];
        this.setState({
            quote: newQuoteText,
            author: newQuoteAuthor
        });
    }

    render() {
        return (
            <div id="quote-box">
                <h1>Take a Dose of Inspiration</h1>
                <div>
                    <div>
                        <p id="text"><span>"</span>{this.state.quote}<span>"</span></p>
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