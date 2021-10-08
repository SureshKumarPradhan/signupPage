import React from "react";
import "./app.css";
import { useForm } from "react-hook-form";
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });
  const onsubmit = (e) => console.log(e);

  return (
    <>
      <form className="box" onSubmit={handleSubmit(onsubmit)}>
        <h1>Botspot AI</h1>
        <input
          type="text"
          className="email"
          placeholder="username"
          autoComplete="off"
          {...register("email", {
            required: "this field is required",
            pattern: {
              value: /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/,
              message: "invalid email",
            },
          })}
        />
        {errors.email && (
          <div className="error">{errors.email.message}</div>
        )}
        <input
          type="password"
          className="password"
          placeholder="password"
          {...register("password", {
              required:"You must specify a password",
              minLength:{
                  value:6,
                  message:"password length must greter than six"
              },
              pattern:{
                  value:/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                  message:"give the strong password"
              }
          })}
        />
         {errors.password && (
          <div className="error">{errors.password.message}</div>
        )}
        <button
         type="submit"
          className="btn"
        >
          {" "}
          Sign-up
        </button>
      </form>
    </>
  );
};

export default App;
