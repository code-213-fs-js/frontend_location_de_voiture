import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle";

export default function Login() {
  return (
    <div className="form-page">
      <PageTitle
        title="Connexion"
        description="Connectez-vous à votre compte."
      />
      <form className="form-card">
        <label>
          Adresse e-mail
          <input type="email" placeholder="exemple@email.com" />
        </label>
        <label>
          Mot de passe
          <input type="password" placeholder="Votre mot de passe" />
        </label>
        <button className="button" type="button">
          Se connecter
        </button>
        <p>
          Vous n'avez pas de compte ?
          <Link to="/register">Créer un compte</Link>
        </p>
      </form>
    </div>
  );
}
