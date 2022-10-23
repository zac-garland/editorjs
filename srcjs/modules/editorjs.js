const editJSdiv = () => {
  return `
  <div class="editjs-container">
    <div class="editjs-container__content">
      <label class="toggle-theme">
        <input type="checkbox" />
        <span class="switch"></span>
        <div>light</div>
        <div>dark</div>
      </label>

      <div id="editorjs"></div>


      <div class="editjs-container__button" id="saveButton">
        editor.save()
      </div>

      <div class="editjs-container__button" id="downloadButton">
        editor.download()
      </div>

      <div class="editjs-container__button" id="replaceData">
        editor.update()
      </div>

    </div>
    <div class="editjs-container__output">
      <pre class="editjs-container__output-content" id="output"></pre>
    </div>
  </div>`;
}

export { editJSdiv };
