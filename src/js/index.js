import {handleFileSelect, handleDragOver} from './fileupload'

var files = document.getElementById('files')
files.addEventListener('change', handleFileSelect, false)

// Setup the dnd listeners.
var dropZone = document.getElementById('drop_zone')
dropZone.addEventListener('dragover', handleDragOver, false)
dropZone.addEventListener('drop', handleFileSelect, false)
