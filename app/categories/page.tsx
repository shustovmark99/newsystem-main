import stylesButtonAnimal from '@/app/categories/animal.module.css';
import stylesButtonCell_culture from '@/app/categories/cell culture.module.css';
import stylesButtonCell from '@/app/categories/cell.module.css';
import stylesButtonFungi from '@/app/categories/fungi.module.css';
import stylesButtonGenetic_material from '@/app/categories/genetic material.module.css';
import stylesButtonHuman from '@/app/categories/human biospecimen.module.css';
import stylesButtonMolecule from '@/app/categories/molecule.module.css';
import stylesButtonOrgan from '@/app/categories/organ.module.css';
import stylesButtonOrganelle from '@/app/categories/organelle.module.css';
import stylesButtonOther from '@/app/categories/other.module.css';
import stylesButtonTissue from '@/app/categories/tissue.module.css';
import stylesButtonViruses from '@/app/categories/virus.module.css';
import stylesButtonPlant from '@/app/categories/plant.module.css';
import stylesButtonProtist from '@/app/categories/protist.module.css';
import stylesButtonProkaryote from '@/app/categories/prokaryote.module.css';
import stylesContainer from '@/app/categories/Container.module.css';
import Link from 'next/link';


export default function Page() {
    return (
        <div className={`${stylesContainer.container} ${stylesButtonAnimal.container}`}>
            <Link href="/categories/animal">
            <button className={stylesButtonAnimal.button}>animal</button>
            </Link>
            <Link href="/categories/plant">
            <button className={stylesButtonPlant.button}>plant</button>
            </Link>
            <Link href="/categories/fungi">
            <button className={stylesButtonFungi.button}>fungi</button>
            </Link>
            <Link href="/categories/protist">
            <button className={stylesButtonProtist.button}>protist</button>
            </Link>
            <Link href="/categories/prokaryote">
            <button className={stylesButtonProkaryote.button}>prokaryote</button>
            </Link>
            <Link href="/categories/virus">
            <button className={stylesButtonViruses.button}>virus</button>
            </Link>
            <Link href="/categories/organ">
            <button className={stylesButtonOrgan.button}>organ</button>
            </Link>
            <Link href="/categories/humanbiospecimen">
            <button className={stylesButtonHuman.button}>human biospecimen</button>
            </Link>
            <Link href="/categories/tissue">
            <button className={stylesButtonTissue.button}>tissue</button>
            </Link>
            <Link href="/categories/cellculture">
            <button className={stylesButtonCell_culture.button}>cell culture</button>
            </Link>
            <Link href="/categories/cell">
            <button className={stylesButtonCell.button}>cell</button>
            </Link>
            <Link href="/categories/geneticmaterial">
            <button className={stylesButtonGenetic_material.button}>genetic material</button>
            </Link>
            <Link href="/categories/organelle">
            <button className={stylesButtonOrganelle.button}>organelle</button>
            </Link>
            <Link href="/categories/molecule">
            <button className={stylesButtonMolecule.button}>molecule</button>
            </Link>
            <Link href="/categoriesother">
            <button className={stylesButtonOther.button}>other</button>
            </Link>
        </div>
      );
  }