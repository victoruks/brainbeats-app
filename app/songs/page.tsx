useEffect(() => {
  const fetchSongs = async () => {
    try {
      const snapshot = await getDocs(collection(db, "songs"));

      const list: Song[] = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as Song[];

      console.log("Fetched Songs:", list); // 👈 ADD THIS LINE

      setSongs(list);
    } catch (error) {
      console.error("Error fetching songs:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchSongs();
}, []);
