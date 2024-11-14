import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import CandidateCard from '../components/CandidateCard';
import type { Candidate } from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [results, setResults] = useState<Candidate[]>([]);
  const [currentUser, setCurrentUser] = useState<Candidate>({
    id: null,
    login: null,
    email: null,
    html_url: null,
    name: null,
    bio: null,
    company: null,
    location: null,
    avatar_url: null,
  });
  const [currentIdx, setCurrentIdx] = useState<number>(0);

  const searchForSpecificUser = async (user: string) => {
    if (!user) return;
    const data = await searchGithubUser(user);
    if (data) {
      setCurrentUser({
        id: data.id || null,
        login: data.login || 'Unknown',
        email: data.email || 'N/A',
        html_url: data.html_url || '#',
        name: data.name || 'N/A',
        bio: data.bio || '',
        company: data.company || '',
        location: data.location || '',
        avatar_url: data.avatar_url || '',
      });
    }
  };

  const searchForUsers = async () => {
    const data = await searchGithub();
    setResults(data);

    if (data && data.length > 0) {
      await searchForSpecificUser(data[0].login || '');
    }
  };

  const makeDecision = async (isSelected: boolean) => {
    if (isSelected) {
      let parsedCandidates: Candidate[] = [];
      const savedCandidates = localStorage.getItem('savedCandidates');
      if (savedCandidates) {
        parsedCandidates = JSON.parse(savedCandidates);
      }
      parsedCandidates.push(currentUser);
      localStorage.setItem('savedCandidates', JSON.stringify(parsedCandidates));
    }

    if (currentIdx + 1 < results.length) {
      setCurrentIdx(currentIdx + 1);
      await searchForSpecificUser(results[currentIdx + 1].login || '');
    } else {
      setCurrentIdx(0);
      await searchForUsers();
    }
  };

  useEffect(() => {
    searchForUsers();
  }, []);

  return (
    <>
      <h1>Candidate Search</h1>
      <CandidateCard currentUser={currentUser} makeDecision={makeDecision} />
    </>
  );
};

export default CandidateSearch;
