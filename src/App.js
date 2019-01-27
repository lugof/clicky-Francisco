import React, { Component } from 'react';
import Navbar from "./components/navbar/navbar";
import Header from "./components/header/header";
import Container from "./components/container/fullcontainer"
import cartoons from "./cartoons.json"
import Square from "./components/square/Square"

let randNumber1
let randNumber2
let randNumber3
let randNumber4
let randNumber5
let whattodo = "Click on an image to begin!"
let randArray=[];
let a1;
let allCartoons = cartoons;


let topscore=0;
let score=0;
class App extends Component{
    state={
      theCartoons: allCartoons,
      theScore:0
    }

      

      random1=() =>{
        randArray=[];
        randNumber1=  Math.floor((Math.random() * 11) + 1);
        randNumber2= Math.floor((Math.random() * 11) + 1);
        randNumber3= Math.floor((Math.random() * 11) + 1);
        randNumber4= Math.floor((Math.random() * 11) + 1);
        randNumber5= Math.floor((Math.random() * 11) + 1);

        randArray.push(randNumber1);
          if(randNumber1 != randNumber2 && randNumber1 != randNumber3 && randNumber1!= randNumber4 && randNumber1!=randNumber5 && randNumber2 != randNumber3 && randNumber2 != randNumber4 && randNumber2 != randNumber5 && randNumber3!=randNumber4 && randNumber3!=randNumber5 && randNumber4 != randNumber5){
         randArray.push(randNumber2);
         randArray.push(randNumber3);
         randArray.push(randNumber4);
         randArray.push(randNumber5);
          }
          else{
            this.random1();
            }

      }


      shuffling=(array)=>{
       
        for(let i=0; i<3; i++){
        
          console.log(randArray);
          let temp;
          temp= array[i];
          array[i]=array[randArray[i]];
          array[randArray[i]]= temp;
          allCartoons= array
        }}


    clickedCartoon =id=>{
      this.random1();
      console.log(allCartoons);
     for(let i=0; i<12;i++){
        if(allCartoons[i].id===id){
                console.log("comparamos id: "+allCartoons[i].id+ " con "+ id );
            if(allCartoons[i].isClicked===false){
                console.log("revisamos si "+id+ " tiene false o true: "+ allCartoons[i].isClicked);
              this.shuffling(allCartoons)
              score=score++;
              this.setState({ theScore: score  })
            }
            else { alert("you selected the same image twice so  Try again")
            this.random1();
              this.shuffling(allCartoons);
              score=0
              this.setState({ theScore:score  })
                }
                allCartoons[i].isClicked = true;

     }else{console.log("not this one")}
 
        }
      }
        
    

    





  render() {
    
  return (
  <div>
  <Navbar whattodo={whattodo}  score={score} topscore={topscore}/>
  <Header />
  <Container>
    <div className="row">
{allCartoons.map(cartoon=>(
  <Square
    id={cartoon.id}
    key={cartoon.id}
    image={cartoon.image}    
    clickedCartoon={this.clickedCartoon}
    isClicked={cartoon.isClicked}
    />
))}
</div>
</Container>
    </div>
  )
}
}



export default App;
