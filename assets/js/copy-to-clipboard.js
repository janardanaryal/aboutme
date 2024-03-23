$(document).ready(function() {
    // Function to select text inside an element dynamically
    function selectText(tabId, baseId) {
        const tab = document.getElementById(tabId);
        if (tab) {
            const textareaId = baseId + "-" + tab.getAttribute("aria-controls");
            const textarea = document.getElementById(textareaId);
            if (textarea) {
                textarea.focus();
                textarea.select();
                return true; // Indicate successful selection
            } else {
                console.error('Textarea with ID ' + textareaId + ' not found.');
                return false; // Indicate failure to find the textarea
            }
        } else {
            console.error('Tab with ID ' + tabId + ' not found.');
            return false; // Indicate failure to find the tab
        }
    }

    // Function to copy text to clipboard
    function copyTextToClipboard(buttonId, tabId, baseId) {
        var copyButton = $('#' + buttonId);

        copyButton.on('click', function () {
            // Call selectText function with tabId and baseId
            selectText(tabId, baseId);

            var textarea = $('#' + baseId + "-" + $('#' + tabId).attr("aria-controls"));

            // Check if textarea has content
            if ($.trim(textarea.val()) === '') {
                console.log('Textarea is empty. Nothing to copy.');
                return;
            }

            try {
                var tempTextarea = document.createElement('textarea');
                tempTextarea.value = textarea.val();
                document.body.appendChild(tempTextarea);

                // Use Clipboard API to copy text
                tempTextarea.select();
                document.execCommand('copy');

                // Remove temporary textarea from DOM
                document.body.removeChild(tempTextarea);

                console.log('Text copied to clipboard.');
            } catch (err) {
                console.error('Unable to copy text to clipboard: ' + err);
            }
        });
    }

    // Attach event listeners for each button
    copyTextToClipboard('copy-button-unicode', 'unicode-tab', 'unicodeTextArea');
    copyTextToClipboard('copy-button-roman', 'roman-tab', 'roman-output');
    copyTextToClipboard('copy-button-preeti', 'preeti-tab', 'preetiTextArea2');
});
