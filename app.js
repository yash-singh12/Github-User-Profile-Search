//lesgooo
document.getElementById("btn").addEventListener("click",fetchuser);

document.getElementById("usernotFoundData").style.display="none";
document.getElementById("userData").style.display="none";




function fetchuser(){
    const username = document.getElementById("username").value;
    //logic to call the API
     const url= "https://api.github.com/users/"+ username;

     fetch(url)
          .then((res)=>res.json())
          .then((data)=> {
            if (data?.status==404) 
           {document.getElementById("userNotFoundData").style.display = "block";
            document.getElementById("userData").style.display = "none";
            return;
          } 
          else
           {
            printUser(data);
          }

           
          })

.catch((error) => {
    console.log(error);
  });
}

function printUser(user) {
    document.getElementById("userData").innerHTML = `
      <img style="width:100px;border-radius:50%" src="${user.avatar_url}" alt="">
      <h3>${user.name}</h3>
      <p><b>Followers: </b> ${user.followers}</p>
      <p><b>Following: </b>${user.following}</p>
      <p>${user.bio}</p>
    `;
    document.getElementById("userNotFoundData").style.display = "none";
    document.getElementById("userData").style.display = "block";
  }