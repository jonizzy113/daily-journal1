const makeJournalEntryComponent = (date, concept, entry, mood) => {
    return `
        <h1>${date}</h1>
        <p>${concept}</p>
        <p>${entry}</p>
        <p>${mood}</p>
    
    `
}

const renderJournalEntries = (entries) => {
    for(let i = 0; i < entries.length; i++) {
        container.innerHTML += makeJournalEntryComponent(
            entries[i].date,
            entries[i].concept,
            entries[i].entry,
            entries[i].mood
        )}
}