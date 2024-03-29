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

                // Call the selectText function to focus and select text
                selectText(tempTextarea);

                // Use Clipboard API to copy text
                document.execCommand('copy');

                // Remove temporary textarea from DOM
                document.body.removeChild(tempTextarea);

                // Focus on the original textarea to visibly show the selection
                textarea.focus();
                
                // Call the selectText function to focus and select text
                selectText(tempTextarea);

                console.log('Text copied to clipboard.');
            } catch (err) {
                console.error('Unable to copy text to clipboard: ' + err);
            }
        });
    }

    // Function to focus and select text in an input element
    function selectText(element) {
        const unicode = document.getElementById("unicodeTextArea");
          if (unicode.value) {
          	 unicode.focus();
             unicode.select();
          }
        const roman = document.getElementById("roman-output");
          if (roman.value) {
          	 roman.focus();
             roman.select();
          }
        const preeti = document.getElementById("preetiTextArea2");
          if (preeti.value) {
          	 preeti.focus();
             preeti.select();
          }
        element.focus();
        element.select();
    }

    // Attach event listeners for each button
    copyTextToClipboard('copy-button-unicode', 'unicodeTextArea');
    copyTextToClipboard('copy-button-roman', 'roman-output');
    copyTextToClipboard('copy-button-preeti', 'preetiTextArea2');
});
