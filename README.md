# Note-Taker

The Note Taker is an app that uses an Express backend to save, retrieve, and delete notes from a JSON file.
On the home page, the user clicks the "Get Started" button to navigate to the notes page. 
he user has to click on either the "title" or "note" field and then can type the text they want to be in the note. Once there is content in both fields, the save icon appears
When the user clicks the save icon, the note is added to the JSON file and the list of notes on the left is updated to include the new note.
The user can review existing notes by clicking any of the note titles . This will populate the "title" and "note" fields with the saved note information.
A note can be deleted from the list by clicking the red trash can icon . This will remove it from the JSON file and update the list on the screen.
This app is hosted on Heroku and does not use an external database, so the JSON file that stores the notes is reset every time the server resets.
Here is the link the app i created.
https://anotetaker.herokuapp.com/
