import { useState } from "react";
import axios from "axios";
import "./App.css";

interface Song {
  id: number;
  name: string;
}

function App() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [songs, setSongs] = useState<Song[]>([]);

  const fetchSongs = async () => {
    try {
      const response = await axios.get<{ result: { songs: Song[] } }>(
        `${apiUrl}/search?keywords=%E6%B5%B7%E9%98%94%E5%A4%A9%E7%A9%BA`
      );
      setSongs(
        response.data.result.songs.map((song) => ({
          id: song.id,
          name: song.name,
        }))
      );
    } catch (error) {
      console.error("Error fetching songs:", error);
    }
  };

  return (
    <>
      <h1>Global Music App</h1>

      <button onClick={fetchSongs}>Search</button>

      <div>
        {songs.map((song) => (
          <div key={song.id}>
            <h2>{song.id}</h2>
            <h2>{song.name}</h2>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
