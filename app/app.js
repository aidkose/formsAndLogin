function changePage() {
  let hash = window.location.hash;
  let hashID = hash.replace("#", "");
  if (hashID != "") {
    $.get(`pages/${hashID}/${hashID}.html`, function (data) {
      $("#app").html(data);
      submitListener();
    });
  } else {
    $.get(`pages/create/create.html`, function (data) {
      $("#app").html(data);
      submitListener();
    });
  }
}

function initHashListener() {
  $(window).on("hashchange", changePage);
  changePage();
}

function submitListener() {
  $("#app #submit").click(function (e) {
    e.preventDefault();
    let recordName = $("#recName").val();
    let year = $("#year").val();
    let artist = $("#artist").val();
    let genre = $("#genre").val();
    let label = $("#label").val();
    let price = $("#price").val();
    let speed = $("#speed").val();
    let country = $("#country").val();
    let code = $("#code").val();
    let track = $("#track").val();
    console.log(
      "inputs " +
        recordName +
        " " +
        year +
        " " +
        artist +
        " " +
        genre +
        " " +
        label +
        " " +
        price +
        " " +
        speed +
        " " +
        country +
        " " +
        code +
        " " +
        track
    );
  });

  // $("#edit").click(function (e) {
  //   e.preventDefault();
  //   let userObj = {
  //     recordName: "Eel",
  //     year: "1978",
  //   };

  //   console.log(userObj);
  //   $("#recName").val(userObj.recordName);
  //   $("#year").val(userObj.year);
  // });
}

$(document).ready(function () {
  initHashListener();
  submitListener();
});
