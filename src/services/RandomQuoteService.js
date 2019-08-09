export function getQuote() {
    // I tried to find an api for this, but couldn't find a reliable, free api that allowed for easy access, 
    // so here's an array of quote, which will always work and doesn't cost me anything
    const quotes = [
        {
            author: "Ellen Lupton",
            text: "Think more, design less."
        },
        {
            author: "Victor Papanek",
            text: "Design is the conscious effort to impose a meaningful order."
        },
        {
            author: "Karen McGrane",
            text: "Give a crap. Don't give a fuck."
        },
        {
            author: "Yasin Japardi",
            text: "There's no shortcut for greatness."
        },
        {
            author: "GZA",
            text: "Where I come from, gettin' visual is habitual."
        },
        {
            author: "Bill Watterson",
            text: "You mix a bunch of ingredients, and once in a great while, chemistry happens."
        },
        {
            author: "Vital Lokossou",
            text: "Tech without design is the business's perdition."
        },
        {
            author: "Alan Cooper",
            text: "If we want users to like our software we should design it to behave like a likeable person: respectful, generous and helpful."
        },
        {
            author: "Marcel Wanders",
            text: "Functionality is so over-valued in design, and we've kept design very small in that way. Functionality is the sheer minimum. If your house burns down, what do you take? The cat in the window that you got from your mother, or the chair you have?"
        },
        {
            author: "Lisa Manson",
            text: "A graphic designer is a machine that turns coffee into beautiful, functional imagery."
        }
    ]

    return quotes[Math.floor(Math.random() * 10)];
}