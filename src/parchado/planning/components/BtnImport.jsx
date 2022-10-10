import { Button } from '@mui/material';
import PublishIcon from '@mui/icons-material/Publish';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useState } from 'react';

export const BtnImport = ({ onChangeFile }) => {
    
    const [inputValue, setinputValue] = useState('');

    const changeHandler = async (event) => {
        onChangeFile(event.target.files[0]);
        setinputValue('');
	};


    return (
        <>
            <label htmlFor="btn-upload" >
                <input
                    id="btn-upload"
                    name="btn-upload"
                    style={{ display: 'none' }}
                    onChange={(event) => changeHandler(event)}
                    type="file" 
                    value={inputValue}
                    />
                <Button sx={{ mr: 5 }}
                    className="buton"
                    variant="contained"
                    component="span" >
                    <PublishIcon sx={{ color: "#f5f5f5 !important", fontSize: 25, marginRight: 1.5 }} />
                    Importar
                </Button>
            </label>
        </>
    )
}
