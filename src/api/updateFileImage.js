import app from "app/firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const urlImage = ({ file }) => {
  const storage = getStorage();
  const starsRef = ref(storage, `"images/"${file.name}`);
  const getUrl = async () => {
    try {
      const newUrl = await getDownloadURL(starsRef);
      return newUrl;
    } catch (error) {}
  };

  return getUrl();

  // let url = "";
  // const fileName = `"images/"${file.name}`;
  // const storage = getStorage(app);
  // const storageRef = ref(storage, fileName);

  // const uploadTask = uploadBytesResumable(storageRef, file);

  // uploadTask.on(
  //   "state_changed",
  //   (snapshot) => {
  //     const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //     console.log("Upload is " + progress + "% done");
  //     switch (snapshot.state) {
  //       case "paused":
  //         console.log("Upload is paused");
  //         break;
  //       case "running":
  //         console.log("Upload is running");
  //         break;
  //       default:
  //     }
  //   },
  //   (error) => {
  //     alert("Error update image" + error);
  //   },
  //   () => {
  //     const getUrlImage = async () => {
  //       try {
  //         const newUrl = await getDownloadURL(uploadTask.snapshot.ref);
  //         url = newUrl;
  //         console.log("url", url);
  //       } catch (error) {}
  //     };
  //     getUrlImage();
  //   }
  // );
};
export default urlImage;
