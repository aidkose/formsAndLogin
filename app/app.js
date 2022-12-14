function changePage() {
  let hash = window.location.hash;
  let hashID = hash.replace("#", "");
  if (hashID != "") {
    $.get(`pages/${hashID}/${hashID}.html`, function (data) {
      $("#app").html(data);
      submitListener();
    });
  } else {
    $.get(`pages/home/home.html`, function (data) {
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
  $("#submit").click(function (e) {
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

  $("#edit").click(function (e) {
    e.preventDefault();
    let userObj = {
      recordName: "Leviathan",
      year: "2004",
      artist: "Mastodon",
      genre: "Metal",
      label: "Relapse",
      price: "29.87",
      speed: "33.3rpm",
      country: "USA",
      code: "017285026",
      track: "10",
    };
    console.log(userObj);
    $("#recName").val(userObj.recordName);
    $("#year").val(userObj.year);
    $("#artist").val(userObj.artist);
    $("#genre").val(userObj.genre);
    $("#label").val(userObj.label);
    $("#price").val(userObj.price);
    $("#speed").val(userObj.speed);
    $("#country").val(userObj.country);
    $("#code").val(userObj.code);
    $("#track").val(userObj.track);
  });

  $("#logSub").click(function (e) {
    let email = $("#email").val();
    let password = $("#password").val();
    console.log("inputs " + email + " " + password);
  });

  $("#signSub").click(function (e) {
    let email = $("#email").val();
    let password = $("#password").val();
    let fName = $("#fName").val();
    let lName = $("#lName").val();
    console.log("inputs " + email + " " + password + " " + fName + " " + lName);
  });
}

$(document).ready(function () {
  initHashListener();
  submitListener();
});
