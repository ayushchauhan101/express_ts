import diaryEntries from "../data/diaries";
import { DiaryEntry } from "../types";

function getEntries(): DiaryEntry[] {
	return diaryEntries;
}

function addDiary() {
	return null;
}

export default { getEntries, addDiary };
