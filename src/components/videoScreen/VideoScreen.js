import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";


function VideoScreen ({route}) {

    const [playing, setPlaying] = useState(true);

    const {title, videoId} = route.params;

    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <YoutubePlayer
                height={300}
                play={playing}
                videoId={videoId}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: "center"
    }
})

export default VideoScreen;
