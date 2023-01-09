import * as FaIcons from 'react-icons/fa';

function ComingSoon() {
  return (
    <div className="comingSoon-container">
      <div className="sign">
        <div className="sign-icon">
            <FaIcons.FaTools/>
        </div>
        <h1>COMING SOON!</h1>
        <img src="src/assets/img/confused-dog.png" alt="Confused pug" className='sign-img'/>
      </div>
    </div>
  );
}

export default ComingSoon;
