const editJSdiv = () => {
  return `
  <div class="ce-example">
    <div class="ce-example__content _ce-example__content--small">
      <div id="editorjs"></div>

      <div class="ce-example__button" id="saveButton">
        editor.save()
      </div>

      <div class="ce-example__button" id="downloadButton">
        editor.download()
      </div>

    </div>
    <div class="ce-example__output">
      <pre class="ce-example__output-content" id="output"></pre>
    </div>
  </div>`;
}

export { editJSdiv };
