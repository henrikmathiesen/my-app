import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appUniqueInObjCollection' })
export class UniqueInObjCollectionPipe implements PipeTransform {

    transform(value: any[], decider1: string, decider2 = '') {
        if (!value) {
            return value;
        }

        if (decider1 && decider2) {
            return value
                .filter((thing, index, self) =>
                    index === self.findIndex((t) => (
                        t[decider1] === thing[decider1] && t[decider2] === thing[decider2]
                    ))
                );
        }

        return value
            .filter((thing, index, self) =>
                index === self.findIndex((t) => (
                    t[decider1] === thing[decider1]
                ))
            );

    }

}


/* 

ALT (better aproach)

let uniqueKeys: Set<string>;
let onlyUnique: (arbetsstallen: ArbetsstalleFlatModel[]) => ArbetsstalleFlatModel[];

uniqueKeys = new Set<string>();
onlyUnique = (arbetsstallen: ArbetsstalleFlatModel[]) => {
  const filtered = arbetsstallen.filter((a) => {
    const key = `${a.cfar}|${a.adress}|${a.postnr}|${a.postort}`;
    // Kontrollera om nyckeln redan finns i Set
    if (uniqueKeys.has(key)) {
      // Dublett hittad, vill ej ha med
      return false;
    } else {
      // Första gången denna kombination upstår då vill vi lägga till nyckeln och inkludera objektet
      uniqueKeys.add(key);
      return true;
    }
  });
  return filtered;
};


*/
