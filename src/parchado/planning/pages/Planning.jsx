import { Backdrop, Box, Button, CircularProgress, Divider, FormControl, Grid, InputLabel, MenuItem, Select, Tooltip, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { columnasPlaneaciones } from './ArrayColumns';
import TableDataGrid from '../../../components/TableDataGrid';
import { ParchadoLayout } from '../../layout/ParchadoLayout';
import { useFecthPlannings } from '../hooks/useFecthPlannings';
import { BtnImport } from '../components/BtnImport';
import { useImportPlanings } from '../hooks/useImportPlanings';
import EditIcon from '@mui/icons-material/Edit';
import CachedIcon from '@mui/icons-material/Cached';
import SendIcon from '@mui/icons-material/Send';
import { ModalPlanning } from '../components/ModalPlanning';
import { useSendMailPlannings } from '../hooks/useSendMailPlannings';



export const Planning = () => {
    const { plannings, isLoading, getPlanningsData } = useFecthPlannings();
    const { isLoadingImport, importPlanningsData } = useImportPlanings();
    const { isLoadingEmail, sendEmailsPlannings } = useSendMailPlannings();
    const [planningSelected, setPlanningSelected] = useState([]);
    const [openModal, setOpenModal] = useState(false)
    const [month, setMonth] = useState(new Date().getMonth() + 1)

    const [open, setOpen] = useState(false);

    useEffect(() => {
        getPlanningsData(month);
    }, [openModal]);

    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };

    const AbrirModal = () => {
        setOpenModal(true)
      }

    const handleChangeMonth = ({target}) => {
        console.log(target);
        setMonth(target.value);
        getPlanningsData(target.value);
    }  

    const handleSelect = (planning) => {
        let item = planningSelected.find(x => x.id === planning.id);
        if (item != undefined) {
            let newSelecteds = planningSelected.filter(x => x.id !== planning.id);
            setPlanningSelected([...newSelecteds]);
        } else {
            setPlanningSelected([planning, ...planningSelected]);
        }
    }

    const handleSelectAll = (target) => {
        if (target.checked) {
            const newSelecteds = plannings.map((planing) => planing);
            setPlanningSelected([...newSelecteds]);
            return;
        }
        setPlanningSelected([]);
    }

    const isSelectedPA = () => true;


    const importPlanning = async (file) => {
        handleToggle();
        console.log(file);
        await importPlanningsData(file, month);
        getPlanningsData(month);
        handleClose();

    }

    const sendEmail = async () => {
        handleToggle();
        await sendEmailsPlannings(planningSelected);
        getPlanningsData(month);
        handleClose();
    }

    return (
        <ParchadoLayout>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <Grid
                container
                direction={'column'}
                mb={2}
            >
                <Typography variant='p' className='title'>Lista de planeaciones</Typography>
                <Divider />
            </Grid>
            <Grid
                container
                spacing={2}
                mb={2}
                display ="flex"
                alignItems="center"
            >
                <Grid
                    item xs={6}
                    display ="flex"
                    alignItems="center"
                >
                    <BtnImport onChangeFile={(event) => importPlanning(event)} />
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-label">Mes planeación</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={month}
                            label="Age"
                            onChange={handleChangeMonth}
                        >
                            <MenuItem value={1}>Enero</MenuItem>
                            <MenuItem value={2}>Febrero</MenuItem>
                            <MenuItem value={3}>Marzo</MenuItem>
                            <MenuItem value={4}>Abril</MenuItem>
                            <MenuItem value={5}>Mayo</MenuItem>
                            <MenuItem value={6}>Junio</MenuItem>
                            <MenuItem value={7}>Julio</MenuItem>
                            <MenuItem value={8}>Agosto</MenuItem>
                            <MenuItem value={9}>Septiembre</MenuItem>
                            <MenuItem value={10}>Octubre</MenuItem>
                            <MenuItem value={11}>Noviembre</MenuItem>
                            <MenuItem value={12}>Diciembre</MenuItem>
                        </Select>
                    </FormControl>

                </Grid>
                <Grid
                    item xs={6}
                    align="end"
                >
                    <Tooltip title="Recargar" placement="top">
                        <Button className='buton'
                            variant="contained"
                            sx={{ fontSize: 10, ml: 5 }}
                            onClick= {() =>  getPlanningsData(month)}
                        >
                            <CachedIcon sx={{ color: "#f5f5f5 !important", fontSize: 25 }} />
                        </Button>
                    </Tooltip>
                    <Tooltip title="Enviar correos" placement="top">
                        <Button className='buton'
                            variant="contained"
                            sx={{ fontSize: 10, ml: 5 }}
                            onClick= {() => sendEmail()}
                        >
                            <SendIcon sx={{ color: "#f5f5f5 !important", fontSize: 25 }} />
                        </Button>
                    </Tooltip>
                    <Tooltip title="Editar" placement="top">
                        <Button className='buton'
                            variant="contained"
                            sx={{ fontSize: 10, ml: 5 }}
                            onClick = {() => AbrirModal()}
                        >
                            <EditIcon sx={{ color: "#f5f5f5 !important", fontSize: 25 }} />
                        </Button>
                    </Tooltip>
                </Grid>

            </Grid>

            {!isLoading &&
                (
                    <TableDataGrid 
                    columns={columnasPlaneaciones} 
                    data={plannings} 
                    isCheck 
                    onSelectItem={(item) => handleSelect(item)}
                    onSelectAllItem={(target) => handleSelectAll(target)}
                    rowsSelected = {planningSelected} 
                    rowCount = {plannings.length}
                    />
                )
            }

            <ModalPlanning
                open={openModal}
                setOpen={setOpenModal}
                planning={planningSelected[0]}
            />

        </ParchadoLayout>
    )
}
