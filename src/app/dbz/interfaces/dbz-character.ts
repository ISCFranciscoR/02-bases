type CharacterId = string;
export interface DBZCharacter {
  id: CharacterId
  name: string;
  attack?:         string;
  race?:           string;
  gender?:         string;
  bio?:            string;
  health?:         string;
  defense?:        string;
  kiRestoreSpeed?: string;
  abilities?:      string[];
  img?:            string;
}
