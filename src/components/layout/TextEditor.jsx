import React, { useRef, useState } from "react";
import JoditEditor from "jodit-react";

const config = {
  buttons: ["bold", "italic", "link", "unlink", "underline", "source"],
};

const TextEditor = ({ id, text, items, setItems }) => {
  const editor = useRef(null);
  const [editText, setEditText] = useState(text);
  function editProduct(id) {
    const updatedProducts = [...items].map((item) => {
      if (item.id === id) {
        item.description = editText
      }
      return item
    })
    setItems(updatedProducts)
  }

  return (
    <div key={id}>
      <JoditEditor
        ref={editor}
        value={editText}
        // onBlur={handleUpdate}
        onChange={(content) => setEditText(content)}
      />
      <button className="btn sub-btn" onClick={() => editProduct(id)}>بروزرسانی توضیحات</button>
      {/* <div dangerouslySetInnerHTML={{ __html: editText }} /> */}
    </div>
  );
};

export default TextEditor;