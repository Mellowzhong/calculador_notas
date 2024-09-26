import { useState } from "react";
import PropTypes from 'prop-types';

export default function Nota({ onGradeChange }) {
    const [grade, setGrade] = useState(1);


    const handleChange = (event) => {
        const newValue = parseFloat(event.target.value);
        setGrade(newValue);
    }

    const handeRelease = () => {

        onGradeChange(grade);
    }

    return (
        <div>
            <form>
                <label htmlFor="nota" className="grid">
                    Nota
                    <input
                        className="rounded-md border-2"
                        type="range"
                        name="nota"
                        id="nota"
                        min={1}
                        max={7}
                        step={0.1}
                        value={grade}
                        onChange={handleChange}
                        onMouseUp={handeRelease}
                        onTouchEnd={handeRelease}
                    />
                    value : {grade.toFixed(1)}
                    <button type="submit">Confirmar</button>
                </label>
            </form>
        </div>
    )
}

Nota.propTypes = {
    onGradeChange: PropTypes.func,
}