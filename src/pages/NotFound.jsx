import React from 'react';
import NotFoundLogo from '../assets/404.png';
import '../styles/_404.scss';

function NotFound(props) {
    return (
        <section>
            <div class="custom-container">
                <div class="custom-wrapper">
                    <h2 class="custom-heading">Page Not Found :(</h2>
                    <p class="custom-paragraph">Oops! 😖 The requested URL was not found on this server.</p>
                    <a href="/" class="custom-button">Back to home</a>
                    <div class="custom-image">
                    <img src={NotFoundLogo} alt="Error Illustration" class="custom-img" width="500" />
                    </div>
                </div>
            </div>

        </section>
    );
}

export default NotFound;