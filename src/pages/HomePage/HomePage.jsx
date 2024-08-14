import { useSelector } from "react-redux";
import css from "./HomePage.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import PageLoggedUser from "../../components/PageLoggedUser/PageLoggedUser";

export default function HomePage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? (
    <PageLoggedUser />
  ) : (
    <div>
      <h1 className={css.title}>Hello!</h1>
      <p className={css.text}>
        This is an application for storing contacts. You need to log in or
        register for additional features.
      </p>
    </div>
  );
}
