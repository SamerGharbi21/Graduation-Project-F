    function sendMessage() {
        const userInput = document.getElementById('userInput').value;

        if (userInput.trim() === '') {
            return; // Don't send empty messages
        }

        const messageContainer = document.querySelector('.chat-container');

        const userMessage = document.createElement('div');
        userMessage.className = 'message user-message';
        userMessage.textContent = userInput;

        const spellCheckedResponse = spellCheck(userInput);

        const botMessageSpellChecked = document.createElement('div');
        botMessageSpellChecked.className = 'message bot-message';
        botMessageSpellChecked.textContent = spellCheckedResponse;

        const botMessageAnotherSentence = document.createElement('div');
        botMessageAnotherSentence.className = 'message bot-message';
        botMessageAnotherSentence.textContent = 'Another sentence goes here.';

        // Append the user message and bot messages to the chat container
        messageContainer.appendChild(userMessage);
        
        messageContainer.appendChild(botMessageAnotherSentence);

        // Scroll to the bottom of the chat container
        messageContainer.scrollTop = messageContainer.scrollHeight;

        // Clear the user input field
        document.getElementById('userInput').value = '';
    }

    function spellCheck(text) {
        // Modify this function as needed for actual spell-checking logic
        // For now, it simply returns the input text without any modification
        return text;
    }
