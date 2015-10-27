export function handleFileSelect(evt) {
  evt.stopPropagation()
  evt.preventDefault()

  let files

  if (evt.dataTransfer) {
    files = evt.dataTransfer.files
  } else {
    files = evt.target.files
  }
  if (!files) {
    return false
  }

  Array.from(files, (f) => {
    if (!f.type.match('image.*')) {
      return false
    }

    let reader = new FileReader()

    reader.onload = ((fileObj) => {
      return (e) => {
        let span = document.createElement('span')
        span.innerHTML = ['<img class="thumb" src="',
        e.target.result,
        '" title="',
        escape(fileObj.name),
        '"/>'].join('')
        document.getElementById('list').insertBefore(span, null)
      }
    })(f)

    reader.readAsDataURL(f)

  })
}

export function handleDragOver(evt) {
  evt.stopPropagation()
  evt.preventDefault()
  evt.dataTransfer.dropEffect = 'copy'
}

export function handleFileSelectClick(fileSelect) {
  fileSelect.click()
}
