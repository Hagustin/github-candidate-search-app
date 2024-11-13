import { useState, useEffect } from 'react';
import { searchGithub } from '../api/API';

type Candidate = {
  login: string;
  avatar_url: string;
  location: string | null;
  email: string | null;
  html_url: string;
  company: string | null;
};

const CandidateSearch = () => {
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [loading, setLoading] = useState(true);

  const loadNewCandidate = async () => {
    setLoading(true);
    const candidates = await searchGithub();
    if (candidates && candidates.length > 0) {
      setCandidate(candidates[0]);
    }
    setLoading(false);
  };

  const acceptCandidate = () => {
    if (candidate) {
      const savedCandidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
      savedCandidates.push(candidate);
      localStorage.setItem('savedCandidates', JSON.stringify(savedCandidates));
      loadNewCandidate(); // Load the next candidate after saving
    }
  };

  useEffect(() => {
    loadNewCandidate();
  }, []);

  return (
    <div>
      <h1>Candidate Search</h1>
      {loading ? (
        <p>Loading candidate...</p>
      ) : candidate ? (
        <div>
          <img src={candidate.avatar_url} alt={candidate.login} width={100} />
          <p>Name: {candidate.login}</p>
          <p>Location: {candidate.location || "N/A"}</p>
          <p>Email: {candidate.email || "N/A"}</p>
          <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">GitHub Profile</a>
          <p>Company: {candidate.company || "N/A"}</p>
          <button onClick={acceptCandidate}>Accept</button>
          <button onClick={loadNewCandidate}>Skip</button>
        </div>
      ) : (
        <p>No more candidates available</p>
      )}
    </div>
  );
};

export default CandidateSearch;
