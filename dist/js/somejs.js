var mySwipergo = app.swiper('.swiper-container8', {
  pagination: '.swiper-pagination',
  paginationHide: false,
  paginationClickable: true,
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
});   

function setTab(num) {
var i;
for (i = 1; i <= 2; i++) {
    if (i == num) {
        document.getElementById("d" + i).style.display = "block"
}
else {
    document.getElementById("d" + i).style.display = "none"
        }
    }

}
