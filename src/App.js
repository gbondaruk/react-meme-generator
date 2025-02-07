import './App.css';
import { useState } from 'react';

export default function App() {
  // Set intial states
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [memeTemplate, setMemeTemplate] = useState('');

  // Define the meme URL based on user input
  const memeURL = () => {
    if (!topText && !bottomText) {
      return 'https://api.memegen.link/images/doge/create a/meme.png';
    } else {
      return `https://api.memegen.link/images/${memeTemplate}/${topText}/${bottomText}.png`;
    }
  };

  // Download image from URL
  const downloadImage = () => {};

  return (
    <div className="memeGenerator">
      <h1>Meme Generator</h1>

      <label>
        Top Text <br />
        <input
          name="topText"
          placeholder="Add top text"
          value={topText}
          onChange={(event) => {
            setTopText(event.currentTarget.value);
          }}
        />
      </label>

      <label>
        Bottom text <br />
        <input
          name="bottomText"
          placeholder="Add bottom text"
          value={bottomText}
          onChange={(event) => {
            setBottomText(event.currentTarget.value);
          }}
        />
      </label>

      <label>
        Meme template <br />
        <input
          name="memeTemplate"
          placeholder="Choose a template"
          value={memeTemplate}
          onChange={(event) => {
            setMemeTemplate(event.currentTarget.value);
          }}
        />
      </label>

      <h2>Your meme:</h2>

      <img
        src={memeURL(memeTemplate, topText, bottomText)}
        alt="meme template preview"
        data-test-id="meme-image"
      />

      <button>Download</button>
    </div>
  );
}
