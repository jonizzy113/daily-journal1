const container = document.querySelector(".entryLog")
const makeJournalEntryComponent = (date, concept, entry, mood) => {
    return `
        <div>${date}</div>
        <div>${concept}</div>
        <div>${entry}</div>
        <div>${mood}</div>
    
    `
}