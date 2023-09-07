import { useEffect, useState } from 'react';

import styles from './ReposList.module.css';

const ReposList = ({ username }) => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`https://api.github.com/users/${username}/repos`)
        .then(res => res.json())
        .then(resJson => {
            setTimeout(() => {
                setLoading(false);
                setRepos(resJson);
            }, 3000);
        })
    }, [username]);

    return (
        <div className="container">
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <ul className={styles.list}>
                    {repos.map(({ id, name, language, html_url }) => (
                        <li className={styles.listItem} key={id}>
                            <div className={styles.itemName}>
                                <b>Name:</b>
                                {name}
                            </div>
                            <div className={styles.itemLanguage}>
                                <b>Language:</b>
                                {language}
                            </div>
                            <a className={styles.itemLink} href={html_url} target="_blank">View on GitHub</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default ReposList;