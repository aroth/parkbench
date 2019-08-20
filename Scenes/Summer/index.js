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
    <Layer source={ASSETS.Summer.sky}>
      <Layer source={ASSETS.Summer.hills_1}>
        <Layer source={ASSETS.Summer.hills_2}>
          <Layer source={ASSETS.Summer.midground}>
            <Entity
              asset={ASSETS.Summer.cloud}
              topOffset={-300}
              leftOffset={75}
              onPress={() => {
                alert("a cloud 1");
              }}
            />

            <Entity
              asset={ASSETS.Summer.cloud}
              scale={ASSETS.Summer.cloud.scale / 1.25}
              topOffset={-150}
              leftOffset={-50}
              onPress={() => {
                alert("a cloud 2");
              }}
            />

            <Entity
              asset={ASSETS.Summer.bench}
              onPress={() => {
                alert("a bench");
              }}
            />
            <Entity
              asset={ASSETS.Summer.head}
              debug={1}
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
