import '../styles/Activity.css';
import React from 'react';

export default function NumberInfo() {
    const [activity, setActivity] = React.useState({})
    const [count, setCount] = React.useState(0)

    React.useEffect(function() {
        fetch("http://www.boredapi.com/api/activity")
            .then(res => res.json())
            .then(data => setActivity(data))
   }, [count])

   function handleClick() {
    setCount(prevCount => prevCount +1)
   }


    return (
        <div className='activity-box'>
            <div className="activity-info">
                <h1>{activity.activity}</h1>
                <div className='activity-description'>
                    <p>Type: <span>{activity.type}</span></p>
                    <p>Participants: <span>{activity.participants}</span></p>
                    <p>Price: <span>{activity.price} / 1</span></p>
                </div>
                <button className='next-btn' onClick={handleClick}>Next</button>
            </div>
        </div>
    )
}