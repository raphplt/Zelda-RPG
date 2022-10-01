export default interface CharStats {
  id : number,
  name: string,
  hp: number,
  mp: number,
  str : number,
  int: number,
  def: number,
  res: number,
  spd: number,
  luck: number,
  race: number,
  class: number,
  rarity: number,
}

export interface Player {
  xp: number,
  level: number;
  gold: number,
  inventory : any[],
}

export interface Classe {
  id: number,
  name: string,
  strengths: any[],
  weaknesses: any[],
  attack_type: string,
  alignment: string,
  rarity: number
}

export interface Race {
  id: number,
  name: string,
  strengths: any[],
  weaknesses: any[],
  rarity: number
}
