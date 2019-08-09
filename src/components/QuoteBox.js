// This component represents the Box containing the random quotes.
// New Quote will be fetched via the RandomQuoteService

import React, { Component } from 'react';
import { getQuote } from '../services/RandomQuoteService';

export default class QuoteBox extends Component {

    constructor() {
        super();

        this.state = {
            quote: {
                text: 'TESTQUOTE',
                author: 'TESTAUTHOR'
            }
        }

        this.getNewRandomQuote = this.getNewRandomQuote.bind(this);
    }

    getNewRandomQuote() {
        getQuote()
            .then(quote => {
                this.setState({
                    quote: {
                        text: quote.text,
                        author: quote.author
                    }
                })
            })
            .catch(() => {
                this.setState({
                    quote: {
                        text: 'Error while fetching a new quote',
                        author: 'The Error'
                    }
                })
            });
    }

    render() {
        // prepare quote and twitter link
        const quoteText = encodeURIComponent(`"${this.state.quote.text}"\n - ${this.state.quote.author}`);
        const twitterLink = `https://twitter.com/intent/tweet/?text=${quoteText}&hashtags=FreeCodeCamp,RandomQuoteMachine`;
        let paperFooterStyle = {
            zIndex: 50,
            fontSize: '0.9em'
        }
        let paperQuoteStyle = {
            color: '#9fcc25',
            marginLeft: '4px',
            verticalAlign: 'middle'
        }

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
                        <div id="new-quote" className="btn btn-secondary" onClick={this.getNewRandomQuote}>
                            New Quote
                        </div>
                    </div>
                </blockquote>

                <footer>
                    <span style={paperFooterStyle}>
                        <img src="http://api.paperquotes.com/static/images/paperquotes.png" height="20" width="20" alt="paperquotes.com" />
                        <a href="http://paperquotes.com" title="Powered by quotes from paperquotes.com" style={paperQuoteStyle}>paperquotes.com</a>
                    </span>
                </footer>
            </div>
        );
    }
}