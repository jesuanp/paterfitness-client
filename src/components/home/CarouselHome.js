import {View, Text, Image, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';

export default function CarouselHome ({videos, navigation}) {

    const handlePress = (e) => {

        navigation.navigate('video', {
            title: e.title,
            videoId: e.videoId
        })
    }

    return (
        <ScrollView horizontal={true} style={styles.container}>

            {
                videos && videos.map((e, i) => (
                    <TouchableOpacity
                    onPress={() => handlePress(e)}
                        key={i}
                    >
                        <View>
                            <Image style={styles.img} source={{uri: `http://img.youtube.com/vi/${e.videoId}/0.jpg`}} />
                            <Text style={styles.textImg}>
                                {e.title}
                            </Text>
                        </View>
                    </TouchableOpacity>
                ))
            }
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        // backgroundColor: '#141414',
        marginLeft: 10,
        marginRight: 10,
        paddingBottom: 5,
        // height: 130,
    },
    img: {
        width: 220,
        height: 130,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 10,
    },
    textImg: {
        marginLeft: 10,
        marginTop: 5,
        width: 220,
        overflow: 'hidden'
    },
    subText: {
        color: 'gray',
        marginLeft: 10,
    }
  });
