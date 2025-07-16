
import { useInputValue } from "../../utils/useInputValue";

export const Login = () => {
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");

  const { value: email, onChange: onChangeEmail } = useInputValue();
  const { value: password, onChange: onChangePassword } = useInputValue();

  return (
    <>
      <h1>Login page</h1>
      <form>
        <label>Email</label>
        <input type="email" onChange={onChangeEmail} />
        <label>Password</label>
        <input type="password" onChange={onChangePassword} />
        <button type="submit">Login</button>
      </form>

      {email && <p>Email: {email}</p>}
      {password && <p>Password: {password}</p>}
    </>
  );
};
