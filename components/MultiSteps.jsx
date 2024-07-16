"use client";
import Select from "react-select";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { db, auth } from "@/app/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  fetchSignInMethodsForEmail,
} from "firebase/auth";
import { useLocalStorage } from "@uidotdev/usehooks";
import { UserAuth } from "@/app/context/AuthContext";

async function fetchDataFromFirestore() {
  const querySnapshot = await getDocs(collection(db, "resources"));
  // console.log(querySnapshot);
  const data1 = [];
  querySnapshot.forEach((doc) => {
    data1.push({ ...doc.data() });
  });
  // console.log(data1[0].resources);
  return data1;
}

const MultiSteps = () => {
  console.log("verify", auth.config);

  const [data3, setdata3] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const dataref = await fetchDataFromFirestore();
      console.log(dataref[0].resources);
      setdata3(dataref[0].resources);
    }
    // console.log(testiData);
    fetchData();
  }, []);
  const finalData = data3;
  console.log(finalData);
  //
  const [domain, setDomain] = useState(null);
  const [topic, setTopic] = useState(null);
  const [topicList, setTopicList] = useState([]);
  const [link, setLink] = useState("");
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("john@example.com");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [userEmail, setUserEmail] = useState("");

  const handleSignUp = async () => {
    try {
      const signInMethod = await fetchSignInMethodsForEmail(auth, email);
      if (signInMethod.length > 0) {
        setError("Email already in use");
        return;
      }

      await createUserWithEmailAndPassword(auth, email, password);
      console.log(auth);
      alert("Account Created");
      setUserEmail(email);
      // localStorage.setItem("userEmail", email);
      setError("");
    } catch (error) {
      console.log(error);
      alert(error.message);
      setError(error.message);
    }
  };
  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);

      if (email == userEmail) {
        setError("User already logged in.");
        return;
      }

      alert("Login success");
      setLoggedEmail(email);
      setUserEmail(email);
      // localStorage.setItem("userEmail", email);
      // localStorage.setItem("userEmail", email);
      setError("");
    } catch (error) {
      console.log(error);
      setError(error.message);
      handleSignUp();
    }
  };

  const handleDomainChange = (obj) => {
    setDomain(obj);
    setTopicList(obj.topics);
    setTopic(null);
    setOpen(false);
  };
  const handleTopicChange = (obj) => {
    setTopic(obj);
    setOpen(false);
  };
  const handleClick = () => {
    // If exists
    setOpen(true);
  };
  const closePopUp = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (domain && topic) {
      setLink(`https://www.${topic.url}`);
    }
  }, [domain, topic]);

  return (
    <div className="mb-20 w-[250px] text-white md:w-[350px]">
      <b>Domain</b>
      <Select
        className="text-black"
        placeholder="Select Domain"
        value={domain}
        options={finalData}
        onChange={handleDomainChange}
        getOptionLabel={(x) => x.domain}
        getOptionValue={(x) => x.code}
      ></Select>
      <br />
      <b>Topic</b>
      <Select
        className="text-black"
        placeholder="Select Topic"
        value={topic}
        options={topicList}
        onChange={handleTopicChange}
        getOptionLabel={(x) => x.name}
        getOptionValue={(x) => x.code}
      ></Select>

      {console.log(domain && topic ? topic.code : "-")}

      <Button
        variant="outline"
        onClick={handleClick}
        href={domain && topic ? link : "-"}
        className="mt-8 rounded-md border-accent text-white"
      >
        Go
      </Button>
      {open && (
        <>
          {topic == null && <p>Enter some value</p>}
          {topic != null && (
            <div className="absolute left-0 top-0 flex h-screen w-screen items-center justify-center px-[15px]">
              <div className="z-40 flex h-[400px] w-[500px] flex-col items-center justify-center border-4 bg-[#26355D] bg-opacity-[100%] md:h-[500px]">
                {" "}
                <div className="flex-grow-1 flex h-full w-full flex-col p-5">
                  <div className="flex w-full items-stretch justify-around">
                    <div>Please Enter Your Details</div>
                    <Button
                      className="h-[40px] w-[40px] text-white"
                      variant="outline"
                      onClick={closePopUp}
                    >
                      X
                    </Button>
                  </div>
                  <div className="flex flex-col gap-2 px-5 pt-[50px]">
                    <h1>E-mail</h1>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="rounded-md px-5 text-black"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <h1>Password</h1>
                    <input
                      type="text"
                      placeholder="Password"
                      className="rounded-md px-5 text-black"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                      variant="outline"
                      className="h-40px mt-[40px] w-[100px]"
                      type="submit"
                      onClick={handleSignIn}
                    >
                      Submit
                    </Button>

                    <Button
                      variant="outline"
                      className="h-40px mt-[40px] w-[100px]"
                      type="submit"
                      onClick={handleGoogleSignIn}
                    >
                      Google
                    </Button>

                    <p>{error}</p>
                    {/* <p className="z-40">
                      Currently loggged in as :{" "}
                      {localStorage.getItem("userEmail", email)}
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
      {/* {<p>Current User: {localStorage.getItem("userEmail", email)}</p>} */}
    </div>
  );
};

export default MultiSteps;
