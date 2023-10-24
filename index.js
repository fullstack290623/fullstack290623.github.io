   function get() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => {
                const tableBody = document.querySelector('#todo-table tbody');

                data.forEach(todo => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${todo.id}</td>
                        <td>${todo.title}</td>
                        <td>${todo.completed ? 'Yes' : 'No'}</td>
                    `;
                    tableBody.appendChild(row);
                });
            })
            .catch(error => console.error('Error fetching data:', error));
   }
