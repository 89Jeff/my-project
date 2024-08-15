import {FlatList, Image , ScrollView, StyleSheet , Text, TouchableOpacity, View} from "react-native"
import PrimeVideoLogo from "../../asserts/prime_video.png"
import AmazonLogo from "../../asserts/amazon_logo.png"
import MovieTheWhell from "../../asserts/movies/the_wheel_of_time.png"
import { MOVIESWATCHING } from "../../utils/moviesWatching.js"
import { MOVIESCRIME } from "../../utils/moviesCrimes.js"
import { MOVIESWATCH } from "../../utils/moviesWatch.js"
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

      <ScrollView showsVerticalScrollIndicator={false} style={styles.contentMovies}>
      <TouchableOpacity style={styles.movieImageThumbmail}>
        <Image source={MovieTheWhell} style={styles.movieImage}/>
      </TouchableOpacity>

      <Text style= {styles.movieText}>Continue Watching</Text>
      <FlatList
       data={MOVIESWATCHING}
       keyExtractor={(item) => item.id}
       renderItem ={({item}) => <MoviesCard movieURL={item.moviesURL} />}
       horizontal
       contentContainerStyle={styles.contentList}
       showsHorizontalScrollIndicator={false}
      />

      <Text style= {styles.movieText}>Crime Movies</Text>
      <FlatList
       data={MOVIESCRIME}
       keyExtractor={(item) => item.id}
       renderItem ={({item}) => <MoviesCard movieURL={item.moviesURL} />}
       horizontal
       contentContainerStyle={styles.contentList}
       showsHorizontalScrollIndicator={false}
      />

      <Text style= {styles.movieText}>Watch in your language</Text>
      <FlatList
       data={MOVIESWATCH}
       keyExtractor={(item) => item.id}
       renderItem ={({item}) => <MoviesCard movieURL={item.moviesURL} />}
       horizontal
       contentContainerStyle={styles.contentList}
       showsHorizontalScrollIndicator={false}
      />
    </ScrollView>      
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

  contentList: {
    paddingLeft: 18,
    paddingRight: 30,
  },

  movieText: {
    color: "#ffff",
    fontSize: 18,
    fontWeight: "700",
    padding: 15,
  },

  contentMovies: {

  }
});
