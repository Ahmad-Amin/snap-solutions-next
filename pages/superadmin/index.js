import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import UserContext from "../../store/user-context";

import { useRouter } from "next/router";
import { useToasts } from "react-toast-notifications";
import baseUrl from "../../utils/baseUrl";
import Spinner from "../../utils/Spinner/Spinner";

const index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [spinnerShow, setSpinnerShow] = useState(false);

  const userCtx = useContext(UserContext);
  const router = useRouter();
  const { addToast } = useToasts();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      userCtx.saveUserData(user);
      router.push("/dashboard");
    }
  }, []);

  const userSignIn = async (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };

    try {
      setSpinnerShow(true);
      const url = `${baseUrl}/api/signIn`;
      const response = await axios.post(url, data);

      if (response.status === 200 && response.status !== null && response.data.role === 'superadmin') {
        const user = response.data;
        userCtx.saveUserData(user);
        addToast("Login Successfully", {
          appearance: "success",
          autoDismiss: true,
        });
        router.push("/dashboard");
      }
    } catch (error) {
      addToast(`Incorrect Credentails`, {
        appearance: "error",
        autoDismiss: true,
      });
      // userCtx.logoutUser();
    } finally {
      setSpinnerShow(false);
    }

    setEmail("");
    setPassword("");
  };

  return spinnerShow ? (
    <Spinner />
  ) : (
    <div className="tw-py-11 tw-px-5">
      <img
        className="tw-h-auto tw-max-w-full"
        alt="Website logo"
        src="/images/logo-white.png"
      />
      <div className="tw-grid tw-grid-cols-2">
        <div className="tw-flex tw-justify-center tw-items-center tw-flex-col">
          <div>
            <h1 className="tw-h1 tw-text-custom-blue tw-font-semibold tw-text-4xl">
              Welome Back
            </h1>
            <p className="tw-p tw-text-neutral-500 tw-text-sm">
              Welome back! Please enter your details
            </p>

            <div className="tw-mt-11 tw-w-96">
              <div className="tw-flex tw-flex-col tw-gap-5">
                <div>
                  <label
                    htmlFor="email"
                    className="tw-text-custom-blue tw-text-base tw-mb-1.5 tw-block"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    className="tw-border tw-border-neutral-400 tw-text-neutral-400 tw-rounded-lg tw-py-1.5 tw-px-4 tw-w-full"
                    name="name"
                    placeholder="Enter your Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="tw-text-custom-blue tw-text-base tw-mb-1.5 tw-block"
                  >
                    password
                  </label>
                  <input
                    type="password"
                    className="tw-border tw-border-neutral-400 tw-text-neutral-400 tw-rounded-lg tw-py-1.5 tw-px-4 tw-w-full"
                    name="password"
                    placeholder="Enter your Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>
              </div>
              <button className="tw-button tw-my-5 tw-text-neutral-400 tw-block tw-text-center">
                Forgot Password
              </button>
              <button
                className="tw-button tw-w-full tw-bg-custom-blue tw-text-white tw-py-2 tw-rounded-lg"
                onClick={userSignIn}
              >
                Sign In
              </button>

              <p className="tw-p tw-text-neutral-400 tw-my-4 tw-text-center">
                Don't have an account?{" "}
                <button href="#" className="tw-button tw-text-custom-blue">
                  Sign up for free
                </button>
              </p>
            </div>
          </div>
        </div>
        <div>
          <img
            className="tw-h-auto tw-max-w-full"
            alt="Login Page"
            src="/images/LoginPageImage.png"
          />
        </div>
      </div>
    </div>
  );
};

export default index;
