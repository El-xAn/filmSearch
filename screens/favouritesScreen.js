import React, { Component } from 'react';
import {ScrollView, View, Text, Image,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {styles} from '../styles/Styles';
import {cleanFavourite} from '../redux/action'

class FavouritesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'FAVOURITES',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>{this.state.title}</Text>
        </View>
        {/* <TouchableOpacity style={styles.searchButton} onPress={()=> this.props.cleanList}>
          <Text style={styles.buttonText}>CLEAN FAVORITE LIST</Text>
        </TouchableOpacity> */}
      <ScrollView>
        <View style={styles.catalog} >
          {this.props.favList.map((movies, index) => {
            let image = movies.image?{uri: movies.image?.medium} : require('../components/placeholder.png')
            return (
              <View key={index}>
                <Image style={styles.image} source = {image} />
                
                <Text style={styles.filmName}>{movies.name}</Text>
              </View>
            )
          })}
        </View>
      </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    favList: state.reducerForFav.favList,
  };
}

// const mapDispatchToProps = dispatch => {
//   return {
//     cleanList: () => dispatch(cleanFavourite())
//   };
// }

const myConnect = connect(mapStateToProps)(FavouritesScreen);
export default myConnect;