import React, { useEffect, useState } from 'react'
import CardComponent from '../../components/CardComponent';
import ProgressBar from '../../components/ProgressBar';
import { getProductData } from '../../functions/getData';

export default function Export() {
    const [exportData, setExportData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await getProductData();
                if (res) {
                    setExportData(res)
                }
            }
            catch (err) {
                console.log(err)
            }
        }
        getData();
    }, [])
    return (
        <>
            {exportData === [] || exportData === undefined ?
                <ProgressBar />
                :
                <CardComponent obj={exportData} state="EXPORT" />
            }
        </>
    )
}
