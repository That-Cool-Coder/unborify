# unborify
Make your chrome browser less boring

## Informal dev notes:

The top level of the program is a setInterval in `background.js`

#### background.js
- Houses the main loop
- Every n milliseconds/seconds/minutes it chooses a random action
- It also initialises the settings when the program is first downloaded
- Reads the settings from chrome storage, so that it can communicate with settings popup

#### Actions
- An action is something that the program does to make things less boring
- Each action is a JS function that opens a tab and does things with it, or injects code into the current tab (to edit the DOM)
- Stored in `unborifyActions/`
- One action per file
- The file `unborifyActions/unborifyActions.js` contains an array of the actions

#### Settings storage
- The settings are stored using the chrome storage API
- Currently, the settings are: `activated` (bool), `updateIntervalSize` (number), and `updateIntervalUnits` (number)
- `updateIntervalUnits` represents is how many milliseconds are in one unit of `updateIntervalSize`
- In other words, the thing will run an action every `updateIntervalSize * updateIntervalUnits` ms
- When something is set in one of the inputs, it updates the settings stored with chrome storage

#### Settings popup
- Housed in `settingsPopup/`
- A little popup window that allows the user to configure the settings mentioned above
- In future, it's planned to make a button that will reset the page, effectively un-unborifying it