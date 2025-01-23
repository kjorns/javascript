var xhr = new XMLHttpRequest();

xhr.onload = function() {
    if(xhr.status === 200) {
        responseObject = JSON.parse(xhr.responseText);
        
        var newContent = '';
        for (var i = 0; i < responseObject.images.length; i++) {
            newContent += '<section>';
            newContent += '</section>';
            newContent += '<img src="' + responseObject.images[i].image + '" ';
            newContent += '</section>';newContent += '<p>' + responseObject.images[i].description + '</p>';
            
        }
        
        document.getElementById('content').innerHTML = newContent;
        
    }
};

xhr.open('GET', 'index.json', true);
xhr.send(null);