import './Info.css'

import AvatarImg from'../../assets/avatar-jessica.jpeg'

const Info = () => {
  return (
    <div className='imgwrapperdiv'>
      <div className='img'>
      <img src={AvatarImg}/>
      </div>

      <div className='text'>
        <h1>jessica randall</h1>
        <label> London, United Kingdom</label>
      </div>
      
    </div>
  );
}

export default Info;




