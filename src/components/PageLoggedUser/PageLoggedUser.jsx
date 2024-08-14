import css from "./PageLoggedUser.module.css";
import { Link } from "react-router-dom";

export default function PageLoggedUser() {
  return (
    <div className={css.container}>
      <p className={css.text}>
        Hello! You are on the main page of our app. To view your contact list,
        go to the{" "}
        <Link className={css.link} to="/contacts">
          Contacts
        </Link>
        .
      </p>
    </div>
  );
}
