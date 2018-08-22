export interface IRegionMySuffix {
    id?: number;
    regionName?: string;
    name?: string;
}

export class RegionMySuffix implements IRegionMySuffix {
    constructor(public id?: number, public regionName?: string, public name?: string) {}
}
