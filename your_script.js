
const iframeElement = document.getElementById("stravaactivity");

iframeSelect.addEventListener("change", function() {
  const selectedValue = this.value;
  const baseUrl = "https://strava-embeds.com/activity/";
  const newUrl = baseUrl + selectedValue;
  iframeElement.src = newUrl ;
});


