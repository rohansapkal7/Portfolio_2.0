import Me from '../../imgs/BraveBoy.webp';

export default function Namecard() {

  const popularity = '4.6k', likes = '9.7k'

  return (
    <div className="intro-section">
      <div className="username-holder">
        <p className="username">
          Rohan Sapkal
          <i className="fa-solid fa-circle-check"></i>
        </p>
        <i className="fa-solid fa-ellipsis-vertical"></i>
      </div>

      <p className="user-title">WebDev <br />Explorer</p>

      <p className="user-summary">Creative web developer focused on building user-friendly solutions and efficient workflows. Always learning and solving problems to deliver meaningful results.</p>

      <p className="stats">
        <img src="/icons/star.png" alt="star png" />
        {popularity}
      </p>

      <p className="stats">
        <img src="/icons/heart.png" alt="heart png" />
        {likes}
      </p>

      <img className='profile-pic' src={Me} alt="Happy Boy" />
    </div>
  )
}