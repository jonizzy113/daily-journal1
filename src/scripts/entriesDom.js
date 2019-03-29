document.getElementById("button").addEventListener("click", event => {
    const  journalDate = document.getElementById("journalDate").value;
    const  conceptTypes = document.getElementById("conceptTypes").value;
    const  journalEntry = document.getElementById("journalEntry").value;
    const  mood = document.getElementById("mood").value;
})

const renderJournalEntries = (entries) => {
    for(let i = 0; i < journalEntries.length; i++) {
        container.innerHTML += makeJournalEntryComponent(
            entries[i].date,
            entries[i].concept,
            entries[i].entry,
            entries[i].mood
        )}
}