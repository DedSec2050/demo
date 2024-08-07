"use client";
import Select from "react-select";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { db, auth } from "@/app/firebaseConfig";
import { collection, getDocs, doc, setDoc, addDoc } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  fetchSignInMethodsForEmail,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

async function fetchUsersFromFirestore(checkmail) {
  const userSnap = await getDocs(collection(db, "users"));
  console.log(userSnap);
  const userList = [];
  userSnap.forEach((doc) => {
    console.log(doc);
    userList.push({ ...doc.data() });
  });
  console.log(userList);

  var emailFlag = false;
  userList.forEach((e) => {
    console.log(e.email);
    if (checkmail == e.email) emailFlag = true;
    console.log(emailFlag);
  });
  return emailFlag;
}
// Resources
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
  const router = useRouter();
  const [domain, setDomain] = useState(null);
  const [topic, setTopic] = useState(null);
  const [topicList, setTopicList] = useState([]);
  const [link, setLink] = useState("");
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("john@example.com");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const googleAuth = new GoogleAuthProvider();
  const [user, setUser] = useAuthState(auth);
  // fetchusers();
  const handleSignUp = async () => {
    try {
      const signInMethod = await fetchSignInMethodsForEmail(auth, email);
      console.log(user);
      if (user) {
        console.log(user);
        router.push("/blog");
        return;
      }

      if (signInMethod.length > 0) {
        alert("Email already in use");
        setEmail("");
        return;
      }

      await createUserWithEmailAndPassword(auth, email, password);
      console.log(auth);
      alert("Account Created");
      setUserEmail(email);
      // fetchusers(email);
      setError("");
    } catch (error) {
      console.log(error);
      alert(error.message);
      setError("");
    }
  };
  const createUser = async () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (u) => {
        await addDoc(collection(db, "users"), { email: email });
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/email-already-in-use":
            // alert(error.message);
            handleSignIn();
            break;
          case "auth/invalid-email":
            alert(error.message);
            console.log(`Email address ${email} is invalid.`);
            break;
          case "auth/operation-not-allowed":
            console.log(`Error during sign up.`);
            break;
          case "auth/weak-password":
            alert(error.message);
            console.log(
              "Password is not strong enough. Add additional characters including special characters and numbers.",
            );
            break;
          default:
            console.log(error.message);
            break;
        }
      });
  };

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log(user.email);

      if (email == user.email) {
        setError("User already logged in.");
        return;
      }

      alert("Login success");

      setError("");
    } catch (error) {
      console.log(error);
      setError(error.message);
      if (error.code == "auth/invalid-credential") {
        alert(error.code);
        setError("");
        return;
      }
      handleSignUp();
    }
  };
  const [userEmail, setUserEmail] = useState("");
  const handleGoogleLogIn = async () => {
    if (user) {
      {
        router.push("/blog");
        return;
      }
    }
    const result = await signInWithPopup(auth, googleAuth)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.

        const user = result.user;
        console.log(user.email);
        console.log(user.displayName);
        //Logic for Adding new data
        fetchUsersFromFirestore(user.email)
          .then(async (data) => {
            console.log(data);
            if (!data) {
              await addDoc(collection(db, "users"), { email: user.email });
              console(user.email);
            }
          })
          .catch((e) => {
            console.log(e);
          });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
    console.log(auth.currentUser);
  };
  useEffect(() => {
    console.log(user);
  }, [user]);

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
      {console.log(user ? "/blogs" : link)}
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
          {user && topic != null ? router.push("/blog") : ""}
          {topic != null && !user && (
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
                    <h2>E-mail</h2>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="rounded-md px-5 text-black"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <h2>Password</h2>
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
                      onClick={createUser}
                    >
                      Submit
                    </Button>

                    <Button
                      variant="outline"
                      className="h-40px mt-[40px] w-[100px]"
                      type="submit"
                      onClick={handleGoogleLogIn}
                    >
                      Google
                    </Button>

                    <p>{error}</p>
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
