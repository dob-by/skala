const API_URL = "https://jsonplaceholder.typicode.com/posts";
const postContainer = document.getElementById("postContainer");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pageIndicator = document.getElementById("pageIndicator");
const flexBtn = document.getElementById("flex-view");
const gridBtn = document.getElementById("grid-view");

let allPosts = []; // 전체 데이터 저장
let currentPage = 1; // 현재 페이지 번호
const postsPerPage = 10; // 한 페이지에 보여줄 개수

async function fetchPosts() {
  try {
    const response = await fetch(API_URL);
    allPosts = await response.json();
    renderCards();
  } catch (error) {
    console.error("Error fetching posts:", error);
    postContainer.innerHTML = "<p>Failed to load posts.</p>";
  }
}

// 현재 페이지 렌더링
function renderCards() {
  postContainer.innerHTML = ""; // 기존 내용 삭제

  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = allPosts.slice(startIndex, endIndex); // ✅ 페이지 계산

  currentPosts.forEach((post) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.body}</p>
    `;

    postContainer.appendChild(card);
  });

  if (pageIndicator) {
    pageIndicator.textContent = `Page ${currentPage}`;
  }

  // 버튼 활성/비활성 처리
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = endIndex >= allPosts.length;
}

prevBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    renderCards();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentPage * postsPerPage < allPosts.length) {
    currentPage++;
    renderCards();
  }
});

flexBtn.addEventListener("click", () => {
  postContainer.classList.remove("grid-view");
  postContainer.classList.add("flex-view");
});

gridBtn.addEventListener("click", () => {
  postContainer.classList.remove("flex-view");
  postContainer.classList.add("grid-view");
});

fetchPosts();
