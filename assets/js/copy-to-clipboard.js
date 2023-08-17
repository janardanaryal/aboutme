document.addEventListener('DOMContentLoaded', function () {
    function copyTextToClipboard(buttonId, outputId) {
        var copyButton = document.getElementById(buttonId);

        copyButton.addEventListener('click', function () {
            // Get the textarea element by its ID
            var textarea = document.getElementById(outputId);

            // Check if the textarea has content
            if (textarea.value.trim() === '') {
                console.log('Textarea is empty. Nothing to copy.');
                return; // Exit the function
            }

            // Select the text inside the textarea
            textarea.select();

            // Execute the copy command
            var successful = document.execCommand('copy');

            // Display a message indicating success or failure
            if (successful) {
                console.log('Text copied to clipboard.');
            } else {
                console.log('Unable to copy text to clipboard.');
            }
        });
    }
    // Attach event listeners for each button
    copyTextToClipboard('copy-button‍-roman', 'roman-output');
    copyTextToClipboard('copy-button-preeti', 'unicodeTextArea');
    copyTextToClipboard('copy-button-unicode', 'preetiTextArea2');
});
