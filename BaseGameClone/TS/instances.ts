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
  gold: number,
  inventory : any[],
}
