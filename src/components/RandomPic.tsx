import React, { useState, useEffect } from "react";
import { View, Image, Button, Text } from "react-native";

export const RandomPic = ({ label, style, setAppState, appState }) => {
  const [randomCatImg, setRandomCatImg] = useState(null);

  const fetchRandomCat = () => {
    setRandomCatImg("");
    fetch(`https://aws.random.cat/meow`)
      .then((res) => res.json())
      .then((catInfo) => {
        setRandomCatImg(catInfo.file);
        // setAppState({
        //   ...appState,
        //   ui: { ...appState.ui, home: "About", actioncomp: "RandomPic" },
        //   props: {
        //     ...appState.props,
        //     home: { label: "home->1" },
        //     actioncomp: { label: "actioncomp-2" }
        //   },
        //   children: {
        //     ...appState.children,
        //     home: <Text>Hello About</Text>,
        //     actioncomp: null
        //   }
        // });
      });
  };

  useEffect(() => {
    if (randomCatImg === null) {
      fetchRandomCat();
    }
  });

  return (
    <View>
      <View>
        <Button
          onPress={() => fetchRandomCat()}
          title={`New Image ${label}`}
        ></Button>
      </View>
      {randomCatImg !== "" ? (
        <View>
          <Image
            source={{
              uri: randomCatImg
            }}
            style={{ width: 170, height: 180, ...style }}
          />
        </View>
      ) : (
        <Text>Loading Image</Text>
      )}
    </View>
  );
};
