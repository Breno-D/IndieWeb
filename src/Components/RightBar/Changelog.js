import React from 'react';
import changelogData from './changelog.json'; 
import './Changelog.css';
// ou importe diretamente se estiver na pasta public via fetch durante o build

export default function Changelog() {
  return (
    <div className='changelog-box'>
      <h3>Changelog</h3>
      {changelogData.map((release) => (
        <div key={release.version} className='release-div'>
          <h2>
            v{release.version} <span className='release-date'>({release.date})</span>
          </h2>
          <ul>
            {release.changes.map((change, index) => (
              <li key={index}>
                <strong>{change.type}:</strong> {change.message}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
