$(document).ready(function() {
    // Function to copy text to clipboard
    function copyTextToClipboard(buttonId, outputId) {
        var copyButton = $('#' + buttonId);

        copyButton.on('click', function () {
            var textarea = $('#' + outputId);

            // Check if textarea has content
            if ($.trim(textarea.val()) === '') {
                console.log('Textarea is empty. Nothing to copy.');
                return;
            }

            try {
                var tempTextarea = document.createElement('textarea');
                tempTextarea.value = textarea.val();
                document.body.appendChild(tempTextarea);

                // Select text inside temporary textarea
                tempTextarea.select();

                // Use Clipboard API to copy text
                document.execCommand('copy');

                // Remove temporary textarea from DOM
                document.body.removeChild(tempTextarea);

                // Focus on the original textarea to visibly show the selection
                textarea.focus();

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
