document.addEventListener('DOMContentLoaded', function(){
    var API_LINK = "https://api.github.com/users/"
    var USERNAME = "raphaelboucas"

    const nameElement = document.getElementById('name');
    const usernameElement = document.getElementById('username');
    const avatarElement = document.getElementById('avatar');
    const repositoryElement = document.getElementById('repository');
    const followersElement = document.getElementById('followers');
    const followingeElement = document.getElementById('following');
    const linkElement = document.getElementById('link');

    fazRequisição();
            
            
        




    function fazRequisição() {

        try {
            fetch(`${API_LINK}${USERNAME}`)
            .then(function(response){
                if (response.ok) {
                return response.json();
                }   else {
                    console.log(`Erro do tipo ${response.status}`)
                }
                })
                .then(function(json){
                    nameElement.innerHTML = json.name;
                    usernameElement.innerHTML = json.login;
                    avatarElement.setAttribute("src", json.avatar_url);
                    repositoryElement.innerHTML = json.public_repos;
                    followersElement.innerHTML =  json.followers;
                    followingeElement.innerHTML = json.following;
                    linkElement.setAttribute("href", json.html_url);
                    linkElement.setAttribute("target", "_blank");
                })
            
        } catch {
            console.log("Erro na requisição.");

        }





    }




})