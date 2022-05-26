import { Pitch, names } from "../constants/Pitch";
import { IsongsterrTabs, InewTuning } from "../models/TabInterfaces";
const BASEURL = "https://www.songsterr.com/api/";

export const songsterrSearch = async (
  string: string
): Promise<IsongsterrTabs | null> => {
  try {
    const response = await (
      await fetch(BASEURL + "songs?pattern=" + string + "&size=200", {
        mode: "no-cors",
      } as RequestInfo)
    ).json();

    const Tabs: IsongsterrTabs = response;

    for (const songs of Tabs) {
      for (const tracks of songs.tracks) {
        if (tracks.tuning)
          (tracks.tuning as InewTuning) = idToTuning(tracks.tuning as number[]);
      }
    }

    return Tabs;
  } catch (err) {
    if (err) {
      console.error(err);
      return null;
    }
    throw err;
  }
};

const idToString = (tuning: number[], octaves: boolean): string[] => {
  return tuning.map((tuning: number) => {
    const notes = Math.floor(tuning / 12) - 1;
    return Pitch[tuning % 12] + (octaves ? notes : "");
  });
};

function idToTuning(tuning: number[]): InewTuning {
  const octaves: string = idToString(tuning, true).reverse().join(" "),
    notes: string = idToString(tuning, false)
      .reverse()
      .map((tuning: string, octaves: number) =>
        octaves === tuning.length - 1 ? tuning.toLowerCase() : tuning
      )
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
