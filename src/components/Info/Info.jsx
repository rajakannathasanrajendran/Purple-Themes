import './Info.css';

const Info = () => {
    return (
        <div className='info-container'>
            <div className="info-content">
                <div className="mail-container">
                    <a href="mailto:malgudigardentx@gmail.com" className='mail-link'>
                        <i className="fa-solid fa-envelope"></i>
                        <span className='mail'>malgudigardentx@gmail.com</span>
                    </a>
                </div>
                <div className="phone-container">
                    <a href="tel:+8008865253" className='phone-link'>
                        <i className="fa-solid fa-phone"></i>
                        <span className='phone'>+1 (800) 886-5253</span>
                    </a>
                </div>
                {/* <div className="socialMedia">
                    <a href="https://www.instagram.com/a2billinois/" target='_blank'><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://www.facebook.com/A2BIllinois" target='_blank'><i className="fa-brands fa-facebook"></i></a>
                </div> */}
            </div>
        </div>
    )
}

export default Info;