// Video data structure
const initialVideos = [
    {
        id: 1,
        title: "React Fundamentals",
        videoPath: "", // Path to video file or URL
        progress: 0,
        notes: [],
        screenshots: [],
        lastWatched: null,
        completed: false,
        timestamp: 0
    }
];

// Main App Component
function App() {
    const [videos, setVideos] = React.useState(() => {
        const savedVideos = localStorage.getItem('videos');
        return savedVideos ? JSON.parse(savedVideos) : initialVideos;
    });

    React.useEffect(() => {
        localStorage.setItem('videos', JSON.stringify(videos));
    }, [videos]);

    const addVideo = (title, videoPath) => {
        const newVideo = {
            id: Date.now(),
            title,
            videoPath,
            progress: 0,
            notes: [],
            screenshots: [],
            lastWatched: null,
            completed: false,
            timestamp: 0
        };
        setVideos([...videos, newVideo]);
    };

    const updateProgress = (id, progress) => {
        setVideos(videos.map(video => 
            video.id === id 
                ? {...video, progress, lastWatched: new Date().toISOString()} 
                : video
        ));
    };

    const addNote = (id, note) => {
        setVideos(videos.map(video =>
            video.id === id
                ? {...video, notes: [...video.notes, { id: Date.now(), text: note, date: new Date().toISOString() }]}
                : video
        ));
    };

    const addScreenshot = (id, imageUrl) => {
        setVideos(videos.map(video =>
            video.id === id
                ? {...video, screenshots: [...video.screenshots, { id: Date.now(), url: imageUrl }]}
                : video
        ));
    };

    return (
        <div className="container">
            <Header onAddVideo={addVideo} />
            <VideoList 
                videos={videos}
                onUpdateProgress={updateProgress}
                onAddNote={addNote}
                onAddScreenshot={addScreenshot}
            />
        </div>
    );
}

// Header Component
function Header({ onAddVideo }) {
    const [newVideoTitle, setNewVideoTitle] = React.useState('');
    const [videoPath, setVideoPath] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newVideoTitle.trim() && videoPath.trim()) {
            onAddVideo(newVideoTitle.trim(), videoPath.trim());
            setNewVideoTitle('');
            setVideoPath('');
        }
    };

    return (
        <header className="header">
            <h1>React Learning Progress Tracker</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newVideoTitle}
                    onChange={(e) => setNewVideoTitle(e.target.value)}
                    placeholder="Enter video title"
                    className="notes-input"
                />
                <input
                    type="text"
                    value={videoPath}
                    onChange={(e) => setVideoPath(e.target.value)}
                    placeholder="Enter video file path or URL"
                    className="notes-input"
                />
                <button type="submit" className="button">Add Video</button>
            </form>
        </header>
    );
}

// Video List Component
function VideoList({ videos, onUpdateProgress, onAddNote, onAddScreenshot }) {
    return (
        <div>
            {videos.map(video => (
                <VideoCard
                    key={video.id}
                    video={video}
                    onUpdateProgress={onUpdateProgress}
                    onAddNote={onAddNote}
                    onAddScreenshot={onAddScreenshot}
                />
            ))}
        </div>
    );
}

// Video Card Component
function VideoCard({ video, onUpdateProgress, onAddNote, onAddScreenshot }) {
    const [note, setNote] = React.useState('');
    
    const handleNoteSubmit = (e) => {
        e.preventDefault();
        if (note.trim()) {
            onAddNote(video.id, note.trim());
            setNote('');
        }
    };

    const handleScreenshotUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                onAddScreenshot(video.id, reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const openVideo = () => {
        if (video.videoPath) {
            // If it's a URL, open in new tab
            if (video.videoPath.startsWith('http')) {
                window.open(video.videoPath, '_blank');
            } else {
                // If it's a local file, try to open it with the default video player
                window.open('file:///' + video.videoPath, '_blank');
            }
        }
    };

    return (
        <div className="video-card">
            <h3 className="video-title">{video.title}</h3>
            <p className="video-path">{video.videoPath}</p>
            <button onClick={openVideo} className="button">Open Video</button>
            
            <div className="progress-bar">
                <div 
                    className="progress-fill"
                    style={{ width: `${video.progress}%` }}
                ></div>
            </div>
            
            <input
                type="range"
                min="0"
                max="100"
                value={video.progress}
                onChange={(e) => onUpdateProgress(video.id, parseInt(e.target.value))}
            />
            
            <div className="notes-section">
                <form onSubmit={handleNoteSubmit}>
                    <input
                        type="text"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        placeholder="Add a note..."
                        className="notes-input"
                    />
                    <button type="submit" className="button">Add Note</button>
                </form>
                
                <div>
                    {video.notes.map(note => (
                        <div key={note.id}>
                            <p>{note.text}</p>
                            <small>{new Date(note.date).toLocaleString()}</small>
                        </div>
                    ))}
                </div>
            </div>
            
            <div>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleScreenshotUpload}
                />
                
                <div className="screenshot-gallery">
                    {video.screenshots.map(screenshot => (
                        <img
                            key={screenshot.id}
                            src={screenshot.url}
                            alt="Screenshot"
                            className="screenshot"
                        />
                    ))}
                </div>
            </div>
            
            <p>Last watched: {video.lastWatched ? new Date(video.lastWatched).toLocaleString() : 'Never'}</p>
        </div>
    );
}

// Render the app
ReactDOM.render(<App />, document.getElementById('root'));
