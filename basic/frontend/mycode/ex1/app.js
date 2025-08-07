const API_URL = "https://jsonplaceholder.typicode.com/posts";
const POSTS_PER_PAGE = 10;

let currentPage = 1;
let posts = [];
let currentView = "flex"; // or "grid"

const postContainer = document.getElementById("postContainer");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pageIndicator = document.getElementById("pageIndicator");

document.getElementById("flexView").addEventListener("click", () => {
  currentView = "flex";
  postContainer.classList.remove("grid-view");
  postContainer.classList.add("flex-view");
  renderPosts();
});

document.getElementById("gridView").addEventListener("click", () => {
  currentView = "grid";
  postContainer.classList.remove("flex-view");
  postContainer.classList.add("grid-view");
  renderPosts();
});

prevBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    renderPosts();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentPage < Math.ceil(posts.length / POSTS_PER_PAGE)) {
    currentPage++;
    renderPosts();
  }
});

function renderPosts() {
  postContainer.innerHTML = "";
  pageIndicator.textContent = `Page ${currentPage}`;

  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;
  const currentPosts = posts.slice(start, end);

  currentPosts.forEach((post) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.body}</p>
    `;
    postContainer.appendChild(card);
  });
}

async function fetchPosts() {
  try {
    const res = await fetch(API_URL);
    posts = await res.json();
    renderPosts();
  } catch (err) {
    console.error("Error fetching posts:", err);
    postContainer.innerHTML = "<p>Failed to load posts.</p>";
  }
}

fetchPosts();
