import React, { useState } from 'react';
import Nav from './Nav.js'
function Person({person,index,likeCount,dislikeCount}){
  return(
    <div>

  
    <div class="card" >
  
  <img src={person.personImage} class="card-img-top" style={{width: 100}} alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{person.title}</h5>
    <p class="card-text">{person.description}</p>
    <a href={person.url} class="btn btn-primary">Read More</a><br></br><br></br>

    <strong>{person.like}</strong> <button class="btn btn-primary" onClick={() => likeCount(index)}>Like </button>    
    <strong>{person.dislike}</strong> <button class="btn btn-danger" onClick={() => dislikeCount(index)}>DisLike</button>

  </div>
</div>
    


</div>
  )

}
function App() {
  const [persons, upPerson] = useState([
    {
      title: "Sheikh Mujibur Rahman (1920-1975) Sheikh Mujib ",
      description: `Sheikh Mujibur Rahman (1920-1975) Sheikh Mujib is widely regarded as 
      the founding father of modern Bangladesh. In the pre-independence years, he was a strong 
      advocate of socialist policy and ending discrimination against Bengalis. After the War of Liberation, 
      he served as the first President of Bangladesh and later the Prime Minister. He was assassinated in 1975
       by junior army officers`,  
      url: "https://www.biographyonline.net/people/famous/bangladesh.html",
      personImage: 'mujib.jpg',
      like: 0,
      dislike: 0
    },
    {
      title: "Abdul Hamid Khan Bhashani (1880–1976)  ",
      description: `Abdul Hamid Khan Bhashani (1880–1976) Bhashani was a leading Muslim advocate of Bengali 
      independence. He was a committed socialist becoming popular amongst the poorest sections of society. 
      His boycottof the 1970 election was instrumental in fermenting the Bangladesh independence movement.`,  
      url: "https://www.biographyonline.net/people/famous/bangladesh.html",
      personImage: 'Bhasani.jpg',
      like: 0,
      dislike: 0
    },
    {
      title: "Surya Sen (1894 – 1934) ",
      description: `Surya Sen (1894 – 1934) Born in Chittagong, Surya Sen was a leading Indian nationalist, elected
       President of the Indian National Congress in 1918. In 1930, he led a raid on the Chittagong armoury,
       where he hoped to proclaim Chittagong independent. He escaped but was later caught and executed in 1933.`,  
      url: "https://www.biographyonline.net/people/famous/bangladesh.html",
      personImage: 'Surya_Sen.jpg',
      like: 0,
      dislike: 0
    },
  ]);
    const likeCount= index => {
      const newPerson = [...persons];
      newPerson[index].like++;
      upPerson(newPerson);
    };
  
    const dislikeCount= index => {
      const newPerson = [...persons];
      newPerson[index].dislike++;
      upPerson(newPerson);
    };
  return (
    <div className="App">
      <Nav/>
      <div >
      {persons.map((person, index) => (
          
              <Person
                key={index} 
                index={index} 
                person={person} 
                likeCount={likeCount}
                dislikeCount={dislikeCount}
                />
           
          ))}
        
  
 
</div>
     
    </div>
  );
}

export default App;
