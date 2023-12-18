function loadContent(page) {
    var contentFrame = document.getElementById("content-frame");

    // Remove the 'selected' class from all options
    var options = document.querySelectorAll('.options a');
    options.forEach(function(option) {
        option.classList.remove('selected');
    });

    // Set the 'selected' class for the clicked option
    var clickedOption = document.querySelector('[href="' + page + '"]');
    clickedOption.classList.add('selected');

    // Log for debugging
    console.log("Selected page: ", page);
    console.log("Selected option: ", clickedOption);

    // Load the content
    contentFrame.src = page;
}
