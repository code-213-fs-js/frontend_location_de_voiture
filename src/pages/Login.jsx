import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import api from "../api/api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getRole } from "../api/role";

export default function Login() {
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const[error,setError]=useState("")
  const navigate = useNavigate()
  async function handleSubmit(e){
    e.preventDefault()
    try {
      const res = await api.post("/auth/login",{email,password})
      console.log(res)
      localStorage.setItem("token",res.data.token)
      const role =getRole()
      navigate(role==='admin'?"admin":"/cars")
    } catch (error) {
      setError(error.response.data.message)   
    }
  }
  return (
    <div className="form-page">
      <PageTitle
        title="Connexion"
        description="Connectez-vous à votre compte."
      />
      <form className="form-card" onSubmit={handleSubmit}>
        <label>
          Adresse e-mail
          <input type="email" placeholder="exemple@email.com" onChange={(e)=>setEmail(e.target.value)} required/>
        </label>
        <label>
          Mot de passe
          <input type="password" placeholder="Votre mot de passe" onChange={(e)=>setPassword(e.target.value)} required/>
        </label>
        <button className="button" type="submit">
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
