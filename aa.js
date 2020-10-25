success: function(users) { 
    for (var i = 0; i < users.length; i++) { 
        var user = document.createElement("div"); 
        user.id = 'user-' + users[i].id; 
        user.className = 'user'; 
        span = document.createElement('span'); 
        span.innerHTML = users[i].name; 
        albums = document.createElement('ul'); 
        albums.className = 'albums'; 
        user.appendChild(span); 
        user.appendChild(albums); 
        user.addEventListener("click", function(){ 
        var that = this; 
        var userId = this.id.split('-')[1]; 
        var dest = this.getElementsByClassName('albums')[0]; 
        dest.innerHTML = ''; 
        }); 
        document.getElementById('users').appendChild(user); 
    } 
} 