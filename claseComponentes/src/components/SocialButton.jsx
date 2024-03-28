import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const SocialButton = () => {
    return (
        <div>
            <a href="">
                <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="">
                <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="">
                <FontAwesomeIcon icon={faInstagram} />
            </a>
            {/* Agrega más iconos según sea necesario */}
        </div>
    );
};
export default SocialButton;