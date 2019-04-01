const container = document.querySelector(".entryLog")
const newJournalEntry = (journalDate, conceptTypes, journalEntry, journalMood) => {
    return {
        "date": journalDate,
        "concept": conceptTypes,
        "entry": journalEntry,
        "mood": journalMood
    }
}
