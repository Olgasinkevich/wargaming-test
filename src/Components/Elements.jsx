import React, {useMemo} from 'react';
import Element from "./Element";
import '../styles/testStyle.css';


const DEFAULT_ELEMENTS = new Array(300).fill('').map((_, i) => `Элемент ${i + 1}`);
export default function Elements ({onSelect, minNumber, searchQuery, disabled}) {

        const elemList = useMemo(() =>
            DEFAULT_ELEMENTS.slice(minNumber)
                .filter((item)=> item.toLowerCase().includes(searchQuery.toLowerCase()))
                .map((item) => <Element
            onSelect={onSelect} text={item} key={item} disabled={disabled} />), [ minNumber, onSelect, searchQuery,disabled]);

        return (
            <div className={'elements frame'}>

                {elemList}
            </div>
        )
    }


