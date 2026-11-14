import { jwtDecode } from "jwt-decode";
export function getRole(){
    const token=localStorage.getItem("token")
    if(!token) return null
    try {
        const decoded = jwtDecode(token)
        return decoded.role
    } catch (error) {
        return null
    }
}