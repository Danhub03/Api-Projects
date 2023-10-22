// fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=eY6SlcJtIlFKDK8GBfEMz51NAitaZRWm')
// .then(res => res.json())
// .then(res => console.log(res))

const bookList = () => {
   fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=eY6SlcJtIlFKDK8GBfEMz51NAitaZRWm')
   .then(res => res.json())
   .then(info => bookData(info.results))
}

const bookData = (info) => {
    console.log(info)
    info.books.forEach(bookdetail => {
        document.getElementById('bookBody').innerHTML +=
        `
        <th scope="row"> ${bookdetail.rank}</th>
        <td scope="row">${bookdetail.title}</td>
        <td scope="row">${bookdetail.publisher}</td>
        `;
    });
}

bookList();