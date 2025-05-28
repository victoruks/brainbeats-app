"use client";

import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

interface Song {
  id: string;
  title: string;
  url: string;
  subject: string;
  grade: string;
  genre?: string;
}

export default function SongsPage() {
  const [songs, setSongs] = useState<Song[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const snapshot = await getDocs(collection(db, "songs"));
        const list: Song[] = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        })) as Song[];
        setSongs(list);
      } catch (error) {
        console.error("Error fetching songs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSongs();
  }, []);

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">🎧 Brain Beats</h1>

      {loading ? (
        <p>Loading songs...</p>
      ) : songs.length === 0 ? (
        <p>No songs available yet.</p>
      ) : (
        songs.map(song => (
          <div key={song.id} className="mb-8 border-b pb-4">
            <h2 className="text-xl font-semibold">{song.title}</h2>
            <p className="text-sm text-gray-500">
              {song.subject} • Grade {song.grade} {song.genre && `• ${song.genre}`}
            </p>
            <audio controls src={song.url} className="mt-2 w-full" />
          </div>
        ))
      )}
    </main>
  );
}