import { names, Pitch } from "../constants/Pitch";
import {
  GroupedTracks,
  InewTuning,
  IsongsterrTabs,
} from "../models/TabInterfaces";
const BASEURL = "https://www.songsterr.com/api/";

export const songsterrSearch = async (
  string: string
): Promise<GroupedTracks | null> => {
  try {
    const response = await (
      await fetch(BASEURL + "songs?pattern=" + string + "&size=20", {
        mode: "no-cors",
      } as RequestInit)
    ).json();

    const tabs: IsongsterrTabs = response;

    for (const songs of tabs) {
      for (const tracks of songs.tracks) {
        if (tracks.tuning)
          (tracks.tuningEnriched as InewTuning) = idToTuning(
            tracks.tuning as number[]
          );
      }
    }

    return groupBy(["artist"])(tabs) as GroupedTracks;
  } catch (err) {
    if (err) {
      console.error(err);
      return null;
    }
    throw err;
  }
};

const groupBy =
  <T>(keys: (keyof T)[]) =>
  (array: T[]): Record<string, T[]> =>
    array.reduce((objectsByKeyValue, obj) => {
      const value = keys.map((key) => obj[key]).join("-");
      objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
      return objectsByKeyValue;
    }, {} as Record<string, T[]>);

const idToString = (tuning: number[], octaves: boolean): string[] => {
  return tuning.map((t: number) => {
    const notes = Math.floor(t / 12) - 1;
    return Pitch[t % 12] + (octaves ? notes : "");
  });
};

function idToTuning(tuning: number[]): InewTuning {
  const octaves: string = idToString(tuning, true).reverse().join(" "),
    notes: string = idToString(tuning, false)
      .reverse()
      .map((t: string, o: number) => (o === t.length - 1 ? t.toLowerCase() : t))
      .join(" ");

  let name = "";
  if (tuning.length in names && octaves in names[tuning.length])
    name = names[tuning.length][octaves];

  return {
    octaves,
    notes,
    name,
  };
}
