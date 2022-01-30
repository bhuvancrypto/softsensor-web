import Navbar from "../navbar/Navbar";
import styles from "./Contact.module.css";
import ContactLogo from "../../images/ContactLogo";
import Facebook from "../../images/Facebook"
import Whatsapp from "../../images/WhatsApp"
import Twitter from "../../images/Twitter"
import Snapchat from "../../images/SnapChat"
import Youtube from "../../images/Youtube"


function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.content}>
        <div className={styles.box}>
          <h1 className={styles.demo}>REQUEST FOR DEMO OR CONTACT US</h1>
          <button className={styles.contactBtn}>Contact US</button>
        </div>
      </div>
      <div className={styles.firstoval}>
      </div>
      <div className={styles.secondoval}>
      </div>
      <div className={styles.thirdOval}>
      </div>
      <div className={styles.contactMidBox}>
        <div className={styles.midContent}>
          <div className={styles.ContactFirstBox}>
            <div className={styles.ContactLogo}>
              <ContactLogo />
            </div>
            <p>
              We Deliver Solution
              <br />
              Data science, AI & Technology
            </p>
          </div>
          <ul className={styles.ContactList}>
            <li className={styles.Listheading}>Platform</li>
            <li className={styles.ListContent}>Home</li>
            <li className={styles.ListContent}>Industres</li>
            <li className={styles.ListContent}>Services</li>
            <li className={styles.ListContent}>Blog</li>
            <li className={styles.ListContent}>About</li>
            <li className={styles.ListContent}>Contact</li>
          </ul>
          <ul className={styles.ContactList}>
            <li className={styles.Listheading}>Services</li>
            <li className={styles.ListContent}>Solution Offering</li>
            <li className={styles.ListContent}>Technology Offering</li>
          </ul>
          <ul className={styles.ContactList}>
            <li className={styles.Listheading}>Locations</li>
            <li className={styles.ListContent}>India</li>
            <li className={styles.ListContent}>Gurgoan</li>
            <li className={styles.ListContent}>US</li>
          </ul>
        </div>
        <div className={styles.midlastBox}>
          <div className={styles.midlastFirstBox}>
            <div className={styles.terms}>
              <p>Terms of Service </p>
              <p>Privacy Policy</p>
            </div>
            © 2020 boardme. All rights reserved.
          </div>
          <div>
            <p className={styles.social}>Connect with us on Social Media</p>
            <div className={styles.socialIcons}>
            <Facebook/>
            <Whatsapp/>
            <Youtube/>
            <Twitter/>
            <Snapchat/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
