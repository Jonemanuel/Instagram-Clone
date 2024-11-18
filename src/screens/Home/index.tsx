import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Logo from "../../assets/logo.svg";
import Message from "../../assets/message.svg";
import Stroke from "../../assets/stroke.svg";
import foto from "../../assets/foto.png";
import foto2 from "../../assets/foto2.png";
import foto3 from "../../assets/foto3.png";
import foto4 from "../../assets/foto4.png";
import Points from '../../assets/points.svg';
import image from "../../assets/image.png";
import Heart from "../../assets/Heart.svg";
import Share from "../../assets/Share.svg";
import Bookmark from "../../assets/Bookmark.svg";
import Comment from "../../assets/Comment.svg";

const DATA = [
  { id: Math.random().toString(), photoURL: foto },
  { id: Math.random().toString(), photoURL: foto2 },
  { id: Math.random().toString(), photoURL: foto3 },
  { id: Math.random().toString(), photoURL: foto4 },
  { id: Math.random().toString(), photoURL: foto },
  { id: Math.random().toString(), photoURL: foto2 },
  { id: Math.random().toString(), photoURL: foto3 },
  { id: Math.random().toString(), photoURL: foto4 },
];

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo />
        <View style={styles.headerOptions}>
          <Stroke />
          <Message />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.stories}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={DATA}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.storiesCard}>
                <Image style={styles.storiesCardImage} source={item.photoURL} />
              </View>
            )}
          />
        </View>

        <View style={styles.content}>
          <View style={styles.contentHeader}>
            <View style={styles.contentHeaderLeft}>
              <Image style={styles.contentHeaderLeftImage} source={foto} />
              <Text style={styles.contentHeaderLeftText}>Chloe</Text>
            </View>
            <Points />
          </View>
          <Image style={styles.contentImage} source={image} />
        </View>

        <View style={styles.contentFooter}>
          <View style={styles.contentFooterIcons}>
            <View style={styles.contentFooterLeft}>
              <Heart />
              <Comment />
              <Share />
            </View>
            <Bookmark />
          </View>
          <View style={styles.footerText}>
            <Text style={styles.footerDescription}>
              Todos esses que aí estão Atravancando meu caminho, Eles passarão... Eu passarinho!
            </Text>
            <Text style={styles.footerComments}>View all 10 comments</Text>
            <Text style={styles.footerTime}>7 hours ago See Translation</Text>
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.contentHeader}>
            <View style={styles.contentHeaderLeft}>
              <Image style={styles.contentHeaderLeftImage} source={foto2} />
              <Text style={styles.contentHeaderLeftText}>Jon</Text>
            </View>
            <Points />
          </View>
          <Image style={styles.contentImage} source={image} />
        </View>

        <View style={styles.contentFooter}>
          <View style={styles.contentFooterIcons}>
            <View style={styles.contentFooterLeft}>
              <Heart />
              <Comment />
              <Share />
            </View>
            <Bookmark />
          </View>
          <View style={styles.footerText}>
            <Text style={styles.footerDescription}>
              Todos esses que aí estão Atravancando meu caminho, Eles passarão... Eu passarinho!
            </Text>
            <Text style={styles.footerComments}>View all 5 comments</Text>
            <Text style={styles.footerTime}>7 hours ago See Translation</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
      },
      scrollContainer: {
        paddingBottom: 20,
      },
      header: {
        marginTop: 40,
        paddingHorizontal: 10,
        width: '100%',
        height: 56,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
      },
      headerOptions: {
        flexDirection: 'row',
        gap: 10,
      },
      stories: {
        height: 114,
        paddingLeft: 10,
        paddingVertical: 10,
      },
      storiesCardImage: {
        width: 64,
        height: 64,
        borderWidth: 2,
        borderColor: '#F7B55A',
        borderRadius: 50,
      },
      content: {
        marginBottom: 10,
      },
      contentHeader: {
        height: 52,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
      },
      contentHeaderLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
      },
      contentHeaderLeftImage: {
        width: 30,
        height: 30,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#fff',
      },
      contentHeaderLeftText: {
        color: '#fff',
      },
      contentImage: {
        width: '100%',
        height: 355,
      },
      contentFooter: {
        paddingHorizontal: 10,
      },
      contentFooterIcons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      contentFooterLeft: {
        flexDirection: 'row',
        gap: 10,
      },
      footerText: {
        marginTop: 10,
        gap: 10,
      },
      footerDescription: {
        color: '#fff',
      },
      footerComments: {
        color: '#fff',
      },
      footerTime: {
        color: '#fff',
        fontSize: 10,
      },
});
