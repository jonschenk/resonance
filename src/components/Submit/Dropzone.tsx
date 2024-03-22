import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import "./Dropzone.css";

//TODO none of this works so fix it

const firebaseConfig = {
  apiKey: "AIzaSyDmjz9sftjDxlReMilBtxg8YVpCZbDF_JA",
  authDomain: "resonance-76fca.firebaseapp.com",
  databaseURL: "https://resonance-76fca-default-rtdb.firebaseio.com",
  projectId: "resonance-76fca",
  storageBucket: "resonance-76fca.appspot.com",
  messagingSenderId: "709152611059",
  appId: "1:709152611059:web:c1c12e6fbe9249855cb586",
  measurementId: "G-RP9R0GRM00",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

const Dropzone = () => {
  const maxSize = 20 * 1024 * 1024;
  const [files, setFiles] = useState<File[]>([]);
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const onDrop = React.useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
  }, []);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitting(true);

    if (files.length > 0 && files[0].size > maxSize) {
      alert("File is too large. Maximum file size is 20MB.");
    } else {
      const file = files[0];
      const uploadTask = uploadBytes(
        ref(storage, `uploads/${file.name}`),
        file
      );

      uploadTask
        .then(() => {
          return addDoc(collection(db, "uploads"), {
            email: email,
            fileName: file.name,
          });
        })
        .then(() => {
          setFiles([]);
          setEmail("");
          setSubmitting(false);
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
          setSubmitting(false);
        });
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "audio/mpeg": [".mp3"] },
    maxSize,
    maxFiles: 1,
    onDrop,
  });

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          id="dropzone-box"
          {...getRootProps()}
          style={{
            border: "2px dashed #999",
            borderRadius: "10px",
            color: "#999",
            background: "#fff",
            padding: "20px",
            height: "350px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            margin: "0 auto",
            cursor: "pointer",
          }}
          className="sm:w-64 sm:h-64"
        >
          <input {...getInputProps()} />
          <div className="flex justify-center flex-col align-center items-center">
            <img
              className="w-20 h-20"
              src="public/Assets/upload-icons/upload.svg"
              alt="upload icon"
            />
            <p>.mp3 files only (max size 20MB)</p>
          </div>
        </div>
        <input
          type="text"
          placeholder="email"
          className=" block mx-auto mt-10"
          id="email-box"
          onChange={handleEmailChange}
          value={email}
          required
          style={{
            borderRadius: "10px",
            background: "#fff",
            border: "1px solid #ccc",
            padding: "10px",
            textAlign: "center",
            width: "200px",
            color: "#000",
          }}
        />
        <button
          type="submit"
          disabled={submitting}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundPosition = "right center")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundPosition = "initial")
          }
          style={{
            fontWeight: "bold",
            marginTop: "40px",
            border: "none",
            borderRadius: "20px",
            background: "linear-gradient(90deg, #f187af 50%, #51adb0 20%)",
            boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)",
            backgroundSize: "200% auto",
            color: "#fff",
            padding: "20px 30px",
            cursor: "pointer",
            transition: "0.5s",
          }}
        >
          SUBMIT DEMO
        </button>
      </form>
    </div>
  );
};

export default Dropzone;
