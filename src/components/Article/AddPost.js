import React from "react";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/js/plugins.pkgd.min.js";
import FroalaEditorComponent from "react-froala-wysiwyg";
import "./AddPost.css";

function AddPost() {
  const config = {
    name: "textarea",
    //key:
    placeholderText: "Edit Your Content Here!",
    //pluginsEnabled: ['align', 'charCounter', 'codeBeautifier', 'codeView', 'colors', 'draggable', 'embedly', 'emoticons', 'entities', 'file', 'fontFamily', 'fontSize', 'fullscreen', 'image', 'imageManager', 'inlineStyle', 'lineBreaker', 'link', 'lists', 'paragraphFormat', 'paragraphStyle', 'quickInsert', 'quote', 'save', 'table', 'url', 'video', 'wordPaste'],
    colorsHEXInput: false,
    autoFocus: true,
    toolbartop: true,
    linkAlwaysBlank: true,
    fontFamilySelection: true,
    fontSizeSelection: true,
    paragraphFormatSelection: true,
    htmlExecuteScripts: true,
    iframe: true,
    tabSpaces: 4,
    toolbarButtons: {
      moreText: {
        buttons: [
          "bold",
          "italic",
          "underline",
          "strikeThrough",
          "subscript",
          "superscript",
          "fontFamily",
          "fontSize",
          "textColor",
          "backgroundColor",
          "inlineClass",
          "inlineStyle",
          "clearFormatting",
        ],

        // Alignment of the group in the toolbar.
        align: "right",

        // By default, 3 buttons are shown in the main toolbar. The rest of them are available when using the more button.
        buttonsVisible: 3,
      },
      moreParagraph: {
        buttons: [
          "alignLeft",
          "alignCenter",
          "alignRight",
          "alignJustify",
          "formatOL",
          "formatUL",
          "paragraphFormat",
          "paragraphStyle",
          "lineHeight",
          "outdent",
          "indent",
          "quote",
        ],
        align: "left",
        buttonsVisible: 2,
      },

      moreRich: {
        buttons: [
          "insertLink",
          "insertImage",
          "insertVideo",
          "insertTable",
          "emoticons",
          "fontAwesome",
          "specialCharacters",
          "embedly",
          "insertFile",
          "insertHR",
        ],
        align: "left",
        buttonsVisible: 3,
      },

      moreMisc: {
        buttons: [
          "undo",
          "redo",
          "fullscreen",
          "print",
          "getPDF",
          "spellChecker",
          "selectAll",
          "html",
          "help",
        ],
        align: "right",
        buttonsVisible: 2,
      },
    },
  };

  return (
    <div className="addPost">
      <h1>ایجاد پست جدید</h1>
      <img
        className="postImg"
        src="https://image.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg"
        alt="عکس"
        title="مقاله"
      />
      <form className="addForm">
        <div className="addFormGroup">
          <input
            type="text"
            id="postTitle"
            placeholder="عنوان"
            autoFocus={true}
          />
          <label className="addImg" htmlFor="inputFile">
            اضافه کردن تصویر&nbsp;
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input type="file" accept="image/*" id="inputFile" />
        </div>
        <div className="addFormGroup">
          <FroalaEditorComponent tag="textarea" config={config} />
        </div>
        <button className="submitButton">انتشار</button>
      </form>
    </div>
  );
}

export default AddPost;
