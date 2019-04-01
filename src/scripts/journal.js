/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/

const saveEntry = () => {
    console.log("checking to see if this works")
    const  journalDate = document.querySelector("#journalDate").value;
    console.log(journalDate)
    const  conceptTypes = document.querySelector("#conceptTypes").value;
    console.log(conceptTypes)
    const  journalEntry = document.querySelector("#journalEntry").value;
    console.log(journalEntry)
    const  journalMood = document.querySelector("#journalMood").value;
    console.log(journalMood)

    const entry = newJournalEntry(journalDate, conceptTypes, journalEntry, journalMood)
    while(container.firstChild) {
        container.removeChild(container.firstChild)
    }
    API.postJournalEntries(entry)
    .then(API.getJournalEntries)
    .then(renderJournalEntries)
}
API.getJournalEntries().then(renderJournalEntries)
button.addEventListener("click", saveEntry);
