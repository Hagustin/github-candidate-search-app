import { useState, useEffect } from 'react';

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

  useEffect(() => {
    // Retrieve saved candidates from local storage
    const candidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    setSavedCandidates(candidates);
  }, []);

  return (
    <div>
      <h1>Saved Candidates</h1>
      {savedCandidates.length > 0 ? (
        <ul>
          {savedCandidates.map((candidate) => (
            <li key={candidate.login}>
              <img src={candidate.avatar_url} alt={candidate.login} width={50} />
              <p>Name: {candidate.login}</p>
              <p>Location: {candidate.location || "N/A"}</p>
              <p>Email: {candidate.email || "N/A"}</p>
              <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">GitHub Profile</a>
              <p>Company: {candidate.company || "N/A"}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No saved candidates available.</p>
      )}
    </div>
  );
};

export default SavedCandidates;
