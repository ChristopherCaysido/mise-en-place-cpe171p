import React from "react";
import Authors from './Authors'
import './AuthorFlex.css'


function AuthorFinal(){
    return(
        <div className = 'authorflexbox-container'>
            <Authors title = 'Behind the Scenes'/>
            
            <Authors imgurl = 'https://media-exp1.licdn.com/dms/image/C5603AQG9hwR41gq12w/profile-displayphoto-shrink_200_200/0/1600354110132?e=1655337600&v=beta&t=9zXYegyUxZyVawsrCPbAYhaDNZj4EvvTm7FNHtxX9Vw'/>
            <Authors imgurl = 'https://scontent.fmnl2-2.fna.fbcdn.net/v/t1.6435-9/51487279_10210974068506663_1616119919160590336_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Ll6krIlTLQEAX-eCDwl&_nc_ht=scontent.fmnl2-2.fna&oh=00_AT9aAOPrJQCYKTjd2WjHrQwvQvbrhkVTj-tKYdJr3uZeCw&oe=628C620B'/>
            <Authors imgurl = 'https://scontent.fmnl2-2.fna.fbcdn.net/v/t1.15752-9/279039428_669851200978921_7112874271661304398_n.png?_nc_cat=103&ccb=1-5&_nc_sid=ae9488&_nc_ohc=QzWb-qJ5XQsAX8Rgo8x&tn=jFZlllSsKoEyuVP9&_nc_ht=scontent.fmnl2-2.fna&oh=03_AVIXNQBIdfiHfT-KekdYSBPqyCWfUSU-ckr_s-ZLeo3gEg&oe=628B9DD1'/>

        </div>
    );

}

export default AuthorFinal;