/* eslint-disable react/jsx-no-undef */
import { Button, FileInput, Select, TextInput } from "flowbite-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function CreatePost() {
  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="">Create a post</h1>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput type="text" placeholder="Title" required id="title" />
          <Select>
            <option value="uncategorized"> Select a category</option>
            <option value="javascript"> Javascript</option>
            <option value="Reactjs"> ReactJs</option>
            <option value="NextJs"> NextJs</option>
            <option value="Django"> Django</option>
            <option value="Artificial Intelligence">
              {" "}
              Artificial Intelligence
            </option>
            <option value="BlockChain"> BlockChain</option>
            <option value="Networking"> Networking</option>
            <option value="DataStructures and algorithms">
              {" "}
              Data Structures And Algorithms
            </option>
            <option value="Nodejs"> Nodejs</option>
            <option value="WebRTC"> WebRTC</option>
            <option value="Python"> Python</option>
            <option value="Devops">Devops</option>
            <option value="Cloud">Cloud</option>
            <option value="Docker">Docker</option>
          </Select>
        </div>

        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
          <FileInput type="file" accept="image/*" />
          <Button
            type="Button"
            gradientDuoTone="purpleToBlue"
            size="sm"
            outline
          >
            Upload Image
          </Button>
        </div>
        <ReactQuill
          theme="snow"
          placeholder="Write something... "
          className="h-72 mb-12"
          required
        />
        <Button type="submit" gradientDuoTone="purpleToPink">
          Publish
        </Button>
      </form>
    </div>
  );
}
