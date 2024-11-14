import { useState, useEffect } from 'react';
import './SavedCandidates.css';

type Candidate = {
  login: string;
  avatar_url: string;
  location: string | null;
  email: string | null;
  html_url: string;
  company: string | null;
};

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  const clearSavedCandidates = () => {
    localStorage.removeItem('savedCandidates'); // Clear from local storage
    setSavedCandidates([]); // Update the state to reflect the change
  };

  useEffect(() => {
    // Retrieve saved candidates from local storage
    const candidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    console.log("saved candidates from local storage",candidates);
    setSavedCandidates(candidates);
  }, []);

  return (
    <div className="saved-candidates-container">
      <h1>Saved Candidates</h1>
      {savedCandidates.length > 0 ? (
        <>
          <button onClick={clearSavedCandidates}>Clear All Saved Candidates</button>
          <ul>
            {savedCandidates.map((candidate) => (
              <li key={candidate.login} className="candidate-card">
                <img src={candidate.avatar_url} alt={candidate.login} className="candidate-avatar" />
                <div className="candidate-info">
                  <p>Name: {candidate.login}</p>
                  <p>Location: {candidate.location || "N/A"}</p>
                  <p>Email: {candidate.email || "N/A"}</p>
                  <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">GitHub Profile</a>
                  <p>Company: {candidate.company || "N/A"}</p>
                </div>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>No saved candidates available.</p>
      )}
    </div>
  );
  
};

export default SavedCandidates;
