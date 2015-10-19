import {handleFileSelect, handleDragOver, handleFileSelectClick} from './fileupload'

var files = document.getElementById('files')
files.addEventListener('change', handleFileSelect, false)

var dropZone = document.getElementById('drop_zone')
dropZone.addEventListener('dragover', handleDragOver, false)
dropZone.addEventListener('drop', handleFileSelect, false)
dropZone.addEventListener('click', () => handleFileSelectClick(files), false)
