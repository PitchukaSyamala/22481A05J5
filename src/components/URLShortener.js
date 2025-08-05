import React, { useState } from "react";

function URLShortener() {
  const [urls, setUrls] = useState(["", "", "", "", ""]);
  const [shortenedUrls, setShortenedUrls] = useState(["", "", "", "", ""]);

  const handleChange = (index, value) => {
    const newUrls = [...urls];
    newUrls[index] = value;
    setUrls(newUrls);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const results = [];

    for (let i = 0; i < urls.length; i++) {
      const url = urls[i];
      if (url.trim() === "") {
        results.push("");
        continue;
      }
      try {
        const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${encodeURIComponent(url)}`);
        const data = await response.json();
        if (data.ok) {
          results.push(data.result.full_short_link);
        } else {
          results.push("Error shortening URL");
        }
      } catch (error) {
        results.push("Error shortening URL");
      }
    }

    setShortenedUrls(results);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {urls.map((url, index) => (
          <input
            key={index}
            type="text"
            value={url}
            onChange={(e) => handleChange(index, e.target.value)}
            placeholder={`Enter URL #${index + 1}`}
          />
        ))}
        <button type="submit">Shorten URLs</button>
      </form>
      <div className="shortened-urls">
        {shortenedUrls.map((shortUrl, index) =>
          shortUrl ? (
            <p key={index}>
              <strong>Original:</strong> {urls[index]}<br />
              <strong>Shortened:</strong>{" "}
              <a href={shortUrl} target="_blank" rel="noopener noreferrer">
                {shortUrl}
              </a>
            </p>
          ) : null
        )}
      </div>
    </div>
  );
}

export default URLShortener;
