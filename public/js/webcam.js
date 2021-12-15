let video = document.getElementById("webcam");
navigator.mediaDevices
  .getUserMedia({ video: true })
  .then(function (s) {
    video.srcObject = s;
    console.log(s);
    var ifConnected = window.navigator.onLine;
    if (ifConnected) {
      console.log("Connection available");
    }
    document.getElementById("continue").style.display = "inline";
    document.getElementById("permission-success").style.display = "";
    document.getElementById("permission-error").style.display = "none";
  })
  .catch(function (err) {
    console.log(err);
  });
