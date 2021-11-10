import 'widgets';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';

HTMLWidgets.widget({

  name: 'editjs',

  type: 'output',

  factory: function(el, width, height) {

    let editor;

    return {

      renderValue: function(x) {

        let opts = x.opts;

        // add tools
        opts.tools = {};
        opts.tools.header = {
          class: Header,
          inlineToolbar: true
        }

        opts.holder = el.id;

        editor = new EditorJS(opts);

      },

      resize: function(width, height) {
        document.getElementById('editorjs').style.width = width;
        document.getElementById('editorjs').style.height = height;
      }

    };
  }
});
