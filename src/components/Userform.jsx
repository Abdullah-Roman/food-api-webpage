import { useState } from "react";
import React from "react";

const Userform = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!formData.username.trim()) {
      validationErrors.username = "username is required";
    }

    if (!formData.email.trim()) {
      validationErrors.email = "email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "email is not valid";
    }

    if (!formData.password.trim()) {
      validationErrors.password = "password is required";
    } else if (formData.password.length < 6) {
      validationErrors.password = "password should be at least 6 char";
    }

    if (formData.confirmPassword !== formData.password) {
      validationErrors.confirmPassword = "password not matched";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form Submitted successfully");
      setShow(() => {
        setShow(!show);
      });
    }
  };
  return (
    <div>
      <h2 className="text-center font-poppins font-extrabold text-orange-600">
        User Info
      </h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-[800px] mx-auto border-2 border-orange-600 p-10 rounded-md"
      >
        <div>
          <label className="text-orange-600 font-poppins font-bold block">
            Username:
          </label>
          <input
            className="w-full p-3 border-2 border-orange-600 rounded-md placeholder:text-orange-400"
            type="text"
            name="username"
            placeholder="username"
            autoComplete="off"
            onChange={handleChange}
          />
          {errors.username && <span>{errors.username}</span>}
        </div>
        <div>
          <label className="text-orange-600 font-poppins font-bold block">
            Email:
          </label>
          <input
            className="w-full p-3 border-2 border-orange-600 rounded-md placeholder:text-orange-400"
            type="email"
            name="email"
            placeholder="example@gmail.com"
            autoComplete="off"
            onChange={handleChange}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label className="text-orange-600 font-poppins font-bold block">
            Password:
          </label>
          <input
            className="w-full p-3 border-2 border-orange-600 rounded-md placeholder:text-orange-400"
            type="password"
            name="password"
            placeholder="******"
            onChange={handleChange}
          />
          {errors.password && <span>{errors.password}</span>}
        </div>
        <div>
          <label className="text-orange-600 font-poppins font-bold block">
            Confirm Password:
          </label>
          <input
            className="w-full p-3 border-2 border-orange-600 rounded-md placeholder:text-orange-400"
            type="password"
            name="confirmPassword"
            placeholder="******"
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <span className="error">{errors.confirmPassword}</span>
          )}
        </div>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
      {show && (
        <div className=" mt-10 max-w-[800px] mx-auto border-2 border-orange-600 p-10 rounded-md">
          {" "}
          <h2 className="text-center font-poppins font-extrabold text-orange-600">
            User Data
          </h2>
          <p className="text-orange-600 font-bold font-poppins">
            Name: {formData.username}
          </p>
          <p className="text-orange-600 font-bold font-poppins">
            Email: {formData.email}
          </p>
        </div>
      )}
    </div>
  );
};

export default Userform;
