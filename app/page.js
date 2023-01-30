'use client'
import Boardgame from '@/components/Boardgame';
import Navbar from '@/components/Navbar';
import { useState, useEffect } from 'react';
export default function Home() {

const [searchResult, setSearchResult] = useState('');
const [res, setRes] = useState({ games: [] });

const handleSearch = (result) => {
  setSearchResult(result);
};

const fetchData = async () => {
  if (searchResult) {
    const data = await fetch(
      `https://api.boardgameatlas.com/api/search?name=${searchResult}&client_id=EsdgqvppMg`
    );
    const res = await data.json();
    setRes(res);
  }
};

useEffect(() => {
  fetchData();
}, [searchResult]);

return (
  <main>        <div className='pb-2 shadow sticky top-0 left-0 right-0 mb-3 z-40 bg-white'>
    <Navbar onSearch={handleSearch} />

  </div>
    <div className="grid grid-cols-fluid gap-16">
      {res.games.map((game) => (
        <Boardgame
          key={game.id}
          id={game.id}
          title={game.name}
          poster_path={game.image_url}
        />
      ))}
    </div>
  </main>
);
      }