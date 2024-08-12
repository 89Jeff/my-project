import { StyleSheet, TouchableOpacity } from "react-native"


export const MoviesCard = (props) => {
    return (
        <TouchableOpacity style={styles.img} source={props.movieUrl}>
            <Image />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    img: {
        marginLeft: 20,
    },
});