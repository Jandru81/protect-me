const pollutants = [
    {
        "nameEs": "Butyl acetate",
        "casNumber": "123-86-4",
        "proteccion": ["A"]
    },
    {
        "nameEs": "1-cloro-2-nitrobenceno",
        "casNumber": "88-73-3",
        "proteccion": ["A", "P3"]
    },
    {
        "nameEs": "1-cloro-4-nitrobenceno",
        "casNumber": "100-00-5",
        "proteccion": ["A", "P3"]
         
    },
    {
        "nameEs": "(1-hidroxietiliden) bifosfonato de tetrasodio",
        "casNumber": "3794-83-0",
        "proteccion": ["FFP2"]
    },
    {
        "nameEs": "1-Naftilamina",
        "casNumber": "134-32-7",
        "proteccion": ["FFP2"]
    },
    {
        "nameEs": "1,2-benzisotiazol-3(2H)-ona",
        "casNumber": "2634-33-5",
        "proteccion": ["A", "P2"]
    },
    {
        "nameEs": "1,2 diclorobenceno",
        "casNumber": "95-50-1",
        "proteccion": ["A"]
    },
    {
        "nameEs": "2-metilpropan-1-ol, isobutanol",
        "casNumber": "78-83-1",
        "proteccion": ["A"]
    },
    {
        "nameEs": "1,4 diclorobenceno",
        "casNumber": "106-46-7",
        "proteccion": ["A"]
    },
    {
        "nameEs": "1-(4-clorofenil)-4,4-dimetil-3-(1,2,4-triazol-1-ilmetil)pentan-3-ol",
        "casNumber": "107534-96-3",
        "proteccion": ["FFP3"]
    },
    {
        "nameEs": "1,6-bis (2,3-epoxipropoxi) hexano",
        "casNumber": "0",
        "proteccion": ["A"]
    },
    {
        "nameEs": "2-metil-4-isotiazolin-3-ona",
        "casNumber": "2682-20-4",
        "proteccion": ["FFP3"]
    },
    {
        "nameEs": "2-(4-terc-butilbencil) propionaldehído",
        "casNumber": "80-54-6",
        "proteccion": ["A", "P2"]
        
    },
    {
        "nameEs": "2,6-Di-terc butil p-cresol",
        "casNumber": "128-37-0",
        "proteccion": ["A"]
    },
    {
        "nameEs": "1,3- Butadieno",
        "casNumber": "106-99-0",
        "proteccion": ["AX"]
    },
    {
        "nameEs": "2-butanona oxima",
        "casNumber": "96-29-7",
        "proteccion": ["A"]
    },
    {
        "nameEs": "2-butil propenoato",
        "casNumber": "141-32-2",
        "proteccion": ["A"]
    },
    {
        "nameEs": "2-Naftilamina",
        "casNumber": "91-59-8",
        "proteccion": ["FFP3"]
    },
    {
        "nameEs": "2,4-Dichlorophenoxyacetic Acid",
        "casNumber": "94-75-7",
        "proteccion": ["A", "P3"]
    },
    {
        "nameEs": "3-aminometil-3,5,5-trimetilciclohexilamina",
        "casNumber": "2855-13-2",
        "proteccion": ["ABEK"]
    },
    {
        "nameEs": "4 cloro 2 aminotolueno",
        "casNumber": "95-79-4",
        "proteccion": ["A", "P3"]
    },
    {
        "nameEs": "4-hidroxi-4-metilpentano-2-ona",
        "casNumber": "123-42-2",
        "proteccion": ["A"]
    },
    {
        "nameEs": "4-Cloro-2-methylaniline",
        "casNumber": "95-69-2",
        "proteccion": ["A", "P3"]
    },
    {
        "nameEs": "Tri-o-cresyl Phosphate",
        "casNumber": "67375-30-8",
        "proteccion": ["A", "P2"] 
    },
    {
        "nameEs": "butirolactona",
        "casNumber": "0",
        "proteccion": ["A"]
    },
    {
        "nameEs": "Aceite de silicona",
        "casNumber": "0",
        "proteccion": ["A", "P2"] 
    },
    {
        "nameEs": "Aceite mineral",
        "casNumber": "0",
        "proteccion": ["A"]
    },
    {
        "nameEs": "Acetal",
        "casNumber": "105-57-7",
        "proteccion": ["A"]
    },
    {
        "nameEs": "Acetaldehído",
        "casNumber": "75-07-0",
        "proteccion": ["AX"]
    },
    {
        "nameEs": "Acetato de 1-metil-2-metoxietilo",
        "casNumber": "108-65-6",
        "proteccion": ["A"]
    },
    {
        "nameEs": "Acetato de 4-trec-butilciclohexilo",
        "casNumber": "32210-23-4",
        "proteccion": ["A", "P2"] 
    },
    {
        "nameEs": "Acetato de butilglicol",
        "casNumber": "112-07-2",
        "proteccion": ["A"]
    },
    {
        "nameEs": "Acetato de butilo",
        "casNumber": "123-86-4",
        "proteccion": ["A"]
    },
    {
        "nameEs": "Acetato de etilglicol",
        "casNumber": "111-15-9",
        "proteccion": ["A"]
    },
    {
        "nameEs": "Acetato de isobutilo",
        "casNumber": "110-19-0",
        "proteccion": ["A"]
    },
    {
        "nameEs": "Acetato de isopropilo",
        "casNumber": "108-21-4",
        "proteccion": ["A"]
    },
    {
        "nameEs": "Acetato de metilo",
        "casNumber": "79-20-9",
        "proteccion": ["AX"]
    },
    {
        "nameEs": "Acetato de pentilo",
        "casNumber": "628-63-7",
        "proteccion": ["A"]
    },
    {
        "nameEs": "Acetato de plomo (básico)",
        "casNumber": "1335-32-6",
        "proteccion": ["FFP2"]
    },
    {
        "nameEs": "Acetato de propilo",
        "casNumber": "108-21-4",
        "proteccion": ["A"]
    },
    {
        "nameEs": "Acetato de vinilo",
        "casNumber": "108-05-4",
        "proteccion": ["A"]
    },
    {
        "nameEs": "Acetona",
        "casNumber": "67-64-1",
        "proteccion": ["AX"]
    },
    {
        "nameEs": "Acetonitrilo",
        "casNumber": "75-05-8",
        "proteccion": ["A"]
    },
    {
        "nameEs": "Ácaros",
        "casNumber": "0",
        "proteccion": ["FFP3"]
    },
    {
        "nameEs": "Ácido 2,4 diclorofenoxiacético",
        "casNumber": "94-75-7",
        "proteccion": ["A", "P3"] 
    },
    {
        "nameEs": "Ácido acético",
        "casNumber": "64-19-7",
        "proteccion": ["ABE", "P2"] 
    },
    {
        "nameEs": "Ácido benzoico",
        "casNumber": "65-85-0",
        "proteccion": ["FFP2"]
    },
    {
        "nameEs": "Ácido bromhídrico",
        "casNumber": "10035-10-6",
        "proteccion": ["ABE", "P2"] 
    },
    {
        "nameEs": "Ácido cianhídrico",
        "casNumber": "74-90-8",
        "proteccion": ["A2B2E1", "P3"] 
    },
    {
        "nameEs": "Ácido cítrico monohidratado",
        "casNumber": "5949-29-1",
        "proteccion": ["FFP2"]
    },
    {
        "nameEs": "Ácido láctico 80%",
        "casNumber": "79-33-4",
        "proteccion": ["FFP2"]
    },
    {
        "nameEs": "Ácido clorhídrico (>10%)",
        "casNumber": "7647-01-0",
        "proteccion": ["ABE", "P2"] 
    },
    {
        "nameEs": "Ácido cloroacético",
        "casNumber": "79-11-8",
        "proteccion": ["A", "P3"] 
    },
    {
        "nameEs": "Ácido dicloroacético",
        "casNumber": "79-43-6",
        "proteccion": ["A"]
    },
    {
        "nameEs": "Ácido dicloropropiónico",
        "casNumber": "75-99-0",
        "proteccion": ["A"]
    },
    {
        "nameEs": "Ácido etanoico",
        "casNumber": "64-19-7",
        "proteccion": ["ABE", "P2"] 
    },
    {
        "nameEs": "Ácido fluorihídrico",
        "casNumber": "7664-39-3",
        "proteccion": ["ABE", "P2"] 
    },
    {
        "nameEs": "Ácido fórmico",
        "casNumber": "64-18-6",
        "proteccion": ["ABE"]
    },
    {
        "nameEs": "Ácido fosfórico",
        "casNumber": "7664-38-12",
        "proteccion": ["P3"]
    },
    {
        "nameEs": "Ácido hidrociánico",
        "casNumber": "74-90-8",
        "proteccion": ["A2B2E1", "P3"] 
    },
    {
        "nameEs": "Ácido iodídrico",
        "casNumber": "10034-85-2",
        "proteccion": ["ABE"]
    },
    {
        "nameEs": "Ácido iodoacético",
        "casNumber": "64-69-7",
        "proteccion": ["ABE", "P3"] 
    },
    {
        "nameEs": "Ácido metacrílico",
        "casNumber": "79-41-4",
        "proteccion": ["A", "P2"] 
    },
    {
        "nameEs": "Ácido metilcarboxílico",
        "casNumber": "64-19-7",
        "proteccion": ["ABE", "P2"]
    },
    {
        "nameEs": "Ácido nítrico (>70%)",
        "casNumber": "7697-37-2",
        "proteccion": ["ABE", "P2"] 
    },
    {
        "nameEs": "Ácido nitroso",
        "casNumber": "7782-77-6",
        "proteccion": ["ABE", "P2"] 
    },
    {
        "nameEs": "Acido oleico",
        "casNumber": "112-80-1",
        "proteccion": ["FFP2"]
    },
    {
        "nameEs": "Ácido ortofosfórico",
        "casNumber": "7664-38-2",
        "proteccion": ["FFP2"]
    },
    {
        "nameEs": "Ácido oxálico",
        "casNumber": "144-62-7",
        "proteccion": ["FFP2"]
    },
    {
        "nameEs": "Ácido perácetico",
        "casNumber": "79-21-0",
        "proteccion": ["ABE", "P3"] 
    },
    {
        "nameEs": "Ácido perclórico",
        "casNumber": "7601-90-3",
        "proteccion": ["ABE", "P2"]
    },
    {
        "nameEs": "Ácido picronítrico",
        "casNumber": "88-89-1",
        "proteccion": ["FFP3"]
    },
    {
        "nameEs": "ácido p-toluenosulfonico monohidratado",
        "casNumber": "6192-52-5",
        "proteccion": ["A", "P3"] 
    },
    {
        "nameEs": "Ácido sulfhídrico",
        "casNumber": "214-88-78",
        "proteccion": ["ABE"]
    },
    {
        "nameEs": "Ácido sulfúrico",
        "casNumber": "7664-93-9",
        "proteccion": ["FFP3"]
    },
    {
        "nameEs": "Ácido tricloroacético",
        "casNumber": "76-03-9",
        "proteccion": ["ABE"]
    },
    {
        "nameEs": "Ácido α-propiónico",
        "casNumber": "79-09-4",
        "proteccion": ["A"]
    },
    {
        "nameEs": "Ácidos de arsénico",
        "casNumber": "36465-76-6",
        "proteccion": ["FFP3"]
    },
    {
        "nameEs": "Ácidos de flúor",
        "casNumber": "0",
        "proteccion": ["ABE", "P3"] 
    },
    {
        "nameEs": "Ácidos de sílice",
        "casNumber": "7631-86-3",
        "proteccion": ["FFP2"]
    },
    {
        "nameEs": "Ácidos sulfónicos, petróleo, sales de bario",
        "casNumber": "61790-48-5",
        "proteccion": ["FFP2"]
    },
    {
        "nameEs": "Acril aldehído",
        "casNumber": "107-02-8",
        "proteccion": ["AX"]
    },
    {
        "nameEs": "Acrilamida",
        "casNumber": "79-06-1",
        "proteccion": ["A", "P3"] 
    },
    {
        "nameEs": "Acrilato de butilo",
        "casNumber": "141-32-2",
        "proteccion": ["A"]
    },
    {
        "nameEs": "Acrilonitrilo",
        "casNumber": "107-13-1",
        "proteccion": ["A"]
    },
    {
        "nameEs": "Alcanfor (sintético)",
        "casNumber": "76-22-2",
        "proteccion": ["A"]
    },
    {
        "nameEs": "Alcohol alquílico etoxilato",
        "casNumber": "0",
        "proteccion": ["A", "P3"] 
    },
    {
        "nameEs": "Alcohol amílico",
        "casNumber": "123-51-3",
        "proteccion": ["A"]
    },
    {
        "nameEs": "Alcohol butilo (1-butanol)",
        "casNumber": "71-36-3",
        "proteccion": ["A"]
    },
    {
        "nameEs": "Alcohol, C12-C14, etoxilato",
        "casNumber": "68439-50-9",
        "proteccion": ["A", "P2"] 
    },
    {
        "nameEs": "Alcohol, C12-C15, etoxilato",
        "casNumber": "68131-39-5",
        "proteccion": ["A", "P2"] 
    },
    {
        "nameEs": "Alcohol C12-C18 etoxilato",
        "casNumber": "68213-23-0",
        "proteccion": ["A", "P2"] 
    },
    {
        "nameEs": "Alcohol (C13) EO",
        "casNumber": "69011-36-5",
        "proteccion": ["A", "P2"] 
    },
    {
        "nameEs": "Alcohol Etílico",
        "casNumber": "64-17-5",
        "proteccion": ["A"]
    },
    {
        "nameEs": "Alcohol glicidílico",
        "casNumber": "556-52-5",
        "proteccion": ["A"]
    },
    {
        "nameEs": "Alcohol graso etoxilado",
        "casNumber": "166736-08-9",
        "proteccion": ["AX"]
    },
    {
        "nameEs": "Alcohol isometílico",
        "casNumber": "0",
        "proteccion": ["A"]
    },
    {
        "nameEs": "Alcohol isopropílico",
        "casNumber": "67-63-0",
        "proteccion": ["A"]
    },
    {
        "nameEs": "Alcoholes, C12-C14 (número par), etoxilados < 2'5 EO, sulfatos, sales de sodio",
        "casNumber": "68891-38-3",
        "proteccion": ["FFP3"]
    },
    {
        "nameEs": "Aldrín",
        "casNumber": "309-00-2",
        "proteccion": ["A", "P3"] 
    },
    {
        "nameEs": "Alfa-isometilionona",
        "casNumber": "127-51-5",
        "proteccion": ["A", "P2"]
    },
    {
        "nameEs": "Algodón lana",
        "casNumber": "0",
        "proteccion": ["FFP2"]
    },
    {
        "nameEs": "Alquil aluminio",
        "casNumber": "0",
        "proteccion": ["A", "P2"]
    },
    {
        "nameEs": "Alquitrán",
        "casNumber": "0",
        "proteccion": ["A", "P3"] 
    },
    {
        "nameEs": "Alquitrán de hulla",
        "casNumber": "0",
        "proteccion": ["A", "P3"] 
    },
    {
        "nameEs": "Polvo de aluminio",
        "casNumber": "7429-90-5",
        "proteccion": ["FFP2"]
    },
    {
        "nameEs": "Amianto o asbesto (fibras)",
        "casNumber": "1332-21-4",
        "proteccion": ["FFP3"]
    },
    {
        "nameEs": "Amida sódica",
        "casNumber": "7782-92-5",
        "proteccion": ["FFP3"]
    },
    {
        "nameEs": "Amina",
        "casNumber": "0",
        "proteccion": ["ABEK"]
    },
    {
        "nameEs": "Aminas, coco alquil, etoxiladas",
        "casNumber": "61791-14-8",
        "proteccion": ["A", "P3"] 
    },
    {
        "nameEs": "Amino 2 nitrofenol",
        "casNumber": "119-34-6",
        "proteccion": ["A", "P3"] 
    }
];

module.exports = pollutants;