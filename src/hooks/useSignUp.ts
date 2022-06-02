import { useEffect, useState } from "react";

export type AreaDataType = {
    alpha2Code: string;
    name: string;
    callingCodes: string;
    flag: string;
}

interface ISignUpData {
    pssVisible: boolean;
    setPssVisible: React.Dispatch<React.SetStateAction<boolean>>;
    selectedArea: AreaDataType;
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
    modalVisible: boolean;
    areas:  AreaDataType[];
    setSelectedArea: React.Dispatch<React.SetStateAction<AreaDataType>>;
}   

function useSignUp() {
    const [ pssVisible, setPssVisible ] = useState(false)
    const [ areas, setAreas ] = useState<AreaDataType[]>([]);
    const [ selectedArea, setSelectedArea ] = useState({} as AreaDataType);
    const [ modalVisible, setModalVisible ] = useState(false)

    useEffect(() => {        
        fetch('https://restcountries.com/v2/all')
        .then( response => response.json())
        .then( data => {
            let areaData = data as AreaDataType[];

            areaData = areaData.map( item => {
                return {
                    alpha2Code: item.alpha2Code,
                    name: item.name,
                    callingCodes: `+${item.callingCodes[0]}`,
                    flag: `https://countryflagsapi.com/png/${item.alpha2Code}`
                }
            });

            setAreas(areaData);

            if (areaData.length > 0) {

                let [defaultData] = areaData.filter( target => target.alpha2Code == "BR");

                if (defaultData) setSelectedArea(defaultData);

            }

        } );
    }, [])

    return {pssVisible, setPssVisible, selectedArea, setModalVisible, modalVisible, areas, setSelectedArea};

};

export default useSignUp;