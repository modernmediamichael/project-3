// import React from 'react'

// // class WishList extends React.Component {
// //     constructor(props) {
// //       super(props);
// //       this.state = {
// //         wishes: []    
// //       };       
// //     }
// //     toggleActive(wishId) { 
// //       let newState = Object.assign({}, this.state)
// //       let wish = _.find(newState.wishes, {id: wishId});
// //       wish.have = !wish.have
// //       this.setState(newState)
// //     }
// //     render() {
// //       return (<SingleWish wishes={this.state.wishes} toggleActive={(wishId)=>this.toggleActive(wishId)} />);
// //     }  
// //   }
  
// //   class SingleWish extends React.Component  {
// //     render() {  
// //       const listItem = this.props.wishes.map((wish) => {
// //         return (
// //           <li className={wish.have ? 'active' : 'notactive'} key={wish.id}>
// //             <a >{wish.wish}</a>
// //             <span>{wish.have ? 'Have this one' : 'Want this one'}</span>
// //             <button onClick={() => this.props.toggleActive(wish.id)}>{wish.have ? 'I have lost this one' : 'Have this one'}</button>
// //           </li>
// //         );
// //       })
      
// //       return (
// //           <>
// //             <h1>Wishlist</h1>
// //             <ul className="wish-list">
// //                 { listItem }
// //             </ul>
// //           </>

// //         );
// //     }
// //   }

// export default WishList