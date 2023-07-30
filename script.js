$(function () {
  // Save User Input to Local Storage
  $("button").click(function () {
    var hourId = $(this).closest(".time-block").attr("id");
    var description = $(this).siblings(".description").val();
    localStorage.setItem(hourId, description);
  });

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  // Set the info from Local Storage to Textareas
  function loadUserInputFromLocalStorage() {
    $(".time-block").each(function () {
      var hourId = $(this).attr("id");
      var description = localStorage.getItem(hourId);

      if (description !== null) {
        $(this).find(".description").val(description);
      }
    });
  }

  // Sets te current Date in the <p> in header
  var now = dayjs(new Date());
  $('#currentDay').text(now.format('MMM D, YYYY'));

  //loads the info from LocalStorage
  loadUserInputFromLocalStorage();

});
