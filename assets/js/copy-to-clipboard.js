$(document).ready(function() {
    function copyTextToClipboard(buttonId, outputId) {
        var copyButton = $('#' + buttonId);

        copyButton.on('click', function () {
            // Get the textarea element by its ID
            var textarea = $('#' + outputId);

            // Check if the textarea has content
            if ($.trim(textarea.val()) === '') {
                console.log('Textarea is empty. Nothing to copy.');
                return; // Exit the function
            }

            try {
                // Create a temporary textarea element
                var tempTextarea = document.createElement('textarea');
                tempTextarea.value = textarea.val();
                document.body.appendChild(tempTextarea);

                // Select the text inside the temporary textarea
                tempTextarea.select();

                // Use the Clipboard API to copy the text
                document.execCommand('copy');

                // Remove the temporary textarea from the DOM
                document.body.removeChild(tempTextarea);

                console.log('Text copied to clipboard.');
            } catch (err) {
                console.error('Unable to copy text to clipboard: ' + err);
            }
        });
    }

    // Attach event listeners for each button
    copyTextToClipboard('copy-button-unicode', 'unicodeTextArea');
    copyTextToClipboard('copy-button-roman', 'roman-output');
    copyTextToClipboard('copy-button-preeti', 'preetiTextArea2');
});
