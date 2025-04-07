const scrollToTopBtn = document.getElementById("scrollToTop");
const scrollToBottomBtn = document.getElementById("scrollToBottom");

// 상단으로 스크롤 함수
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// 하단으로 스크롤 함수
function scrollToBottom() {
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
}

// 버튼 클릭 이벤트 추가
scrollToTopBtn.addEventListener("click", scrollToTop);
scrollToBottomBtn.addEventListener("click", scrollToBottom);