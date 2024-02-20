const bookForm = document.getElementById('bookForm');
  const bookList = document.getElementById('bookList');

  bookForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const quantity = parseInt(document.getElementById('quantity').value);

    if (title && author && quantity) {
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${quantity}</td>
        <td><button onclick="deleteRow(this)">Delete</button></td>
      `;
      bookList.appendChild(newRow);
      bookForm.reset();
    } else {
      alert('Please fill in all fields');
    }
  });

  function deleteRow(btn) {
    const row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }

  function searchBooks() {
    const input = document.getElementById('search').value.toUpperCase();
    const rows = document.querySelectorAll('#bookList tr');

    rows.forEach(row => {
      const title = row.getElementsByTagName('td')[0];
      if (title) {
        const textValue = title.textContent || title.innerText;
        if (textValue.toUpperCase().indexOf(input) > -1) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      }
    });
  }