'use client'
import Boardgame from '@/components/Boardgame';
import React, { useState } from 'react';
export default async function Navbar({onSearch}) {

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
  <main>
    <Navbar onSearch={handleSearch} />
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