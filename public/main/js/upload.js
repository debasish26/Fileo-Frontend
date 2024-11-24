const dropZone = document.getElementById('dropZone');
const fileInput = document.getElementById('fileInput');
const filesList = document.getElementById('filesList');

// Prevent default drag behaviors
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  dropZone.addEventListener(eventName, preventDefaults, false);
  document.body.addEventListener(eventName, preventDefaults, false);
});

// Highlight drop zone when item is dragged over it
['dragenter', 'dragover'].forEach(eventName => {
  dropZone.addEventListener(eventName, highlight, false);
});

['dragleave', 'drop'].forEach(eventName => {
  dropZone.addEventListener(eventName, unhighlight, false);
});

// Handle dropped files
dropZone.addEventListener('drop', handleDrop, false);

// Handle browse button
document.querySelector('.browse-btn').addEventListener('click', () => {
  fileInput.click();
});

fileInput.addEventListener('change', (e) => {
  handleFiles(e.target.files);
});

function preventDefaults(e) {
  e.preventDefault();
  e.stopPropagation();
}

function highlight(e) {
  dropZone.classList.add('dragover');
}

function unhighlight(e) {
  dropZone.classList.remove('dragover');
}

function handleDrop(e) {
  const dt = e.dataTransfer;
  const files = dt.files;
  handleFiles(files);
}

function handleFiles(files) {
  files = [...files];
  files.forEach(uploadFile);
}

function uploadFile(file) {


  const fileItem = document.createElement('div');
  fileItem.className = 'file-item';

  const date = new Date().toLocaleDateString();
  const size = (file.size / (1024 * 1024)).toFixed(1);

  fileItem.innerHTML = `
    <div class="file-icon">📄</div>
    <div class="file-info">
      <div class="file-name">${file.name}</div>
      <div class="file-meta">${date} • ${size}Mb</div>
    </div>
    <button class="delete-btn">🗑️</button>
  `;

  filesList.appendChild(fileItem);

  // Handle delete button
  const deleteBtn = fileItem.querySelector('.delete-btn');
  deleteBtn.addEventListener('click', () => {
    fileItem.remove();
  });
}
