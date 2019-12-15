import React from 'react';

const Checkbox = () => {
    const [checkBoxState, setCheckBoxState] = usesState([]);

useEffect(() => {
    let checkBoxSate = [
    {protection: FFP1},
    {protection: FFP1},
    {protection: FFP1},
    {protection: FFP1},
    {protection: FFP1},
    {protection: FFP1}
];

setCheckBoxState(
    checkBoxSate.map(d => {
        return {
            select: false,
            protecction: d.protection
        };
    })
),
}, []);

}




export default Checkbox;