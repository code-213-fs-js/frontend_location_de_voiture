import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle";

export default function Register() {
  return (
    <div className="form-page">
      <PageTitle
        title="Créer un compte"
        description="Remplissez les informations suivantes."
      />
      <form className="form-card">
        <label>
          Nom complet
          <input type="text" placeholder="Votre nom" />
        </label>
        <label>
          Adresse e-mail
          <input type="email" placeholder="exemple@email.com" />
        </label>
        <label>
          Téléphone
          <input type="tel" placeholder="05xxxxxxxx" />
        </label>
        <label>
          Mot de passe
          <input type="password" placeholder="Choisissez un mot de passe" />
        </label>
        <button className="button" type="button">
          S'inscrire
        </button>
        <p>
          Vous avez déjà un compte ? <Link to="/login">Se connecter</Link>
        </p>
      </form>
    </div>
  );
}
