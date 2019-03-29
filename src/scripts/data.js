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
        return fetch("http://localhost:3000/journalentries")
            .then(response => response.json())
    }
}
console.log(API)