const imgElement = document.getElementById('dogImg');

fetch('https://dog.ceo/api/breeds/image/random')
.then(response => response.json())
.then(data => {
    
    const imageUrl = data.message;
    imgElement.src = imageUrl;
})
.catch(error => {
    console.error('Что-то пошло не так:', error);  
});