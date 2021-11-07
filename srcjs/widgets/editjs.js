import 'widgets';
import { editJSdiv } from '../modules/editorjs.js';
import { cPreview } from '../modules/preview.js';
import { saveJSON } from '../modules/save.js';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import SimpleImage from '@editorjs/simple-image';
import Delimiter from '@editorjs/delimiter';
import List from '@editorjs/list';
import Checklist from '@editorjs/checklist';
import Quote from '@editorjs/quote';
import CodeTool from '@editorjs/code';
import Embed from '@editorjs/embed';
import Table from '@editorjs/table';
import LinkTool from '@editorjs/link';
import Warning from '@editorjs/warning';
import Marker from '@editorjs/marker';
import InlineCode from '@editorjs/inline-code';






HTMLWidgets.widget({

  name: 'editjs',

  type: 'output',

  factory: function(el, width, height) {

    // TODO: define shared variables for this instance
     var editor;
     var saveButton;
     var downloadButton;


    return {

      renderValue: function(x) {



        // TODO: code to render the widget, e.g.
        el.innerHTML = editJSdiv("editorjs");

        editor = new EditorJS({
      /**
       * Enable/Disable the read only mode
       */
      readOnly: false,

      /**
       * Wrapper of Editor
       */
      holder: 'editorjs',

      /**
       * Common Inline Toolbar settings
       * - if true (or not specified), the order from 'tool' property will be used
       * - if an array of tool names, this order will be used
       */
      // inlineToolbar: ['link', 'marker', 'bold', 'italic'],
      // inlineToolbar: true,

      /**
       * Tools list
       */
      tools: {
        /**
         * Each Tool is a Plugin. Pass them via 'class' option with necessary settings {@link docs/tools.md}
         */
        header: {
          class: Header,
          inlineToolbar: ['marker', 'link'],
          config: {
            placeholder: 'Header'
          },
          shortcut: 'CMD+SHIFT+H'
        },

        /**
         * Or pass class directly without any configuration
         */
        image: SimpleImage,

        list: {
          class: List,
          inlineToolbar: true,
          shortcut: 'CMD+SHIFT+L'
        },

        checklist: {
          class: Checklist,
          inlineToolbar: true,
        },

        quote: {
          class: Quote,
          inlineToolbar: true,
          config: {
            quotePlaceholder: 'Enter a quote',
            captionPlaceholder: 'Quote\'s author',
          },
          shortcut: 'CMD+SHIFT+O'
        },

        warning: Warning,

        marker: {
          class:  Marker,
          shortcut: 'CMD+SHIFT+M'
        },

        code: {
          class:  CodeTool,
          shortcut: 'CMD+SHIFT+C'
        },

        delimiter: Delimiter,

        inlineCode: {
          class: InlineCode,
          shortcut: 'CMD+SHIFT+C'
        },

        linkTool: LinkTool,

        embed: Embed,

        table: {
          class: Table,
          inlineToolbar: true,
          shortcut: 'CMD+ALT+T'
        },

      },

      /**
       * This Tool will be used as default
       */
      // defaultBlock: 'paragraph',

      /**
       * Initial Editor data
       */
      data: {
        blocks: [
          {
            type: "header",
            data: {
              text: "Editor.js",
              level: 2
            }
          },
          {
            type : 'paragraph',
            data : {
              text : 'Hey. Meet the new Editor. On this page you can see it in action — try to edit this text. Source code of the page contains the example of connection and configuration.'
            }
          },
          {
            type: "header",
            data: {
              text: "Key features",
              level: 3
            }
          },
          {
            type : 'list',
            data : {
              items : [
                'It is a block-styled editor',
                'It returns clean data output in JSON',
                'Designed to be extendable and pluggable with a simple API',
              ],
              style: 'unordered'
            }
          },
          {
            type : 'paragraph',
            data : {
              text : 'Classic WYSIWYG-editors produce raw HTML-markup with both content data and content appearance. On the contrary, Editor.js outputs JSON object with data of each Block. You can see an example below'
            }
          },
          {
            type : 'paragraph',
            data : {
              text : 'Clean data is useful to sanitize, validate and process on the backend.'
            }
          },
          {
            type : 'delimiter',
            data : {}
          },
          {
            type: 'image',
            data: {
              url: 'https://upload.wikimedia.org/wikipedia/commons/4/48/WikiJournal_of_Science_logo_%28flat_black%29.svg',
              caption: '',
              stretched: false,
              withBorder: false,
              withBackground: true,
            }
          },
        ]
      },
      onReady: function(){
        saveButton.click();
      },
      onChange: function(api, event) {
        console.log('something changed', event);
      }
    });

    // save button

    saveButton = document.getElementById('saveButton');

    saveButton.addEventListener('click', function () {
    editor.save()
    .then((savedData) => {
      cPreview.show(savedData, document.getElementById("output"));

    })
    .catch((error) => {
      console.error('Saving error', error);
    });

  });

  // download button



  downloadButton = document.getElementById('downloadButton');

  downloadButton.addEventListener('click', function () {
    editor.save()
    .then((savedData) => {
      saveJSON(savedData,"example-out");

    })
    .catch((error) => {
      console.error('Download error', error);
    });

  });




      },

      resize: function(width, height) {

        // TODO: code to re-render the widget with a new size

      }

    };
  }
});
