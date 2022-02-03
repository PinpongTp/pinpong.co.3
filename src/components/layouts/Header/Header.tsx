import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons'

function Header() {
    return (
        <div className="d-flex justify-content-between align-items-end">
            <div className=''>
                <h1>Pinpong.co</h1>
            </div>
            {/* <div className="social">
                <FontAwesomeIcon className='me-1' icon={faGithub} />
                <FontAwesomeIcon icon={faFacebook} />
            </div> */}
        </div>
    )
}

export default Header
