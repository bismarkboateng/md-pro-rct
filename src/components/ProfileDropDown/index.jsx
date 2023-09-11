import { PiStarFourThin } from "react-icons/pi"

import Constants from "./Constants"
import classes from "./index.module.scss"





export default function index({ onClick }) {
  return (
    <>
    <div className={classes.backdrop} onClick={onClick} />
    <section className={classes.profileWrapper}>
        <div className={classes.iconsText}>
            { Constants.map((item) => (
                <div key={item.id} className={classes.iconLinks}>
                    <li className={classes.icon}>{item.icon}</li>
                    <p className={classes.title}>{item.title}</p>
                </div>
            ))}
        </div>

        <ul className={classes.personalLinks}>
            <li>Settings</li>
            <li>Refine recommendations</li>
            <li>Manage publications</li>
            <li>Help</li>
        </ul>

        <ul className={classes.memberWrapper}>
            <div className={classes.member}>
                <li>Become a member</li>
                <PiStarFourThin className={classes.premiumIcon}/>
            </div>
            <li>Create a Mastadon account</li>
            <li>Apply for author verification</li>
            <li>Apply to the partner program</li>
            <li>Gift a membership</li>
        </ul>

        <div className={classes.signOut}>
            <div>Sign out</div>
            <p>bi*****@gmail.com</p>
        </div>
    </section>
    </>
  )
}
