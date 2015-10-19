export function handleFileSelect(evt) {
  evt.stopPropagation()
  evt.preventDefault()

  let files = evt.target.files  // FileList object
  if (!files) {
    console.log('failed.')
    return false
  }
  // file is a FileList of File objects. List some properties.
  var output = []
  files = [].slice.call(files)
  files.map((f) => {
    output.push(
      '<li><strong>', escape(f.name), '</strong> (',
      f.type || 'n/a', ') - ',
      f.size, 'bytes, last modified: ',
      f.lastModifiedDate.toLocaleDateString(), '</li>'
    )
    document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>'
  })
}

export function handleDragOver(evt) {
  evt.stopPropagation()
  evt.preventDefault()
  evt.dataTransfer.dropEffect = 'copy' // Explicitly show this is a copy.
}
