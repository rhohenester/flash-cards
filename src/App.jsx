import React, { useState, useEffect } from 'react';
import enData from './content/iso-iec-27001.json';
import deData from './content/iso-iec-27001.json';

function App() {
  const [data, setData] = useState([]);
  const [content, setContent] = useState(null);
  const [language, setLanguage] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Identify language
      if (enData && deData) {
        setLanguage('en');
        setData(enData);
      } else if (enData) {
        setLanguage('de');
        setData(deData);
      }
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  return (
    <div>
      <nav>
        <ul>
          {data?.map((item, index) => (
            <li key={index}>
              <button onClick={() => setContent(item)}>{item.title}</button>
            </li>
          ))}
        </ul>
      </nav>
      {content && <Content content={content} />}
    </div>
  );
}

function Content({ content }) {
  return (
    <div>
      <h2>{content.title}</h2>
      <p>{content.description}</p>
    </div>
  );
}

export default App;
