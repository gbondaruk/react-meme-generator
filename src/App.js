import './App.css';
import { useEffect, useState } from 'react';

export default function App() {
  // Set intial states
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [template, setTemplate] = useState('doge');
  const [memeURL, setURL] = useState(
    'https://api.memegen.link/images/preview.jpg?template=doge&lines[]=create+a&lines[]=meme',
  );

  return (
    <div className="memeGenerator">
      <h1>Meme Generator</h1>

      <label>
        Top Text <br />
        <input name="topText" placeholder="Add top text" value={topText} />
      </label>

      <label>
        Bottom text <br />
        <input
          name="bottomText"
          placeholder="Add bottom text"
          value={bottomText}
        />
      </label>

      <label>
        Meme template <br />
        <input
          name="memeTemplate"
          placeholder="Choose a template"
          value={template}
        />
      </label>
      <h2>Your meme:</h2>
      <img
        src={memeURL}
        alt="meme template preview"
        data-test-id="meme-image"
      />
    </div>
  );
}
