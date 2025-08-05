// src/components/URLShortener.js
import React, { useState } from "react";

const URLShortener = () => {
  const [inputFields, setInputFields] = useState([
    { url: "", expiry: "", shortcode: "" },
    { url: "", expiry: "", shortcode: "" },
    { url: "", expiry: "", shortcode: "" },
    { url: "", expiry: "", shortcode: "" },
    { url: "", expiry: "", shortcode: "" },
  ]);

  const [shortenedURLs, setShortenedURLs] = useState([]);

  const handleChange = (index, field, value) => {
    const newFields = [...inputFields];
    newFields[index][field] = value;
    setInputFields(newFields);
  };

  const handleShorten = () => {
    const generatedURLs = inputFields.map((field) => {
      const shortCode = field.shortcode || Math.random().toString(36).substring(2, 7);
      return {
        originalUrl: field.url,
        expiry: field.expiry || "N/A",
        shortUrl: `http://short.ly/${shortCode}`,
      };
    });

    setShortenedURLs(generatedURLs);
  };

  return (
    <div>
      <form>
        {inputFields.map((field, index) => (
          <div key={index}>
            <h3>Url Data</h3>
            <input
              type="text"
              placeholder="Original URL"
              value={field.url}
              onChange={(e) => handleChange(index, "url", e.target.value)}
            />
            <input
              type="number"
              placeholder="Expiry (min)"
              value={field.expiry}
              onChange={(e) => handleChange(index, "expiry", e.target.value)}
            />
            <input
              type="text"
              placeholder="Custom Shortcode"
              value={field.shortcode}
              onChange={(e) => handleChange(index, "shortcode", e.target.value)}
            />
          </div>
        ))}
        <button type="button" onClick={handleShorten}>SHORTEN URLS</button>
      </form>

      <h3>Shortened URLs</h3>
      {shortenedURLs.map((item, index) => (
        <div key={index}>
          <p><strong>Short URL:</strong> <a href={item.shortUrl} target="_blank" rel="noopener noreferrer">{item.shortUrl}</a></p>
          <p><strong>Original:</strong> {item.originalUrl}</p>
          <p><strong>Expires in:</strong> {item.expiry} min</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default URLShortener;
