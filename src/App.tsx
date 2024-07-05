import { ChangeEvent, useCallback, useState } from 'react'
import './App.css'
import { CadranValue, calcHour, hourLabel } from './modules/jupiter'

function App() {
    const [lune, setLune] = useState<CadranValue>(1)
    const [terre, setTerre] = useState<CadranValue>(1)
    const [soleil, setSoleil] = useState<CadranValue>(1)
    const [showResult, setShowResult] = useState(false)

    const handleChangeValue = (type: string, e: ChangeEvent<HTMLInputElement>) => {
        console.log(type, e.target.value);

        const value = parseInt(e.target.value)

        if (value === 1 || value === 2) {
            if (type === "lune") {
                setLune(value);
            } else if (type === "terre") {
                setTerre(value)
            } else if (type === "soleil") {
                setSoleil(value)
            }
            setShowResult(false)
        }
    }

    const handleShowResult = useCallback(() => {
        setShowResult(true)
    }, [])

    return (
        <div className="app">
            <div className="heure_form">
                <input type="number" className="astre" id="lune" min={1} max={2} value={lune} onChange={(e) => handleChangeValue("lune", e)} />
                <input type="number" className="astre" id="terre" min={1} max={2} value={terre} onChange={(e) => handleChangeValue("terre", e)} />
                <input type="number" className="astre" id="soleil" min={1} max={2} value={soleil} onChange={(e) => handleChangeValue("soleil", e)} />
            </div>

            <button id="btn_show" onClick={handleShowResult}>Afficher</button>
            <div className="heure">
                {showResult && <div className="heure_value"><span id="hour">{calcHour(lune, terre, soleil)}</span> (<span id="label">{hourLabel(calcHour(lune, terre, soleil))}</span>)</div>}
            </div>
        </div>
    )
}

export default App