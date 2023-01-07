import React, { useState, useEffect } from 'react';
import twitterApi from '../../utils/twitterApi';
import Tweet from '../Tweet/Tweet';
import './TimeLine.css'

const Timeline = () => {
  const [tweets, setTweets] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const viewportHeight = window.innerHeight

  useEffect(() => {
    twitterApi.getTimeline().then(data => setTweets(data));
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    const filteredTweets = tweets.filter(tweet => {
      let formattedStartDate = new Date(startDate)
      let formattedEndDate = new Date(endDate)
      let tweetDate = tweet.publishedDate
      tweetDate = tweetDate.slice(0, 10);
      tweetDate = new Date(tweetDate)
      console.log("tweet", tweetDate, "start", startDate,"end",endDate)
      return tweetDate >= formattedStartDate && tweetDate <= formattedEndDate;
    });
    setTweets(filteredTweets);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="start-date" className='label p-2'>Start Date:</label>
        <input
          type="date"
          className='date'
          id="start-date"
          value={startDate}
          onChange={event => setStartDate(event.target.value)}
        />
        <label htmlFor="end-date" className='label p-2'>End Date:</label>
        <input
          type="date"
          className='date'
          id="end-date"
          value={endDate}
          onChange={event => setEndDate(event.target.value)}
        />
        <button type="submit" className='filterButton'>Filter</button>
      </form>
      <div className='scrollElem' style={{ overflow: 'scroll', height: viewportHeight, marginTop: "1rem" }}>
        {tweets?.map(tweet => (
          <Tweet key={tweet?.id} tweet={tweet} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
