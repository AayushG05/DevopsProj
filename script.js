const posts = [
    { title: "Getting Started with Web Development", date: "March 10, 2025", summary: "Learn the basics of HTML, CSS, and JavaScript to build your first website." },
    { title: "Why JavaScript is Essential for Modern Web Apps", date: "March 5, 2025", summary: "JavaScript powers interactive and dynamic websites. Discover why it's crucial." },
    { title: "CSS Tips and Tricks for Beautiful Web Design", date: "February 28, 2025", summary: "Enhance your website’s appearance with these CSS techniques." }
];

document.addEventListener("DOMContentLoaded", () => {
    const featuredPost = document.getElementById("featured-post");
    featuredPost.innerHTML = `<h3>${posts[0].title}</h3><p>${posts[0].date}</p><p>${posts[0].summary}</p>`;

    const recentPostsContainer = document.getElementById("recent-posts");
    posts.slice(1).forEach(post => {
        const postDiv = document.createElement("div");
        postDiv.classList.add("post");
        postDiv.innerHTML = `<h3>${post.title}</h3><p>${post.date}</p><p>${post.summary}</p>`;
        recentPostsContainer.appendChild(postDiv);
    });
});