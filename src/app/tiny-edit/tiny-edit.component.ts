import { Component, AfterViewInit,
  EventEmitter,
  OnDestroy,
  Input,
  Output } from '@angular/core';

import 'tinymce';
import 'tinymce/themes/modern';

import 'tinymce/plugins/table';
import 'tinymce/plugins/link';

declare let tinymce: any;

@Component({
  selector: 'app-tiny-edit',
  templateUrl: './tiny-edit.component.html',
  styleUrls: ['./tiny-edit.component.css']
})

export class TinyEditComponent implements AfterViewInit, OnDestroy {
  @Input() elementId: String;
  @Input() mceText: string;
  @Output() onEditorContentChange = new EventEmitter();

  public editor;

  ngAfterViewInit() {
    tinymce.init({
      selector: '#' + this.elementId,
      min_height: 200,
      plugins: [
        'link', 'table'
        // 'advlist autolink lists link image charmap print preview hr anchor pagebreak',
        // 'searchreplace wordcount visualblocks visualchars code fullscreen',
        // 'insertdatetime media nonbreaking save table contextmenu directionality',
        // 'emoticons template paste textcolor colorpicker textpattern imagetools codesample'
      ],
      // toolbar1: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
      // toolbar2: 'print preview media | forecolor backcolor emoticons | codesample',
      skin_url: 'assets/skins/lightgray',

      file_picker_types: 'image',
      automatic_uploads: true,
      images_upload_url: '/carrots-admin-ajax/a/u/img/task',
      images_reuse_filename: true,
      file_browser_callback_types: 'image',
      file_browser_callback: function(field_name, url, type, win) {
        console.log(type);
        console.log(type =='image');
        if(type=='image'){
          let event = new MouseEvent('click', {
            'view': window,
            'bubbles': true,
            'cancelable': true
          });
          let fileInput = document.getElementById('img_input');
          fileInput.dispatchEvent(event);
        }
      },

      image_advtab: true,

      setup: editor => {
        this.editor = editor;
        editor.on('keyup change', () => {
          const content = editor.getContent();
          this.onEditorContentChange.emit(content);
        });
      }
    });
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }
}
