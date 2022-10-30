function changePage() {
  let hash = window.location.hash;
  let hashID = hash.replace("#", "");
  if (hashID != "") {
    $.get(`pages/${hashID}/${hashID}.html`, function (data) {
      $("#app").html(data);
    });
  } else {
    $.get(`pages/create/create.html`, function (data) {
      $("#app").html(data);
    });
  }
}

function initHashListener() {
  $(window).on("hashchange", changePage);
  changePage();
}

function submitListener() {
  $("input#submit").click(function (e) {
    e.preventDefault();
    let recordName = $("#recName").val();
    let year = $("#year").val();
    console.log("inputs " + recordName + " " + year);
  });

  $("#edit").click(function (e) {
    e.preventDefault();

    let userObj = {
      recordName: "Eel",
      year: "1978",
    };

    console.log(userObj);
    $("#recName").val(userObj.recordName);
    $("#year").val(userObj.year);
    // console.log("inputs " + recordName + " " + year);
  });
}

$(document).ready(function () {
  initHashListener();
  submitListener();
});
