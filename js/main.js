window.onload = function() {
  document.getElementById("scrollTop").onclick = function(){
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }
}

// function scrollToTop() {
//   window.scrollTo({
//     top: 0,
//     behavior: 'smooth'
//   });
// }

// var button = document.getElementById("scrollTop");
//     button.addEventListener("click", scrollToTop);

{/* <button id="top">top</button>
  <script>
    // 스크롤을 화면 상단으로 올리는 함수
    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }

    // 버튼 클릭 이벤트에 scrollToTop 함수 연결
    var button = document.getElementById("top");
    button.addEventListener("click", scrollToTop);
  </script> */}

