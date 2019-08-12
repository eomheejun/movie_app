import React,{Component} from 'react';
import PropTypes from "prop-types";

class App extends Component {
  state = {
    count: 0
  };
  
  add = () => {
    console.log("add");
  };

  minus = () => {
    console.log("minus")
  };

  render() {
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
};

// function Food({name, picture, rating}) {
//   return (
//     <div>
//       <h1>i like {name}</h1>
//       <h4>{rating}/5.0</h4>
//       <img src={picture} />
//     </div>
//   );
// }
// const foodILike = [
//   {
//     id:"1",
//     name: "Kimchi",
//     rating: 1.2,
//     image:
//       "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
//   },
//   {
//     id:"2",
//     name: "Samgyeopsal",
//     rating: 1.3,
//     image:
//       "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg"
//   },
//   {
//     id:"3",
//     name: "Bibimbap",
//     rating: 1.123,
//     image:
//       "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb"
//   },
//   {
//     id:"4",
//     name: "Doncasu",
//     rating: 1.5,
//     image:
//       "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg"
//   },
//   {
//     id:"5",
//     name: "Kimbap",
//     rating: 2.2,
//     image:
//       "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg"
//   }
// ];
// function App() {
//   return (
//     <div>
//       {foodILike.map(dish => (
//         <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
//       ))}
//     </div>
//   );
// }

// Food.propTypes = {
//   name:PropTypes.string.isRequired,
//   picture:PropTypes.string.isRequired,
//   rating:PropTypes.number
// };


export default App;