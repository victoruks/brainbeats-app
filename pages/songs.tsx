import { GetServerSideProps } from "next";
import { initializeApp, getApps } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
const db = getFirestore(app);

interface Song {
  id: string;
  title: string;
  url: string;
  artist?: string;
  genre?: string;
  subject?: string;
  grade?: string;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const snapshot = await getDocs(collection(db, "songs"));
  const songs: Song[] = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Song[];

  return { props: { songs } };
};

export default function SongsPage({ songs }: { songs: Song[] }) {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">🎧 Brain Beats</h1>

      {songs.length === 0 ? (
        <p>No songs available yet.</p>
      ) : (
        songs.map((song) => (
          <div key={song.id} className="mb-8 border-b pb-4">
            <h2 className="text-xl font-semibold">{song.title}</h2>
            <p className="text-sm text-gray-500">
              {song.subject && `${song.subject} • `}
              {song.grade && `Grade ${song.grade} • `}
              {song.genre && song.genre}
            </p>
            <audio controls src={song.url} className="mt-2 w-full" />
          </div>
        ))
      )}
    </main>
  );
}
