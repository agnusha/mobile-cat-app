import fetch from "node-fetch";
import { idToTuning } from "./idToTuning";
import { IsongsterrTabs, InewTuning } from "../models/TabInterfaces";
const BASEURL = "https://www.songsterr.com/api/";

export const songsterrSearch = async (
  string: string
): Promise<IsongsterrTabs | null> => {
  try {
    const response = await (
      await fetch(BASEURL + "songs?pattern=" + string + "&size=200")
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
