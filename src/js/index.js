import React from 'react'
import ReactDOM from 'react-dom'
import {handleFileSelect, handleDragOver, handleFileSelectClick} from './fileupload'
import PreviewZone from './dropzone'

var files = document.getElementById('files')
files.addEventListener('change', handleFileSelect, false)

var dropZone = document.getElementById('drop_zone')
dropZone.addEventListener('dragover', handleDragOver, false)
dropZone.addEventListener('drop', handleFileSelect, false)
dropZone.addEventListener('click', () => handleFileSelectClick(files), false)

var data = [{src: 'sssrrrrcccc', title:'ttiiiitttlllllleeee'}]
ReactDOM.render(
  <PreviewZone data={data} />,
  document.getElementById('list')
)
