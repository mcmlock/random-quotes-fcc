import React from 'react';
const newQuote = require('super-random-quotes/app');
const getColorPair = require("random-color-pair");

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            quote: "It isn't where you came from. It's where you're going that counts.",
            author: "Ella Fitzgerald",
            fgColor: '#000000',
            bgColor: '#ffffff'
        }
        this.newQuoteClicked = this.newQuoteClicked.bind(this);
    }

    componentDidMount() {
        const [foregroundColor, backgroundColor] = getColorPair();
        this.setState({
            fgColor: `${foregroundColor}`,
            bgColor: `${backgroundColor}`
        });
    }

    newQuoteClicked() {
        const newQuoteFull = newQuote.getRandomQuote().split(' ~ ');
        const newQuoteText = newQuoteFull[0];
        const newQuoteAuthor = newQuoteFull[1];
        const [foregroundColor, backgroundColor] = getColorPair();
        this.setState({
            quote: newQuoteText,
            author: newQuoteAuthor,
            fgColor: `${foregroundColor}`,
            bgColor: `${backgroundColor}`
        });
    }

    render() {
        const foregroundElement = {
            color: this.state.fgColor,
        }
        const backgroundElement = {
            backgroundColor: this.state.bgColor,
        }
        return (
            <div id="quote-box" style={backgroundElement}>
                <h1 style={foregroundElement}>Take a Dose of Inspiration</h1>
                <div>
                    <div className="quote-block">
                        <span style={foregroundElement} className='startQuotation'>"</span><p style={foregroundElement} id="text">{this.state.quote}</p><span style={foregroundElement} className='endQuotation'>"</span>
                    </div>
                </div>
                <p style={foregroundElement} id="author">~ {this.state.author}</p>
                <div>
                    <div>
                        <a style={foregroundElement} id="tweet-quote" href="twitter.com/intent/tweet" target="_blank">Tweet</a>
                    </div>
                    <div onClick={this.newQuoteClicked} style={foregroundElement} id="new-quote">New Quote</div>
                </div>
            </div>
        );
    }
}

export default App;