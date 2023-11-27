import card_photo from "../images/kanye-west-graduation.jpg"
import phone_icon from "../images/phone-icon.png"
import mail_icon from "../images/mail-icon.png"

const Card = () => {
    return (
        <div className="contact-card">
            <img src={card_photo} />
            <h3>The Graduation</h3>
            <div className="info-group">
                <img src={phone_icon} />
                <p>(212) 555-1234</p>
            </div>
            <div className="info-group">
                <img src={mail_icon} />
                <p>kanye_west@goodmusicrecords.com</p>
            </div>
        </div>
    );
};

export default Card;
