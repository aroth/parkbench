/**
 * @format
 * @flow
 */

import React from "react";
import { Image } from "react-native";

import Layer from "../../Components/Layer";
import Entity from "../../Components/Entity";

import ASSETS from "../../Assets";

const Summer = () => {
  return (
    <Layer source={ASSETS.Winter.sky}>
      <Layer source={ASSETS.Winter.hills_1}>
        <Layer source={ASSETS.Winter.hills_2}>
          <Layer source={ASSETS.Winter.midground}>
            <Entity
              asset={ASSETS.Winter.cloud}
              topOffset={-300}
              leftOffset={75}
              onPress={() => {
                alert("a cloud 1");
              }}
            />

            <Entity
              asset={ASSETS.Winter.cloud}
              scale={ASSETS.Winter.cloud.scale / 1.25}
              topOffset={-150}
              leftOffset={-50}
              onPress={() => {
                alert("a cloud 2");
              }}
            />

            <Entity
              asset={ASSETS.Winter.bench}
              onPress={() => {
                alert("a bench");
              }}
            />
            <Entity
              asset={ASSETS.Winter.head}
              debug={0}
              onPress={() => {
                alert("~*Chortle*~");
              }}
            />
          </Layer>
        </Layer>
      </Layer>
    </Layer>
  );
};

export default Summer;
