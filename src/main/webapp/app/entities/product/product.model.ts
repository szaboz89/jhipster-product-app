import { BaseEntity } from './../../shared';

export class Product implements BaseEntity {
    constructor(
        public id?: number,
        public name?: string,
        public description?: string,
        public releaseDate?: any,
        public price?: number,
        public available?: boolean,
    ) {
        this.available = false;
    }
}
