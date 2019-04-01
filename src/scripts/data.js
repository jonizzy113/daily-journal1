const journalEntry1 = {
    date: "03/03/2019",
    concepts: "Javascript",
    entry: "1",
    mood: "ok"
}
const button = document.querySelector("#button")
entry = []
entry.push(journalEntry1)

const API = {
    getJournalEntries () {
        return fetch("http://localhost:3000/journalEntries")
            .then(response => response.json())
    },
    // POST method to add entry to API
    postJournalEntries(entry) {
        return fetch("http://localhost:3000/journalEntries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entry)
        })
        .then(response => response.json())
}}