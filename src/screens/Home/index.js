import {FlatList, Image , StyleSheet , Text, TouchableOpacity, View} from "react-native"
import PrimeVideoLogo from "../../asserts/prime_video.png"
import AmazonLogo from "../../asserts/amazon_logo.png"
import MovieTheWhell from "../../asserts/movies/the_wheel_of_time.png"
import { MOVIESWATCHING } from "../../utils/moviesWatching.js"
import { MoviesCard } from "../../components/MoviesCard"

export const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <Image style={styles.primeLogoImg} source={PrimeVideoLogo}/>
          <Image style={styles.amazonLogoImg} source={AmazonLogo}/>
      </View>

      <View style={styles.category}>
          <TouchableOpacity>
            <Text style={styles.categoryText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.categoryText}>TV Shows</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.categoryText}>Movies</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.categoryText}>Kids</Text>
          </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.movieImageThumbmail}>
        <Image source={MovieTheWhell} style={styles.movieImage}/>
      </TouchableOpacity>

      <FlatList
       data={MOVIESWATCHING}
       keyExtractor={(item) => item.id}
       renderItem ={({item}) => <MoviesCard movieURL={item.moviesURL} />}
       horizontal
       contentContainerStyle={styles.contentList}
       showsHorizontalScrollIndicator={false}
      />
          
    </View>
  ); 
};

const styles = StyleSheet.create({

  container: {
    flex: 1 ,
    backgroundColor: "#232F3E",
    alignItems: "flex-start"
  },

  header: {
    width: "100%",
    paddingTop: 80,
    alignItems: "center",
    justifyContent: "center"
  },

  amazonLogoImg: {
    marginTop: -32,
    marginLeft: 30,
  },

  category: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 15,
  },

  categoryText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#fff"
  },

  movieImageThumbmail: {
    width: "100%",
    alignItems: "center"
  },
});
