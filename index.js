const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const postsEl = document.querySelector(".posts");

postsEl.addEventListener("dblclick", function (e) {
  if (e.target.tagName !== "IMG") {
    const likesEl = e.target.querySelector(".likes");
    const likesCountEl = e.target.querySelector(".likes-count");

    const currentLikes = Number(likesCountEl.textContent);
    likesCountEl.textContent = currentLikes + 1;

    likesEl.classList.add("scaled");

    likesEl.addEventListener("transitionend", () => {
      likesEl.classList.remove("scaled");
    });
  }
});

window.addEventListener("load", function () {
  let html = "";

  for (let i = 0; i < posts.length; i++) {
    html += createPostEl(posts[i]);
  }

  postsEl.innerHTML = html;
});

function createPostEl(post) {
  const postEl = `
    <article class="post">
      <div class="post-creator">
        <img class="avatar" src="${post.avatar}" alt="" />
        <div>
          <p class="text-bold">${post.name}</p>
          <p class="text-small">${post.location}</p>
        </div>
      </div>
      <img src="${post.post}" alt="" />
      <div class="post-details">
        <div class="post-icons">
          <img src="images/icon-heart.png" alt="" />
          <img src="images/icon-comment.png" alt="" />
          <img src="images/icon-dm.png" alt="" />
        </div>
        <p class="likes text-bold">
          <span class="likes-count">${post.likes}</span> likes
        </p>
        <p>
          <span class="text-bold">${post.username}</span> ${post.comment}
        </p>
      </div>
    </article>
  `;

  return postEl;
}
