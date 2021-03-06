// This component represents the Box containing the random quotes.
// New Quote will be fetched via the RandomQuoteService

import React, { Component } from 'react';
import { getQuote } from '../services/RandomQuoteService';

export default class QuoteBox extends Component {

    constructor() {
        super();

        this.state = {
            quote: {
                text: 'This is a random quote machine',
                author: 'Michael Brünen'
            }
        }

        this.getNewRandomQuote = this.getNewRandomQuote.bind(this);
    }

    getNewRandomQuote() {
        let quote = getQuote();
        this.setState({
            quote: {
                text: quote.text,
                author: quote.author
            }
        });
    }


    render() {
        // prepare quote and twitter link
        const quoteText = encodeURIComponent(`"${this.state.quote.text}"\n - ${this.state.quote.author}`);
        const twitterLink = `https://twitter.com/intent/tweet/?text=${quoteText}&hashtags=FreeCodeCamp,RandomQuoteMachine`;

        return (
            <div>
                <blockquote id="quote-box" className="quote-box text-center">
                    <p id="text" className="quote-text">
                        {this.state.quote.text}
                    </p>
                    <p id="author" className="quote-author">
                        {this.state.quote.author}
                    </p>
                    <div className="buttons">
                        <div id="new-quote" className="btn btn-secondary float-right" onClick={this.getNewRandomQuote}>
                            New Quote
                        </div>
                        <a id="tweet-quote" className="btn btn-primary float-left" target="_blank" rel="noopener noreferrer" href={twitterLink}>
                            Tweet
                        </a>
                    </div>
                </blockquote>
            </div>
        );
    }
}