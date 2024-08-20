function loadLayoutComponents() {
    fetch('nav.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('.navbar1').innerHTML = data;
        })
        .catch(error => console.error('Error loading layout:', error));
}