window.addEventListener("DOMContentLoaded", function() {
  loadBookInfo();
});

document.getElementById("saveButton").addEventListener("click", saveBookInfo);

function saveBookInfo() {
  var bookTitle = document.getElementById("bookTitle").value;
  var authorName = document.getElementById("authorName").value;
  var bookSummary = document.getElementById("bookSummary").value;
  var bookInfo = {
    title: bookTitle,
    author: authorName,
    summary: bookSummary
  };

  localStorage.setItem("bookInfo", JSON.stringify(bookInfo));

  console.log("책 정보가 저장되었습니다.");
}

function loadBookInfo() {
  var savedBookInfo = localStorage.getItem("bookInfo");
  if (savedBookInfo) {
    var bookInfo = JSON.parse(savedBookInfo);
    document.getElementById("bookTitle").value = bookInfo.title;
    document.getElementById("authorName").value = bookInfo.author;
    document.getElementById("bookSummary").value = bookInfo.summary;

    document.getElementById("titleOutput").textContent = "책 제목: " + bookInfo.title;
    document.getElementById("authorOutput").textContent = "작가: " + bookInfo.author;
    document.getElementById("summaryOutput").textContent = "줄거리: " + bookInfo.summary;
  }
}
