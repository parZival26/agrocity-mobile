



export interface PlantWiki {
    id: number;
    commonName: string;
    scientificName: string;
    family: string;
    imageURL: string;
}

enum SunLight {
    sol_directo = 'sol_directo',
    semisombra = 'semisombra',
    sombra = 'sombra',
  }
  
  enum LifeCycle {
    anual = 'anual',
    bianual = 'bianual',
    perenne = 'perenne',
  }
  
  enum PlantType {
    hierba = 'hierba',
    arbusto = 'arbusto',
    arbol = 'arbol',
    trepadora = 'trepadora',
  }
  

export interface PlantDetail {
    id: number;
    commonName: string;
    scientificName: string;
    family: string;
    type: PlantType;
    lifeCycle: LifeCycle;
    climate: string;
    maxHeigth: number;
    minHeigth: number;
    irrigation: string;
    sunLight: SunLight;
    sowingSeason: string;
    harvestSeason: string;
    description: string;
    imageURL: string;
}