import React from 'react';

function About(props) {
    const {match} = props;
    console.log(match);
    return (
        <div>
            <h1>About</h1>
        </div>
    )
}

export default About;