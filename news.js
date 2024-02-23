//* News Page Script 

// Function to fetch and display news from the RSS feed
async function fetchNews() {
    const rssFeedURL = "https://timesofindia.indiatimes.com/rssfeeds/66949542.cms";
    const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${rssFeedURL}`);
    const data = await response.json();

    const newsContainer = document.getElementById("news-container");

    if (data.status === "ok" && data.items.length > 0) {
        data.items.forEach((item) => {
            const article = document.createElement("div");
            article.classList.add("news-article");

            const title = document.createElement("h2");
            title.textContent = item.title;

            const image = document.createElement("img");
            image.classList.add("news-image");
            image.src = item.enclosure.link; // Assuming the image is in the "enclosure" field

            const description = document.createElement("p");
            description.classList.add("news-description");
            description.textContent = item.description.replace(/<[^>]*>/g, ''); // Remove HTML tags from description

            const link = document.createElement("a");
            link.href = item.link;
            link.textContent = "Read more";
            link.classList.add("read-more");
            link.target = "_blank"; // Open link in a new tab

            article.appendChild(title);
            article.appendChild(image);
            article.appendChild(description);
            article.appendChild(link);

            newsContainer.appendChild(article);
        });
    } else {
        newsContainer.textContent = "Unable to fetch news.";
    }
}

// Fetch and display news on page load
window.addEventListener("load", fetchNews);