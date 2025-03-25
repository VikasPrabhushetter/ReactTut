import React, { useState, useEffect } from 'react';
import './FetchDataTabs.css'; // Import the external CSS file
const FetchDataTabs = () => {
    const [activeTab, setActiveTab] = useState('users');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const urls = {
        users: 'https://jsonplaceholder.typicode.com/users',
        posts: 'https://jsonplaceholder.typicode.com/posts',
        comments: 'https://jsonplaceholder.typicode.com/comments',
        albums: 'https://jsonplaceholder.typicode.com/albums'
    }

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            setData([]);

            try {
                const response = await fetch(urls[activeTab]);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [activeTab]);

    return (
        <div className="container">
            <div className="tabs">
                {['users', 'posts', 'comments', 'albums'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={tab === activeTab ? 'tab active' : 'tab'}
                    >
                        {tab.toUpperCase()}
                    </button>
                ))}
            </div>
            {loading && <div className="loading">🔄 Loading...</div>}
            {error && <div className="error">❌ Error: {error}</div>}
            {!loading && !error && (
                <div className="data-list">
                    {data.map((item) => (
                        <div key={item.id} className="data-item">
                            {activeTab === "users" ? <>
                                <h3>{item?.name}</h3>
                                <p>{item?.email}</p>
                                <p>{item?.address?.city}</p>
                            </> : activeTab === "posts" ? <>
                                <h3>{item?.id}</h3>
                                <p>{item?.title}</p>
                            </> : activeTab === "comments" ? <>
                                <h3>{item?.id}</h3>
                                <p>{item?.name}</p>
                                <p>{item?.body}</p>
                            </> : <>
                                <h3>{item?.id}</h3>
                                <p>{item?.title}</p>
                            </>}
                        </div>
                    ))}
                </div>
                // <div style={{ textAlign: "left" }}>
                //     <h3>Raw JSON Response:</h3>
                //     <pre>{JSON.stringify(data, null, 2)}</pre> {/* JSON.stringify(data, replacer, space)  replacer()=["id","User id"] */}
                // </div>
            )}
        </div >
    );
};
export default FetchDataTabs;