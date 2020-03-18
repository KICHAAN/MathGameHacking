import { TODO } from "./util";
import { Game } from "./game";
import { Item } from "./item";

export declare class Player {
	achievements: TODO;
	appearance: TODO;
	backpack: TODO;
	daily: TODO;
	dailyQuestions: TODO;
	encounters: TODO;
	equipment: TODO;
	house: TODO;
	kennel: TODO;
	onHPChange: TODO;
	quests: TODO;
	state: TODO;
	_remoteLogger: TODO;
	game: Game;
	immortal: boolean;
	inPVP: boolean;
	isClassCodeAttached: boolean;
	readonly isFocusModeEnabled: boolean; // Getter
	danceID?: unknown;
	emoteID?: unknown;
	appearanceChanged: boolean;
	broadcastId: number;
	catchAttempt: number;
	chatID: number;
	classIDs: number[];
	coOpTeam?: unknown;
	currentVideoSkillId?: unknown;
	curriculumTreeID: number;
	earlyBirdLastChance: boolean;
	grade: number;
	isOpponent: boolean;
	hasUsedTicket: boolean;
	/** Membership */
	it: boolean;
	justLeveled: boolean;
	/** A date ISOString */
	lastVisited: string;
	locationSelectionType: string; // home
	memberEndDate?: unknown; // possibly Date?
	memberPrompt: boolean;
	memberShareDate?: unknown; // possibly Date?
	/** A date ISOString */
	memberStartDate?: string;
	modifiers: {
		maxHearts: number;
		damage: number;
		miss: number;
		ignoreElement: number;
		potion?: unknown;
	};
	overrideClassSelect: boolean;
	owners: {
		id: number;
		ownerID: number;
		startDate: number;
	}[];
	parentEmail: string;
	parentalLink: boolean;
	password: string;
	playerParents: unknown[];
	playerTeachers: {
		id: number;
		type: string;
		startDate: number;
	}[];
	pvpHP: number;
	registerDate: Date;
	readonly saveEnabled: boolean; // Getter
	source?: unknown;
	spellStreak: number;
	starsEarned: number;
	starsReward: number;
	starsRewardBase: number;
	starsToProcess: number;
	data: PlayerData;
	team?: unknown;
	transformID?: unknown; // Possibly number?
	tutorialCompletedThisSession: boolean;
	type: string; // Possibly "A" | "B" | "C" | "D" | "F"
	updated: boolean;
	userID: number;
	username: string;
	world: {
		id: number;
		full: number;
		name: string;
		meta: unknown; // Seems to be {type: "hat", ID: 47} for me.
		count: number;
	};
	_isFocusModeEnabled: false;
	_saveEnabled: true;
	name: PlayerName;
	addAsset(asset: unknown): void;
	addBattle(): void;
	addBountyScore(bountyScore: number): void;
	addLoss(): void;
	addSpell(spell: number): void;
	addStars(stars: number, prop1: boolean, prop2: boolean): boolean;
	addWin(): void;
	anyPetsAboveLevel(level: number): boolean;
	canCatch(): boolean;
	canSpin(): boolean;
	castSpell(prop0: boolean): void;
	changeCurrentHearts(prop0: number, prop1: number): void;
	changeCurrentHeartsPercent(percent: number): void;
	changeEnergy(energy: number): void;
	changeGold(gold: number, prop1: boolean): void;
	checkVersion(): void;
	completeDaily(daily: keyof PlayerData, completed: boolean): void;
	completeTower(tower: number): void;
	constructor(prop0: unknown);
	createDataClone(): Player;
	createRandom(): void;
	diffAttackSlots(level: number): void;
	equip(
		id: number,
		type: "follow" | "hat" | "outfit" | "spellRelic" | "weapon" | "boots"
	): boolean;
	evolve(unused0: never, unused1: never): never;
	forceSaveCharacter(): void;
	getAllAttacks(): number[];
	getAllowsHouseVisitors(): boolean;
	getArenaPoints(): number;
	getAttacks(): number[];
	getAvailableEvolutions(): unknown[]; // What does this return?
	getBaseMaxHearts(): number;
	getBattles(): number;
	getBountyScore(): number;
	getColiseum(): number;
	getCurrentBamSpells(): number[];
	getCurrentHearts(): number;
	getDailyQuestions(): Player["dailyQuestions"];
	getDamageBonus(): ReturnType<Player["equipment"]["getDamageBonuses"]>;
	getDataAndClear(): Partial<Player>;
	getElement(): "wizard";
	getEnergy(): number;
	getEquipmentSpell(): { ID: number, type: unknown, locked: boolean };
	getFirstName(): string;
	getGold(): number;
	getHeartBonus(): number;
	getID(): Player["userID"];
	getLatestClassIDLegacy(): number;
	getLevel(): number;
	getLevelingCurve(level: number): unknown[];
	getLosses(): number;
	getMaxHearts(level: number): number;
	getMaxTimeForCurrentMorphMarbleEffect(): number;
	getName(): string;
	getNameWithoutNickname(): string;
	getNativeSpell(prop0: unknown, prop1: unknown[], prop2: unknown, prop3: unknown): unknown;
	getNumAttacks(): number;
	getNumRelics(): number;
	getPercentToLevel(): number;
	getPlayerClass(): string;
	getPlayerData(): PlayerData;
	getRegisterDate(): Date | null;
	getSettings(): PlayerData["settings"];
	getSpellAssets(): unknown[];
	getSpellStreak(): Player["spellStreak"];
	getStarReward(): number;
	getStarRewardByDamage(damage: number): number;
	getStars(): number | null;
	getStarsToLevel(): number;
	getStatHealth(): number;
	getStatPower(): number;
	getTeamScore(): number;
	getTowerProgress(): number;
	getUpdatedData(prop0: unknown, prop1: unknown): unknown;
	getWins(): number;
	hasCompletedTowerTownTutorial(): boolean;
	hasCompletedTutorial(): boolean;
	hasHouseItem(item: Item): boolean;
	hasMaxQuantityOfItem(type: unknown, item: unknown): boolean;
	hasMembership(): Player["it"];
	hasValidatedParentEmail(): boolean;
	hasValidatedTeacherEmail(): boolean;
}
export declare interface PlayerName {
	data: {
		firstName: number;
		lastName: number;
		middleName: number;
		nickname: unknown;
	};
	gender: "male" | "female";
	localizer: { dataSource: TODO };
}
export declare class PlayerData {
	allowsHouseVisitors: boolean;
	arena: number;
	atHomeTimestamp: number;
	atSchoolTimestamp: number;
	battleCounter: number;
	bountyScore: number;
	daily: {
		festivalName: string;
		isComplete: boolean;
		lastStarted: number;
		location: string;
		monsterID: number;
	};
	deserter: number;
	dungeonRunsTimeStamps: {
		dungeonName: string;
		lastRunTimeStamp: number;
	}[];
	energy: number;
	gold: number;
	hp: number;
	lastArchiveRun: number;
	level: number;
	memberStarsExpirationDate: number;
	nm: number;
	numSpins1: number;
	numSpins2: number;
	school: string;
	settings: {
		bgmVolume: number;
		voiceVolume: number;
		sfxVolume: number;
	};
	spellbook: number[];
	spells: number[];
	spinDate1: number;
	spinDate2: number;
	stars: number;
	startDate: number;
	storedMemberStars: number;
	team: number;
	titanID: number;
	tower: number;
	trialSkipAvailable: boolean;
	trialStartDate: string;
	versionID: number;
	win: number;
	zone: string;
}
// TODO: Get types for unknowns.