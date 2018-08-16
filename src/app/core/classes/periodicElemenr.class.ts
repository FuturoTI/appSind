import { PeriodicElementInterface } from './../../interfaces/periodic.interface';

export class PeriodicElement {


    elem: PeriodicElementInterface[];

    constructor() {
        this.elem = [
            { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
            { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
            { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
        ];
    }

    getPeriodicElement(): PeriodicElementInterface[] {
        return this.elem;
    }

}

