import React, { useState, useContext, useEffect } from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import Link from "next/link";
import CallUs from "../components/Common/CallUs";
import UserContext from "../store/user-context";
import baseUrl from "../utils/baseUrl";
import axios from "axios";

import { useRouter } from "next/router";
import { useToasts } from "react-toast-notifications";
import Spinner from "../utils/Spinner/Spinner";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [spinnerShow, setSpinnerShow] = useState(false);

  const userCtx = useContext(UserContext);
  const router = useRouter();
  const { addToast } = useToasts();

  const user = userCtx.user;

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

      if (response.data.role === 'superadmin') {
        throw new Error("Invalid Response")
      }
      if (response.status === 200 && response.data !== null) {
        const user = response.data;
        userCtx.saveUserData(user);
        addToast("Login Successfully", {
          appearance: "success",
          autoDismiss: true,
        });
        router.push("/dashboard");
      }
    } catch (error) {
      addToast(`Error: Incorrect Credentails`, {
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

  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Sign In"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Sign In"
        imgClass="item-bg-7"
      />

      <div className="sign-in-area ptb-100">
        <div className="container">
          <div className="sign-in-form">
            <div className="sign-in-title">
              <h3>Welcome Back!</h3>
              <p>Please Sign In to your portal.</p>
            </div>
            {spinnerShow ? (
              <Spinner />
            ) : (
              <form>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="checkme"
                      />
                      <label className="form-check-label" htmlFor="checkme">
                        Keep me Log In
                      </label>
                    </div>
                  </div>
                  <div className="col-sm-6 text-right">
                    <p className="forgot-password">
                      <Link href="#">
                        <a>Forgot Password?</a>
                      </Link>
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="send-btn">
                    <button
                      type="submit"
                      className="default-btn"
                      onClick={userSignIn}
                    >
                      Sign In Now <span></span>
                    </button>
                  </div>
                  <br />
                  {/* <span>Don't have account? <Link href="/sign-up"><a>Sign Up!</a></Link></span> */}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      <CallUs />

      <Footer />
    </>
  );
};

export default SignIn;
