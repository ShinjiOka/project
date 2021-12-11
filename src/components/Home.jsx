import React from 'react';

function Home(props) {
    console.log(props);
    const {history} = props;
    return (
        <div>
            <h1>Home</h1>
            <h2 onClick={() => {
                history.goBack();
            }}>history</h2>
        </div>
    )
}

export default Home;