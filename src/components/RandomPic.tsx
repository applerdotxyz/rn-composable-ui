import React, { useEffect, useState } from "react";
import { Button, Image, Text, View } from "react-native";

export const RandomPic = ({
  label,
  style,
  setAppState,
  appState,
  getEvents,
}) => {
  const [randomCatImg, setRandomCatImg] = useState(null);

  const fetchRandomCat = () => {
    setRandomCatImg("");
    fetch(`https://aws.random.cat/meow`)
      .then((res) => res.json())
      .then((catInfo) => {
        setRandomCatImg(catInfo.file);
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
          onPress={() => {
            fetchRandomCat();
            setAppState({
              bodyFooter: {
                ui: "About",
                props: { label: "bodyFooter1" },
                children: <Text>Hello from RandomPic</Text>,
              },
              bodyContent: {
                ui: "Home",
                props: { label: "actioncomp-2" },
                children: null,
              },
            });
          }}
          title={`New Image ${label}`}
        ></Button>
      </View>
      {randomCatImg !== "" ? (
        <View>
          <Image
            source={{
              uri: randomCatImg,
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
