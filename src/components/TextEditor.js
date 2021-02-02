import React, { useState, Fragment } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// import { SaveBtn } from "./SaveBtn";

const toolbarOptions = [
  [{ header: [1, 2, 3, false] }],
  ["bold", "italic", "underline", "strike", "blockquote"],
  [{ list: "ordered" }, { list: "bullet" }],
  ["clean"],
];

const modules = {
  toolbar: toolbarOptions,
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
];

export function QuillWrite({ paragraph, handleChangeParagraph }) {
  // const [value, setValue] = useState("");
  // const [paragraph, setParagraph] = useState("");

  // function handleOnchange(content, delta, source, editor) {
  //   setValue(content);
  //   setParagraph(editor.getContents());
  // }

  return (
    <ReactQuill
      theme="snow"
      value={paragraph}
      onChange={handleChangeParagraph}
      placeholder={"開始寫作吧..."}
      modules={modules}
      formats={formats}
    />
  );
}
