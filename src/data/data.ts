import { IDataItem } from './types'

import acideAspartique from './acide-aspartique.webp'
import acideGlutamique from './acide-glutamique.webp'
import alanine from './alanine.webp'
import arginine from './arginine.webp'
import asparagine from './asparagine.webp'
import cysteine from './cysteine.webp'
import glutamine from './glutamine.webp'
import glycine from './glycine.webp'
import histidine from './histidine.webp'
import isoleucine from './isoleucine.webp'
import leucine from './leucine.webp'
import lysine from './lysine.webp'
import methionine from './methionine.webp'
import phenilalanine from './phenilalanine.webp'
import proline from './proline.webp'
import serine from './serine.webp'
import threonine from './threonine.webp'
import tryptophane from './tryptophane.webp'
import tyrosine from './tyrosine.webp'
import valine from './valine.webp'


const DATA: IDataItem[] = [
    {
        image: acideAspartique,
        name: "acide aspartique",
        desc: "Chaine latérale courte terminée par une fonction acide carboxilique",
        abbrevShort: "D", abbrevLong: "ASP",
        essential: "Non Essentiel",
        polarity: "N/A"
    },
    {
        image: acideGlutamique,
        name: "acide glutamique",
        desc: "Chaine de 2 carbones terminée par un COOH",
        abbrevShort: "E", abbrevLong: "GLU",
        essential: "Non Essentiel",
        polarity: "N/A"
    },
    {
        image: alanine,
        name: "alanine",
        desc: "Radicale méthyle",
        abbrevShort: "A", abbrevLong: "ALA",
        essential: "Non Essentiel",
        polarity: "Apolaire"
    },
    {
        image: arginine,
        name: "arginine",
        desc: "Groupement guadidinium",
        abbrevShort: "R", abbrevLong: "ARG",
        essential: "Semi Essentiel",
        polarity: "N/A"
    },
    {
        image: asparagine,
        name: "asparagine",
        desc: "Groupement Amide",
        abbrevShort: "N", abbrevLong: "ASN",
        essential: "Non Essentiel",
        polarity: "Polaire"
    },
    {
        image: cysteine,
        name: "cysteine",
        desc: "Groupement sulfhydryle = thiol",
        abbrevShort: "C", abbrevLong: "CYS",
        essential: "Non Essentiel",
        polarity: "Polaire"
    },
    {
        image: glutamine,
        name: "glutamine",
        desc: "Groupement Amide",
        abbrevShort: "Q", abbrevLong: "GLN",
        essential: "Non Essentiel",
        polarity: "Polaire"
    },
    {
        image: glycine,
        name: "glycine",
        desc: "Chaine latérale la + simple = atome H",
        abbrevShort: "G", abbrevLong: "GLY",
        essential: "Non Essentiel",
        polarity: "Apolaire"
    },
    {
        image: histidine,
        name: "histidine",
        desc: "Imidazole (base au sens de la définition de Bronsted-Lowry)",
        abbrevShort: "H", abbrevLong: "HIS",
        essential: "Semi Essentiel",
        polarity: "N/A"
    },
    {
        image: isoleucine,
        name: "isoleucine",
        desc: "Chaine latérale isobutyle. Carbones asymétriques",
        abbrevShort: "I", abbrevLong: "ILE",
        essential: "Essentiel",
        polarity: "Apolaire"
    },
    {
        image: leucine,
        name: "leucine",
        desc: "Chaine latérale isobutyle",
        abbrevShort: "L", abbrevLong: "LEU",
        essential: "Essentiel",
        polarity: "Apolaire"
    },
    {
        image: lysine,
        name: "lysine",
        desc: "4 carbones terminés par une fonction amine - NH2",
        abbrevShort: "K", abbrevLong: "LYS",
        essential: "Essentiel",
        polarity: "N/A"
    },
    {
        image: methionine,
        name: "methionine",
        desc: "Groupement thioether",
        abbrevShort: "M", abbrevLong: "MET",
        essential: "Essentiel",
        polarity: "Apolaire"
    },
    {
        image: phenilalanine,
        name: "phenylalanine",
        desc: "Radical phényl",
        abbrevShort: "F", abbrevLong: "PHE",
        essential: "Essentiel",
        polarity: "Apolaire"
    },
    {
        image: proline,
        name: "proline",
        desc: "Cycle pyrolidine",
        abbrevShort: "P", abbrevLong: "PRO",
        essential: "Non Essentiel",
        polarity: "Apolaire"
    },
    {
        image: serine,
        name: "serine",
        desc: "Groupement hydroxyle = alcool",
        abbrevShort: "S", abbrevLong: "SER",
        essential: "Non Essentiel",
        polarity: "Polaire"
    },
    {
        image: threonine,
        name: "threonine",
        desc: "Groupement hydroxyle = alcool",
        abbrevShort: "T", abbrevLong: "THR",
        essential: "Essentiel",
        polarity: "Polaire"
    },
    {
        image: tryptophane,
        name: "tryptophane",
        desc: "Groupement indol",
        abbrevShort: "W", abbrevLong: "TRP",
        essential: "Essentiel",
        polarity: "Apolaire"
    },
    {
        image: tyrosine,
        name: "tyrosine",
        desc: "Groupement phénol",
        abbrevShort: "Y", abbrevLong: "TYR",
        essential: "Non Essentiel",
        polarity: "Polaire"
    },
    {
        image: valine,
        name: "valine",
        desc: "Radical isopropyle",
        abbrevShort: "V", abbrevLong: "VAL",
        essential: "Essentiel",
        polarity: "Apolaire"
    },
]

export default DATA