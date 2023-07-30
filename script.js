$(function () {
  // Save User Input to Local Storage
  $("button").click(function () {
    var hourId = $(this).closest(".time-block").attr("id");
    var description = $(this).siblings(".description").val();
    localStorage.setItem(hourId, description);
  });

  //Updates the colors based on Past, Present, Future Classes
  function updateHours () {
    var currentHour = dayjs().hour();

    $(".time-block").each(function () {
      var hourId = $(this).attr("id").replace("hour-", "")
      var hour = parseInt(hourId);

      if (hour < currentHour) {
        $(this).addClass("past").removeClass("present future");
      } else if (hour === currentHour) {
        $(this).addClass("present").removeClass("past future");
      } else {
        $(this).addClass("future").removeClass("past present");
      }
    });

  }

  // Set the info from Local Storage to Textareas
  function loadSavedData() {
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

  //Runs the update hours upon browser load
  updateHours();

  //Loads the info from LocalStorage
  loadSavedData();

});
