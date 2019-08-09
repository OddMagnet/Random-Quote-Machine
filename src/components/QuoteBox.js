// This component represents the Box containing the random quotes.
// New Quote will be fetched via the RandomQuoteService

import React, { Component } from 'react';
import { getQuote } from '../services/RandomQuoteService';

export default class QuoteBox extends Component {

    constructor() {
        super();

        this.state = {
            quote: {
                text: '',
                author: ''
            }
        }
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
        return (
            <h1>HELLO WORLD</h1>
        );
    }
}