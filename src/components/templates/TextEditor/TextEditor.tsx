"use client"; // For Next.js App Router
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { ClassicEditor } from "ckeditor5";
import {
  Bold,
  Essentials,
  Link,
  Italic,
  FontColor,
  FontBackgroundColor,
  BlockQuote,
  FontFamily,
  ImageInsert,
  Paragraph,
  List,
  Undo,
  Image,
  Heading,
  Underline,
  Indent,
  Table,
  Alignment,
  Strikethrough,
} from "ckeditor5";
import "ckeditor5/ckeditor5.css";
// import "ckeditor5-premium-features/ckeditor5-premium-features.css";
import { useState } from "react";

function CustomEditor({ initialContent, onContentChange }:any) {
  const [editorContent, setEditorContent] = useState<any>(initialContent || "");

  const handleEditorChange = (event:any, editor:any) => {
    const newContent = editor.getData();
    setEditorContent(newContent);
    onContentChange && onContentChange(newContent); // Call the parent component's function
  };

  const uploadAdapter = (loader:any) => {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          const body = new FormData();
          loader.file.then((file:any) => {
            body.append("img", file);
            fetch("http://localhost:3000/api/image", {
              method: "POST",
              body: body,
            })
              .then((res) => res.json())
              .then((res) => {
                resolve({ default: `http://localhost:3000/uploads/${res.imagePath.name}` });
              })
              .catch((err) => {
                reject(err);
              });
          });
        });
      },
    };
  };

  function uploadPlugin(editor:any) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader:any) => {
      return uploadAdapter(loader);
    };
  }

  return (
    <CKEditor
      editor={ClassicEditor}
      config={{
        toolbar: {
          items: [
            "undo",
            "redo",
            "|",
            "heading",
            "|",
            "fontfamily",
            "fontsize",
            "fontColor",
            "fontBackgroundColor",
            "|",
            "bold",
            "italic",
            "strikethrough",
            "underline",
            "|",
            "link",
            "uploadImage",
            "blockQuote",
            "|",
            "alignment",
            "insertImage",
            "bulletedList",
            "numberedList",
            "todoList",
            "outdent",
            "indent",
          ],
          shouldNotGroupWhenFull: false,
        },
        plugins: [
          Essentials,
          Bold,
          Italic,
          Table,
          Paragraph,
          Undo,
          FontColor,
          FontBackgroundColor,
          ImageInsert,
          Image,
          FontFamily,
          Link,
          Indent,
          Underline,
          Strikethrough,
          List,
          Alignment,
          Heading,
          BlockQuote,
        ],
        licenseKey: process.env.NEXT_PUBLIC_CKEDITOR_LICENSE_KEY,
        initialData: editorContent,
        extraPlugins: [uploadPlugin],
      }}
      onChange={handleEditorChange}
    />
  );
}

export default CustomEditor;
