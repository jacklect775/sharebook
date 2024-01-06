<!-- main script -->
function searchList() {
  var input, filter, list, items, i, txtValue;
  input = document.getElementById("searchInput");
  filter = input.value.trim().toLowerCase();
  list = document.getElementById("ebook-list");
  items = list.getElementsByTagName("li");
  var noResults = true;

  for (i = 0; i < items.length; i++) {
    txtValue = items[i].querySelector(".description-container h3").textContent.toLowerCase();
    if (txtValue.includes(filter)) {
      items[i].style.display = "block";
      noResults = false;
    } else {
      items[i].style.display = "none";
    }
  }

  var noResultMessage = document.getElementById("noResultMessage");
  noResultMessage.style.display = noResults ? "block" : "none";
}

<!-- Ngăn chặn sự kiện khi nhấn các tổ hợp phím Ctrl + U, Ctrl + S, Ctrl + I, Ctrl + C -->

document.addEventListener("keydown", function(event) {
    // Kiểm tra xem người dùng có đang nhấn tổ hợp phím Ctrl + S, Ctrl + U hoặc Ctrl + I không
    if ((event.ctrlKey || event.metaKey) && (event.key === "s" || event.key === "u" || event.key === "i")) {
        // Chuyển trang web đến link được chỉ định trước
        window.location.href = "https://jacklect775.github.io/sharebook/"; // Thay đổi URL theo đúng link bạn muốn chuyển đến
        event.preventDefault(); // Ngăn ngừng xảy ra sau khi thực hiện hành động
    }
});

<!-- Sap xep thep thu tu tu a den z -->
<script>
    const myList = document.querySelector('#ebook-list');
    const listItems = Array.from(myList.children);
  
    listItems.sort((a, b) => {
      if (a.textContent < b.textContent) {
        return -1;
      } else if (a.textContent > b.textContent) {
        return 1;
      } else {
        return 0;
      }
    });
  
    listItems.forEach((item) => {
      myList.appendChild(item);
    });
</script>
