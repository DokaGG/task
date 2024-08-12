gapi.load('client', start);

function start() {
    gapi.client.init({
        apiKey: 'AIzaSyDslecE8XAjqZ7gIfXnSgIotrEVgRN6wKE',
        discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
    }).then(() => {
        getData();
    });
}

function getData() {
    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: '1T0RXDWFQDykgbeERLykEs18GkwvHgzTWM8xRQllVbWw',
        range: 'Sheet1!A2:F2'
    }).then((response) => {
        const values = response.result.values;
        if (values && values.length > 0) {
            const loadingDiv = document.getElementById('loading');
            loadingDiv.style.display = 'none';
            
            const sheetDataDiv = document.getElementById('sheetData');
            sheetDataDiv.classList.remove('hidden');

            const names = ['BOC', 'Frimi', 'Comeback', 'Flash', 'Skrill', '2'];
            const valueIds = ['boc', 'frimi', 'comeback', 'flash', 'skrill', '2'];

            for (let i = 0; i < values[0].length; i++) {
                const valueElement = document.getElementById(valueIds[i]);
                valueElement.textContent = values[0][i];
            }
        }
    });
}
